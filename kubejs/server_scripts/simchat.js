// SimChat Callbacks Registration
// Registers callbacks for conditions and templates in dialogue files
// Uses direct registration - callbacks re-register automatically on /kubejs reload server_scripts

// Clear old callbacks at start of script load
SimChat.clearCallbacks()

// ============================================
// BENCHMARK SLOW FUNCTION (for testing chunked loading)
// ============================================
let slowCounter = 0
SimChat.registerCallback('slowCounter', function(ctx) {
    // Busy loop to simulate slow template resolution (~20ms)
    let start = Date.now()
    while (Date.now() - start < 20) {
        // Busy wait
        Math.sqrt(Math.random())
    }
    slowCounter++
    return 'Count: ' + slowCounter
})

// ============================================
// HELPER: Get team data value
// ============================================
function getTeamData(ctx, key) {
    var team = ctx.getTeam()
    if (!team) return 0
    var data = team.getData()
    if (!data) return 0
    return data.get(key) || 0
}

// ============================================
// CONTRACT COMPLETION CALLBACKS
// These check team data set via "simchat data set <key> <value>"
// Usage: condition: "kjs:bcfPlatesComplete"
// ============================================

// BCF Contracts
SimChat.registerCallback('bcfPlatesComplete', function(ctx) {
    return getTeamData(ctx, 'bcf_plates_done') >= 1
})

SimChat.registerCallback('bcfPlates2Complete', function(ctx) {
    return getTeamData(ctx, 'bcf_plates2_done') >= 1
})

// BNW Contracts  
SimChat.registerCallback('bnwRedstoneComplete', function(ctx) {
    return getTeamData(ctx, 'bnw_redstone_done') >= 1
})

SimChat.registerCallback('bnwManasteelComplete', function(ctx) {
    return getTeamData(ctx, 'bnw_manasteel_done') >= 1
})

// Qube Contracts
SimChat.registerCallback('qubeGlassComplete', function(ctx) {
    return getTeamData(ctx, 'qube_glass_done') >= 1
})

SimChat.registerCallback('qubeSturdyComplete', function(ctx) {
    return getTeamData(ctx, 'qube_sturdy_done') >= 1
})

SimChat.registerCallback('qubeLogicComplete', function(ctx) {
    return getTeamData(ctx, 'qube_logic_done') >= 1
})

SimChat.registerCallback('qubeTrackComplete', function(ctx) {
    return getTeamData(ctx, 'qube_track_done') >= 1
})

SimChat.registerCallback('qubeWheatComplete', function(ctx) {
    return getTeamData(ctx, 'qube_wheat_done') >= 1
})

// MLC Contracts
SimChat.registerCallback('mlcSandComplete', function(ctx) {
    return getTeamData(ctx, 'mlc_sand_done') >= 1
})

SimChat.registerCallback('mlcSand2Complete', function(ctx) {
    return getTeamData(ctx, 'mlc_sand2_done') >= 1
})

// BHB Contracts
SimChat.registerCallback('bhbCheeseComplete', function(ctx) {
    return getTeamData(ctx, 'bhb_cheese_done') >= 1
})

SimChat.registerCallback('bhbWheatComplete', function(ctx) {
    return getTeamData(ctx, 'bhb_wheat_done') >= 1
})

// WSC Contracts
SimChat.registerCallback('wscAxesComplete', function(ctx) {
    return getTeamData(ctx, 'wsc_axes_done') >= 1
})

// ============================================
// DEBUG CALLBACKS (keep for testing)
// ============================================
SimChat.registerCallback('howManyItems', function(ctx) {
    return ctx.player.inventory
})

