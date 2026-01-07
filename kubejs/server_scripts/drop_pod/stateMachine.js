// Drop Pod State Machine - Handles the animation of the drop pod, to easily track and transition between states

let $Vec3 = $Vec3 || Java.loadClass('net.minecraft.world.phys.Vec3');

// Get's the surface height by checking a 3x3 block area around given block position
let getHighestSurface = (level, x, z) => {
  let highest = -64;
  for (let ox = -1; ox <= 1; ox++) {
    for (let oz = -1; oz <= 1; oz++) {
      let surfaceY = level.getHeight('motion_blocking', x + ox, z + oz);
      if (surfaceY > highest) highest = surfaceY;
    }
  }
  return highest;
};

let getDropPodParts = (entity) => {
  return {
    doorBottom: entity.passengers.find(p => p.tags.contains('PTD_DP_doorBottom')),
    doorTop: entity.passengers.find(p => p.tags.contains('PTD_DP_doorTop')),
    contraptions: entity.passengers.filter(p => p.type.contains('contraption')),
  }
}

// Magic number to prevent client from smoothing direction
// TLDR; without this added to the motion vector, the contraptions on the client
//       try to face West. This vector points slightly Southward.
let MAGIC_VECTOR = { x: 0.0, z: 0.00007 };

let dropPodStates = {
  falling: {
    tick: (level, entity, ctx) => {
      let cfg = global.drop_pod.config;
      let startH = cfg.breakingStartHeight.get();
      let endH   = cfg.breakingEndHeight.get();
      let vTerm  = cfg.terminalVelocity.get();
      let vLand  = cfg.landingSpeed.get();

      let dist = ctx.actualDist;

      let targetSpeed;
      if (dist > startH) { // Phase1: Full burn / Fast fall
        targetSpeed = vTerm;
      } else if (dist > endH) { // Phase 2: Braking / Transition
        let range = startH - endH;
        let progress = (dist - endH) / (range > 0 ? range : 0.1);
        targetSpeed = vLand + (progress * (vTerm - vLand));
      } else { // Phase 3: Slow stable approach
        targetSpeed = vLand;
      }

      if (dist < startH && dist > 0) {
        level.spawnParticles('minecraft:flame', true, entity.x, entity.y, entity.z, 0.2, 0.2, 0.2, 5, 0.05);
        level.spawnParticles('minecraft:smoke', true, entity.x, entity.y, entity.z, 0.3, 0.1, 0.3, 3, 0.02);
      }

      if (ctx.predDist <= 0) {
        entity.setPos(entity.x, ctx.surfaceY + 0.1, entity.z);
        entity.setMotion(0.0, 0.0, 0.0);

        level.spawnParticles('minecraft:explosion', true, entity.x, entity.y + 0.5, entity.z, 0.8, 0.8, 0.8, 3, 0);
        return 'impact';
      }

      entity.setMotion(MAGIC_VECTOR.x, -targetSpeed, MAGIC_VECTOR.z);
    },
  },
  impact: {
    tick: (level, entity, _) => {
      // Adds a delay between landing, and opening the doors to ensure the client is caught up.
      let timer = entity.persistentData.getInt('PTD_DP_timer') || 0;
      if (timer === 6) {
        level.playSound(null, entity.x, entity.y, entity.z, 'minecraft:block.anvil.land', 'blocks', 0.8, 0.7);
      }

      if (timer < 20) {
        entity.persistentData.putInt('PTD_DP_timer', timer + 1);
        return null;
      }

      entity.persistentData.remove('PTD_DP_timer');
      return 'open';
    },
  },
  open: {
    tick: (_, entity, __) => {
      let { doorBottom, doorTop } = getDropPodParts(entity);
      if (doorBottom)
        doorBottom.setGoal(new $Vec3(-180.0, 0.0, 0.0), 10);
      if (doorTop)
        doorTop.setGoal(new $Vec3(180, 0.0, 0.0), 10);
      return 'opening';
    },
  },
  opening: {
    tick: (_, entity, __) => {
      let { doorBottom, doorTop } = getDropPodParts(entity);
      let bottomReady = !doorBottom || doorBottom.isAtGoal();
      let topReady = !doorTop || doorTop.isAtGoal();
      return (bottomReady && topReady) ? 'finish' : null;
    },
  },
  finish: {
    tick: (_, entity, ctx) => {
      // Cleanup
      const { contraptions } = getDropPodParts(entity);
      contraptions.forEach(c => c.disassemble());
      ctx.player.persistentData.remove('PTD_locked');
      entity.discard();

      return 'done';
    },
  },
};

global.drop_pod.stateMachine = (level, entity, player) => {
  if (!player) {
    entity.setMotion(0, 0, 0);
    return false;
  }

  let stateName = entity.persistentData.getString('state') || 'falling';
  let surfaceY = getHighestSurface(level, entity.x - 0.5, entity.z - 0.5);

  let ctx = {
    surfaceY: surfaceY,
    actualDist: entity.y - surfaceY,
    predDist: entity.y + entity.deltaMovement.y() - surfaceY,
    player: player,
  };

  let stateObj = dropPodStates[stateName];
  if (stateObj) {
    let nextStateName = stateObj.tick(level, entity, ctx);
    if (nextStateName && nextStateName !== stateName) {
      entity.persistentData.putString('state', nextStateName);
      if (nextStateName === 'done')
        return true;
    }
  }

  return false;
};
