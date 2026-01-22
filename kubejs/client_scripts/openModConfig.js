NetworkEvents.dataReceived('open_mod_config', event => {
    return
    let modId = event.data.getString('modId')
    let Minecraft = Java.loadClass('net.minecraft.client.Minecraft')
    Java.loadClass('fuzs.forgeconfigscreens.client.helper.ConfigScreenHelper')
        .createConfigScreen(modId)
        .ifPresent(factory => {
            Minecraft.getInstance().setScreen(factory.apply(Minecraft.getInstance().screen))
        })
})
