// Drop Pod Spawning - Contains the logic for spawning the drop pod contraption

let $StringTag = $StringTag || Java.loadClass('net.minecraft.nbt.StringTag');

let spawnRootEntity = (level, spawnPosition) => {
  let root = level.createEntity('ptdyeplus:anchor');
  root.setPos(spawnPosition.x, spawnPosition.y, spawnPosition.z);
  root.setInvulnerable(true);

  root.addTag('PTD_DP_root');
  root.spawn();

  root.persistentData.putString('state', 'spawning');

  let activeDrops = level.persistentData.getList('PTD_activeDrops', 8);
  activeDrops.add($StringTag.valueOf(root.uuid.toString()));
  level.persistentData.put('PTD_activeDrops', activeDrops);

  return root;
};

let spawnCoreEntity = (level, spawnPosition) => {
  let core = level.createEntity('create:contraption');
  core.mergeNbt(global.drop_pod.assets.CORE);
  core.setPos(spawnPosition.x, spawnPosition.y, spawnPosition.z);
  core.setInvulnerable(true);

  core.addTag('PTD_DP_core');
  core.spawn();

  return core;
};

let spawnDoorBottom = (level, spawnPosition) => {
  let doorBottom = level.createEntity('ptdyeplus:independent_contraption');
  doorBottom.mergeNbt(global.drop_pod.assets.DOOR_BOTTOM);
  doorBottom.setPos(spawnPosition.x, spawnPosition.y, spawnPosition.z);
  doorBottom.setInvulnerable(true);

  doorBottom.addTag('PTD_DP_doorBottom');
  doorBottom.spawn();

  return doorBottom;
};

let spawnDoorTop = (level, spawnPosition) => {
  let doorBottom = level.createEntity('ptdyeplus:independent_contraption');
  doorBottom.mergeNbt(global.drop_pod.assets.DOOR_TOP);
  doorBottom.setPos(spawnPosition.x, spawnPosition.y, spawnPosition.z);
  doorBottom.setInvulnerable(true);

  doorBottom.addTag('PTD_DP_doorTop');
  doorBottom.spawn();

  return doorBottom;
};

global.drop_pod.spawnDrop = (level, origin, player) => {
  let surfaceY = origin.getY();
  let spawnHeight = surfaceY + global.drop_pod.config.spawnHeight.get();
  let spawnPosition = {
    x: origin.getX() + 0.5,
    y: spawnHeight,
    z: origin.getZ() + 0.5,
  };

  let root = spawnRootEntity(level, spawnPosition);

  let core = spawnCoreEntity(level, spawnPosition);
  core.startRiding(root, true);
  core.persistentData.putUUID('root', root.uuid);

  let doorBottom = spawnDoorBottom(level, spawnPosition);
  doorBottom.startRiding(root, true);
  doorBottom.persistentData.putUUID('root', root.uuid);

  let doorTop = spawnDoorTop(level, spawnPosition);
  doorTop.startRiding(root, true);
  doorTop.persistentData.putUUID('root', root.uuid);

  // Comment below to prevent teleporting player to drop pod seat
  // core.addSittingPassenger(player, 0);
  // player.persistentData.putBoolean('PTD_locked', true); // see startup_scripts/mount_lock

  root.persistentData.putString('state', 'falling');
  root.persistentData.putUUID('player', player.uuid);
  return root;
};
