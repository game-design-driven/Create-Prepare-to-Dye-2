ServerEvents.commandRegistry(event => {
    event.register(
        event.commands.literal('exampleRelay')
            .requires(src => src.hasPermission(2))
            .executes(ctx => {
                ctx.source.player.give(Item.of('personalmesystem:communication_relay', {
                    BlockEntityTag: {
                        CustomName: '{"text":"Qube Fair Conversion Relay","color":"gold"}',
                        Description: [
                            '{"text":"We at Qube value YOU","color":"gray"}',
                            '{"text":"We offer you the following salt conversion rates","color":"dark_gray"}'
                        ],
                        virtual_recipes: [
                            {
                                inputs: [{ item: 'ptdye:salt_granule', count: 10 }],
                                outputs: [{ item: 'ptdye:salt', count: 1 }]
                            },
                            {
                                inputs: [{ item: 'ptdye:salt', count: 20 }],
                                outputs: [{ item: 'ptdye:salt_shaker', count: 1 }]
                            },
                            {
                                inputs: [{ item: 'ptdye:salt_shaker', count: 1 }],
                                outputs: [{ item: 'ptdye:salt', count: 16 }]
                            },
                            {
                                inputs: [{ item: 'ptdye:salt', count: 1 }],
                                outputs: [{ item: 'ptdye:salt_granule', count: 9 }]
                            }
                        ]
                    }
                }))
                return 1
            })
    )
})