SimChat.registerCallback('debug1', function(ctx) {
    return ctx.player !== undefined
})

  SimChat.registerCallback('debug2', ctx => {
      return ctx.player.inventory !== undefined
  })

  SimChat.registerCallback('debug3', ctx => {
      return ctx.player.inventory.slots  // kjs$getSlots()
  })

  SimChat.registerCallback('debug4', ctx => {
      return ctx.player.inventory.count()  // total item count
  })

  SimChat.registerCallback('debugAll', ctx => {
      let p = ctx.player
      let inv = p ? p.inventory : null
      return `player=${p !== undefined}, inv=${inv !== undefined}, slots=${inv ? inv.slots : 'N/A'}, count=${inv
  ? inv.count() : 'N/A'}`
  })
    SimChat.registerCallback('debugInv', ctx => {
      // Try direct method call with kjs$ prefix
      let inv = ctx.player['kjs$getInventory']
      return `inv=${inv !== undefined}, type=${typeof inv}`
  })
    SimChat.registerCallback('debugProps', ctx => {
      let p = ctx.player
      let props = []
      for (let k in p) {
          props.push(k)
          if (props.length > 20) break
      }
      return props.join(', ')
  })
    SimChat.registerCallback('debugName', ctx => {
      return ctx.player.getName().getString()
  })
    SimChat.registerCallback('debugExplicit', ctx => {
      return ctx.getPlayer().getName().getString()
  })
    SimChat.registerCallback('debugInv3', ctx => {
      let p = ctx.getPlayer()
      return p.getInventory().count()
  })
SimChat.registerCallback('printContextNice', ctx => {
    let player = ctx.getPlayer()
    let team = ctx.getTeam()
    let entity = ctx.getEntity()
    let fullstr = ""
    //player stuff
    fullstr += `Player: ${player ? player.getName().getString() : 'N/A'}; `
    //team stuff
    fullstr += `Team: ${team ? team.getTitle() : 'N/A'} (Members: ${team ? team.getMemberCount() : 'N/A'}); `
    //entity stuff
    fullstr += `Entity Name: ${entity ? entity.getDisplayName() : 'N/A'}; `
    fullstr += `Entity id: ${entity ? entity.getId() : 'N/A'}; `
    fullstr += `Entity messages count: ${entity ? entity.getMessageCount() : 'N/A'}; `
    //data
    team.getData().forEach((k, v) => {
        fullstr += `Team data: ${k} = ${v}; `
    })
    return fullstr
})
// // Helper to safely get persistent data int
// function getPersistentInt(player, key) {
//     let data = player.persistentData
//     return data ? data.getInt(key) : 0
// }

// function getPersistentBoolean(player, key) {
//     let data = player.persistentData
//     return data ? data.getBoolean(key) : false
// }

// // ============================================
// // REPUTATION CALLBACKS (for conditions)
// // Usage: condition: "kjs:hasBrokerRep"
// // ============================================


// SimChat.registerCallback('hasBrokerRep', ctx => {
//     return getPersistentInt(ctx.player, 'broker_rep') >= 5
// })

// SimChat.registerCallback('hasHighBrokerRep', ctx => {
//     return getPersistentInt(ctx.player, 'broker_rep') >= 15
// })

// SimChat.registerCallback('hasHelionRep', ctx => {
//     return getPersistentInt(ctx.player, 'helion_rep') >= 5
// })

// SimChat.registerCallback('hasHighHelionRep', ctx => {
//     return getPersistentInt(ctx.player, 'helion_rep') >= 15
// })

// SimChat.registerCallback('hasNexusRep', ctx => {
//     return getPersistentInt(ctx.player, 'nexus_rep') >= 5
// })

// SimChat.registerCallback('hasHighNexusRep', ctx => {
//     return getPersistentInt(ctx.player, 'nexus_rep') >= 15
// })

// SimChat.registerCallback('hasSyndicateRep', ctx => {
//     return getPersistentInt(ctx.player, 'syndicate_rep') >= 3
// })

// SimChat.registerCallback('hasHighSyndicateRep', ctx => {
//     return getPersistentInt(ctx.player, 'syndicate_rep') >= 10
// })

// // ============================================
// // TEMPLATE CALLBACKS (for displaying values)
// // Usage: {kjs:brokerRep} in labels/text
// // ============================================

// SimChat.registerCallback('brokerRep', ctx => {
//     return getPersistentInt(ctx.player, 'broker_rep')
// })

// SimChat.registerCallback('helionRep', ctx => {
//     return getPersistentInt(ctx.player, 'helion_rep')
// })

