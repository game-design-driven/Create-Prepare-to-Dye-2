// Mount Lock - Stop player from unmounting if they have the boolean tag `PTD_locked`

ForgeEvents.onEvent('net.minecraftforge.event.entity.EntityMountEvent', (event) => {
  const { entity, dismounting } = event;

  if (!entity || !entity.isPlayer() || !dismounting) return;

  if (entity.persistentData.getBoolean('PTD_locked')) {
    event.setCanceled(true);
    // NOTE: The following message was written for the drop pod intro. Change the string into a
    //        player data string so we can reuse this script across the project if needs be
    entity.displayClientMessage(Text.red('Electronic locks engaged. Cannot exit!'), true);
  }
});
