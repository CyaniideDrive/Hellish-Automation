CommonAddedEvents.playerRespawn(event => {
  if (!event.hasGameStage('pack_complete')) {
    event.server.runCommandSilent(`execute in minecraft:the_nether run tp @p[nbt={Dimension:"minecraft:overworld"}] 0 60 0`)
    event.server.runCommandSilent(`execute in minecraft:the_nether run fill 4 65 4 -4 60 -4 minecraft:air`)
    event.server.runCommandSilent(`execute in minecraft:the_nether run fill 4 59 4 -4 59 -4 minecraft:obsidian`)
  }
})


PlayerEvents.loggedIn(event => {
  if (!event.hasGameStage('nether_spawn')) {
    event.addGameStage('nether_spawn')
    event.server.runCommandSilent(`execute in minecraft:the_nether run tp @p[nbt={Dimension:"minecraft:overworld"}] 0 60 0`)
    event.server.runCommandSilent(`execute in minecraft:the_nether run fill 4 65 4 -4 60 -4 minecraft:air`)
    event.server.runCommandSilent(`execute in minecraft:the_nether run fill 4 59 4 -4 59 -4 minecraft:obsidian`)
  }
})

CommonAddedEvents.playerChangeDimension(event => {
  if (!event.hasGameStage('pack_complete')) {
    event.server.runCommandSilent(`execute in minecraft:the_nether run tp @p[nbt={Dimension:"minecraft:overworld"}] 0 60 0`)
    event.server.runCommandSilent(`execute in minecraft:the_nether run fill 4 65 4 -4 60 -4 minecraft:air`)
    event.server.runCommandSilent(`execute in minecraft:the_nether run fill 4 59 4 -4 59 -4 minecraft:obsidian`)
  }
})