// SimChat.registerCallback('nexusRep', ctx => {
//     return getPersistentInt(ctx.player, 'nexus_rep')
// })

// SimChat.registerCallback('syndicateRep', ctx => {
//     return getPersistentInt(ctx.player, 'syndicate_rep')
// })

// SimChat.registerCallback('quinnFavors', ctx => {
//     return getPersistentInt(ctx.player, 'quinn_favors')
// })

// // ============================================
// // RELATIONSHIP STATUS CALLBACKS
// // ============================================

// SimChat.registerCallback('brokerStatus', ctx => {
//     let rep = getPersistentInt(ctx.player, 'broker_rep')
//     if (rep >= 15) return 'Trusted Partner'
//     if (rep >= 10) return 'Valued Client'
//     if (rep >= 5) return 'Regular'
//     if (rep >= 1) return 'Known'
//     return 'New Contact'
// })

// SimChat.registerCallback('helionStatus', ctx => {
//     let rep = getPersistentInt(ctx.player, 'helion_rep')
//     if (rep >= 15) return 'Prime Contractor'
//     if (rep >= 10) return 'Preferred Supplier'
//     if (rep >= 5) return 'Approved Vendor'
//     if (rep >= 1) return 'Pending Review'
//     return 'Unregistered'
// })

// SimChat.registerCallback('nexusStatus', ctx => {
//     let rep = getPersistentInt(ctx.player, 'nexus_rep')
//     if (rep >= 15) return 'Strategic Partner'
//     if (rep >= 10) return 'Priority Supplier'
//     if (rep >= 5) return 'Active Partner'
//     if (rep >= 1) return 'Under Evaluation'
//     return 'Unknown Entity'
// })

// // ============================================
// // DEAL/STATE TRACKING CALLBACKS
// // ============================================

// SimChat.registerCallback('hasActiveSyndicateDeal', ctx => {
//     return getPersistentBoolean(ctx.player, 'syndicate_active_deal')
// })

// SimChat.registerCallback('hasMetQuinn', ctx => {
//     return getPersistentInt(ctx.player, 'broker_rep') >= 1 ||
//            getPersistentBoolean(ctx.player, 'met_quinn')
// })

// SimChat.registerCallback('hasMetVex', ctx => {
//     return getPersistentInt(ctx.player, 'helion_rep') >= 1 ||
//            getPersistentBoolean(ctx.player, 'met_vex')
// })

// SimChat.registerCallback('completedHelionContract', ctx => {
//     return getPersistentInt(ctx.player, 'helion_contracts_completed') >= 1
// })

// SimChat.registerCallback('helionContractsCompleted', ctx => {
//     return getPersistentInt(ctx.player, 'helion_contracts_completed')
// })

// // ============================================
// // PLAYER INFO CALLBACKS
// // ============================================

// SimChat.registerCallback('playerCredits', ctx => {
//     let inv = ctx.player.getInventory() 
//     let emeralds = 0
//     for (let i = 0; i < inv.getContainerSize(); i++) {
//         let stack = inv.getItem(i)
//         if (stack.getItem().toString() == 'minecraft:emerald') {
//             emeralds += stack.getCount()
//         }
//     }
//     return emeralds
// })

// SimChat.registerCallback('getLastChat', ctx => {
//     let jsonCtx = JSON.stringify(ctx.team.memberCount)
//     // return "potato"
//     return ctx.team.title
// })

// SimChat.registerCallback('hasEnoughCredits', ctx => {
//     let inv = ctx.player.getInventory()
//     let emeralds = 0
//     for (let i = 0; i < inv.getContainerSize(); i++) {
//         let stack = inv.getItem(i)
//         if (stack.getItem().toString() == 'minecraft:emerald') {
//             emeralds += stack.getCount()
//         }
//     }
//     return emeralds >= 10
// })

// // ============================================
// // WORLD/TIME CALLBACKS
// // ============================================

// SimChat.registerCallback('isNightTime', ctx => {
//     let time = ctx.player.level.dayTime % 24000
//     return time >= 13000 && time < 23000
// })

