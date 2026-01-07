// Drop Pod - Handles registration of events, and commands

// Command /spawnDrop
// Used to test spawning Drop Pods.
//  Command is applied to the player who runs it, spawns drop pod above player's current position.
ServerEvents.commandRegistry((event) => {
  const { commands: Commands } = event;
  event.register(
    Commands.literal('spawnDrop')
      .requires((src) => src.hasPermission(2))
      .executes((ctx) => {
        const level = ctx.source.level;
        const player = ctx.source.player;

        if (!player) {
          ctx.source.sendFailure('This command can only be run by a player!');
          return 0;
        }

        // TODO(remove): This check was added as PTDyePlus 1.20 wasn't part of the modpack at time of implementation
        if (!Platform.isLoaded('ptdyeplus')) {
          ctx.source.sendFailure('This command requires the PTDyePlus mod, which cannot be found.')
          return 0;
        }

        const playerPos = player.blockPosition();
        const surfaceY = level.getHeight('world_surface', playerPos.getX(), playerPos.getZ());
        const origin = BlockPos(playerPos.getX(), surfaceY, playerPos.getZ());

        global.drop_pod.spawnDrop(level, origin, player);

        return 1;
      })
  );
});

// Command /clearState
// Used to remove the `PTD_locked` boolean tag
// TODO: Move this to it's own file as this feature doesn't need to be exclusive to Drop Pod
ServerEvents.commandRegistry((event) => {
  const { commands: Commands } = event;
  event.register(
    Commands.literal('clearState')
      .requires((src) => src.hasPermission(2))
      .executes((ctx) => {
        const player = ctx.source.player;
        if (!player) {
          ctx.source.sendFailure('This command can only be run by a player!');
          return 0;
        }

        player.persistentData.remove('PTD_locked');

        return 1;
      })
  );
});

// Command /packing <x> <y> <z>
// Helper for manually altering contraption block positions by packing the variables into a long, which contraptions expect.
ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event;
  event.register(
    Commands.literal('packing').then(
      Commands.argument('x', Arguments.INTEGER.create(event)).then(
        Commands.argument('y', Arguments.INTEGER.create(event)).then(
          Commands.argument('z', Arguments.INTEGER.create(event)).executes((ctx) => {
            const x = Arguments.INTEGER.getResult(ctx, 'x');
            const y = Arguments.INTEGER.getResult(ctx, 'y');
            const z = Arguments.INTEGER.getResult(ctx, 'z');

            const pos = BlockPos(x, y, z);
            const longValue = pos.asLong();

            ctx.source.sendSuccess(Text.green(`Packed [${x}, ${y}, ${z}] ->`).append(Text.yellow(`${longValue}L`)), false);
            console.log(`PACKER: [${x}, ${y}, ${z}] -> ${longValue}L`);

            return 1;
          })
        )
      )
    )
  );
});

// Ticks all Drop Pod's state machine
LevelEvents.tick((event) => {
  // TODO(remove): This check was added as PTDyePlus 1.20.1 wasn't part of the modpack at time of implementation
  if (!Platform.isLoaded('ptdyeplus')) {
    // If there is no ptdyeplus; then there are no DPs to tick.
    return;
  }

  const { level } = event;

  let activeDrops = level.persistentData.getList('PTD_activeDrops', 8);

  if (activeDrops.isEmpty()) return;

  for (let i = activeDrops.size() - 1; i >= 0; i--) {
    let uuid = activeDrops.get(i).getAsString();
    let entity = level.getEntity(uuid);

    if (!entity) continue; // entity is unloaded

    if (!entity.alive) {
      activeDrops.remove(i);
      continue; // entity had been removed
    }

    let playerUUID = entity.persistentData.getUUID('player');
    let player = level.getPlayerByUUID(playerUUID);

    let hasFinished = global.drop_pod.stateMachine(level, entity, player);
    if (hasFinished) {
      // Remove entity which state machine has exited on completion
      activeDrops.remove(i);
      continue;
    }
  }
});
