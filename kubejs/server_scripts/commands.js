//priority: 0
// Commands - standalone commands without complex logic dependencies

// /backToBetsy - teleport to last petted cow location
ServerEvents.commandRegistry((event) => {
  const { commands: Commands } = event;

  event.register(
    Commands.literal("backToBetsy").executes((context) => {
      let player = context.source.player;
      let x = player.persistentData.get("betsy_last_location_x");
      let z = player.persistentData.get("betsy_last_location_z");

      if (x && z) {
        Utils.server.runCommandSilent(
          `/tp ${player.displayName.string} ${parseInt(x)} 322 ${parseInt(z)}`
        );
      } else {
        Utils.server.runCommandSilent(
          `/title ${player.displayName.string} actionbar "Need to pet Betsy first!"`
        );
      }
      return 0;
    })
  );
});