// SimChat.registerCallback('timeOfDay', ctx => {
//     let time = ctx.player.level.dayTime % 24000
//     if (time < 6000) return 'Morning'
//     if (time < 12000) return 'Afternoon'
//     if (time < 18000) return 'Evening'
//     return 'Night'
// })

// // Log status
// SimChat.logStatus()

// // ============================================
// // CUSTOM COMMANDS FOR DATA MANIPULATION
// // Usage in dialogues: "simchat rep add broker 5"
// // ============================================

// // ServerEvents.commandRegistry(event => {
// //     const { commands: Commands, arguments: Arguments } = event

// //     // simchat rep add <type> <amount>
// //     // simchat rep set <type> <amount>
// //     // simchat data set <key> <value>
// //     // simchat data add <key> <amount>
// //     event.register(
// //         Commands.literal('simchat')
// //             .then(Commands.literal('rep')
// //                 .then(Commands.literal('add')
// //                     .then(Commands.argument('type', Arguments.STRING.create(event))
// //                         .then(Commands.argument('amount', Arguments.INTEGER.create(event))
// //                             .executes(ctx => {
// //                                 let player = ctx.source.player
// //                                 let type = Arguments.STRING.getResult(ctx, 'type')
// //                                 let amount = Arguments.INTEGER.getResult(ctx, 'amount')
// //                                 let key = type + '_rep'
// //                                 let data = player.persistentData
// //                                 let current = data.getInt(key)
// //                                 data.putInt(key, current + amount)
// //                                 return 1
// //                             })
// //                         )
// //                     )
// //                 )
// //                 .then(Commands.literal('set')
// //                     .then(Commands.argument('type', Arguments.STRING.create(event))
// //                         .then(Commands.argument('amount', Arguments.INTEGER.create(event))
// //                             .executes(ctx => {
// //                                 let player = ctx.source.player
// //                                 let type = Arguments.STRING.getResult(ctx, 'type')
// //                                 let amount = Arguments.INTEGER.getResult(ctx, 'amount')
// //                                 let key = type + '_rep'
// //                                 let data = player.persistentData
// //                                 data.putInt(key, amount)
// //                                 return 1
// //                             })
// //                         )
// //                     )
// //                 )
// //             )
// //             .then(Commands.literal('data')
// //                 .then(Commands.literal('add')
// //                     .then(Commands.argument('key', Arguments.STRING.create(event))
// //                         .then(Commands.argument('amount', Arguments.INTEGER.create(event))
// //                             .executes(ctx => {
// //                                 let player = ctx.source.player
// //                                 let key = Arguments.STRING.getResult(ctx, 'key')
// //                                 let amount = Arguments.INTEGER.getResult(ctx, 'amount')
// //                                 let data = player.persistentData
// //                                 let current = data.getInt(key)
// //                                 data.putInt(key, current + amount)
// //                                 return 1
// //                             })
// //                         )
// //                     )
// //                 )
// //                 .then(Commands.literal('set')
// //                     .then(Commands.argument('key', Arguments.STRING.create(event))
// //                         .then(Commands.argument('value', Arguments.INTEGER.create(event))
// //                             .executes(ctx => {
// //                                 let player = ctx.source.player
// //                                 let key = Arguments.STRING.getResult(ctx, 'key')
// //                                 let value = Arguments.INTEGER.getResult(ctx, 'value')
// //                                 let data = player.persistentData
// //                                 data.putInt(key, value)
// //                                 return 1
// //                             })
// //                         )
// //                     )
// //                 )
// //                 .then(Commands.literal('flag')
// //                     .then(Commands.argument('key', Arguments.STRING.create(event))
// //                         .then(Commands.argument('value', Arguments.BOOLEAN.create(event))
// //                             .executes(ctx => {
// //                                 let player = ctx.source.player
// //                                 let key = Arguments.STRING.getResult(ctx, 'key')
// //                                 let value = Arguments.BOOLEAN.getResult(ctx, 'value')
// //                                 let data = player.persistentData
// //                                 data.putBoolean(key, value)
// //                                 return 1
// //                             })
// //                         )
// //                     )
// //                 )
// //             )
// //     )
// // })

// console.log('[SimChat] Dialogue callbacks and commands loaded')
