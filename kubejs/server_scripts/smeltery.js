ServerEvents.recipes(event => {

//misc

event.remove({ id: 'tconstruct:smeltery/casting/seared/melter' })
event.remove({ id: 'tconstruct:smeltery/casting/seared/heater' })
event.remove({ id: 'tconstruct:smeltery/casting/scorched/alloyer' })
event.remove({ id: 'tconstruct:smeltery/seared/seared_brick_kiln' })
event.remove({ id: 'tconstruct:smeltery/seared/grout' })
event.remove({ id: 'tconstruct:smeltery/seared/grout_multiple' })
event.remove({ id: 'tconstruct:smeltery/melting/seared/grout' })
event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/ingot_5' })
event.remove({ id: 'tconstruct:smeltery/casting/metal/signalum/gear_gold_cast' })
event.remove({ id: 'tconstruct:smeltery/casting/metal/signalum/gear_sand_cast' })
event.remove({ id: 'create:mixing/brass' })
event.recipes.create.filling('tconstruct:foundry_controller', [Fluid.of('tconstruct:molten_obsidian'), '#tconstruct:scorched_blocks'])




//alloy removal
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_bronze' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_brass' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_invar' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_electrum' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_constantan' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_rose_gold' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_enderium' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_lumium' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_signalum' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_amethyst_bronze' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_cinderslime' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_hepatizon' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_manyullyn' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_netherite' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_nicrosil' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_obsidian' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_pewter' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_pig_iron' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_queens_slime' })
    event.remove({ id: 'tconstruct:smeltery/alloys/molten_slimesteel' })

//create compat removal
    event.remove({ id: 'create:mixing/brass_ingot' })
    event.remove({ id: 'createaddition:mixing/electrum' })
    event.remove({ id: 'createaddition:compat/tconstruct/amethyst_bronze' })
    event.remove({ id: 'createaddition:compat/tconstruct/slimesteel' })
    event.remove({ id: 'createaddition:compat/tconstruct/manyullyn' })
    event.remove({ id: 'createaddition:compat/tconstruct/pig_iron' })
    event.remove({ id: 'createaddition:compat/tconstruct/tinkers_bronze' })
    event.remove({ id: 'createaddition:compat/tconstruct/rose_gold' })
    event.remove({ id: 'createaddition:compat/tconstruct/queens_slime' })
    event.remove({ id: 'createaddition:compat/tconstruct/hepatizon' })


//thermal dust and ingot shapeless removal
    event.remove({ id: 'thermal:bronze_dust_4' })
    event.remove({ id: 'thermal:fire_charge/bronze_ingot_4' })
    event.remove({ id: 'thermal:electrum_dust_2' })
    event.remove({ id: 'thermal:fire_charge/electrum_ingot_2' })
    event.remove({ id: 'thermal:invar_dust_3' })
    event.remove({ id: 'thermal:fire_charge/invar_ingot_3' })
    event.remove({ id: 'thermal:constantan_dust_2' })
    event.remove({ id: 'thermal:fire_charge/constantan_ingot_2' })
    event.remove({ id: 'thermal:signalum_dust_4' })
    event.remove({ id: 'thermal:fire_charge/signalum_ingot_4' })
    event.remove({ id: 'thermal:lumium_dust_4' })
    event.remove({ id: 'thermal:fire_charge/lumium_ingot_4' })
    event.remove({ id: 'thermal:enderium_dust_2' })
    event.remove({ id: 'thermal:fire_charge/enderium_ingot_2' })
    event.remove({ id: 'minecraft:netherite_ingot' })


//melting removal
    event.remove({ id: 'tconstruct:smeltery/melting/metal/signalum/gear' })
    event.remove({ id: 'tconstruct:smeltery/melting/metal/lead/gear' })
    event.remove({ id: 'tconstruct:smeltery/melting/metal/iron/chain' })


//Smeltry Changes
  event.recipes.create.cutting('4x tconstruct:obsidian_pane', '#forge:obsidian')
	event.stonecutting('2x tconstruct:obsidian_pane', '#forge:obsidian').id('obsidian_cutting_manual_only')


//custom melting

    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {
            'item': 'minecraft:ghast_tear'
        },
        'result': {
            'fluid': 'minecraft:water',
            'amount': 4000
        },
        'temperature': 1,
        'time': 1
    })

    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {
            'tag': 'tconstruct:casts/multi_use'
        },
        'result': {
            'fluid': 'tconstruct:molten_gold',
            'amount': 90
        },
        'temperature': 700,
        'time': 28
    })

    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {
            'item': 'botania:blaze_block'
        },
        'result': {
            'fluid': 'tconstruct:blazing_blood',
            'amount': 900
        },
        'temperature': 1000,
        'time': 270
    })

    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {
            'item': 'quark:blaze_lantern'
        },
        'result': {
            'fluid': 'tconstruct:blazing_blood',
            'amount': 500
        },
        'temperature': 1000,
        'time': 150
    })

    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {
            'item': 'minecraft:blaze_rod'
        },
        'result': {
            'fluid': 'tconstruct:blazing_blood',
            'amount': 100
        },
        'temperature': 1000,
        'time': 30
    })


    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {
            'item': 'minecraft:blaze_powder'
        },
        'result': {
            'fluid': 'tconstruct:blazing_blood',
            'amount': 25
        },
        'temperature': 1000,
        'time': 30
    })


    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {
            'item': 'minecraft:redstone'
        },
        'result': {
            'fluid': 'thermal:redstone',
            'amount': 100
        },
        'temperature': 800,
        'time': 20
    })


    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {
            'item': 'minecraft:redstone_block'
        },
        'result': {
            'fluid': 'thermal:redstone',
            'amount': 900
        },
        'temperature': 800,
        'time': 180
    })


    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {
            'item': 'createaddition:copper_rod'
        },
        'result': {
            'fluid': 'tconstruct:molten_copper',
            'amount': 45
        },
        'temperature': 500,
        'time': 24
    })


    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {
            'item': 'createaddition:gold_rod'
        },
        'result': {
            'fluid': 'tconstruct:molten_gold',
            'amount': 45
        },
        'temperature': 700,
        'time': 14
    })


    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {
            'item': 'createaddition:electrum_rod'
        },
        'result': {
            'fluid': 'tconstruct:molten_electrum',
            'amount': 45
        },
        'temperature': 760,
        'time': 14
    })


    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {
            'item': 'kubejs:netherite_rod'
        },
        'result': {
            'fluid': 'tconstruct:molten_netherite',
            'amount': 45
        },
        'temperature': 1250,
        'time': 18
    })


    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {
            'item': 'createaddition:brass_rod'
        },
        'result': {
            'fluid': 'tconstruct:molten_brass',
            'amount': 45
        },
        'temperature': 605,
        'time': 13
    })


//casting


//event.recipes.tconstruct.casting_table('createaddition:brass_rod', Fluid.of('tconstruct:molten_brass', 45)).cast('#tconstruct:casts/multi_use/rod')




//metal mixing


   
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_brass', 90)], [Fluid.of('tconstruct:molten_zinc', 45), Fluid.of('tconstruct:molten_copper', 45)]).processingTime(30)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_amethyst_bronze', 90)], [Fluid.of('tconstruct:molten_amethyst', 100), Fluid.of('tconstruct:molten_copper', 90)]).heated().processingTime(30)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_bronze', 180)], [Fluid.of('tconstruct:molten_copper', 135), Fluid.of('tconstruct:molten_tin', 45)]).processingTime(60)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_constantan', 90)], [Fluid.of('tconstruct:molten_nickel', 45), Fluid.of('tconstruct:molten_copper', 45)]).processingTime(30)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_electrum', 90)], [Fluid.of('tconstruct:molten_silver', 45), Fluid.of('tconstruct:molten_gold', 45)]).processingTime(30)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_invar', 90)], [Fluid.of('tconstruct:molten_iron', 60), Fluid.of('tconstruct:molten_nickel', 30)]).processingTime(30)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_manyullyn', 180)], [Fluid.of('tconstruct:molten_cobalt', 135), Fluid.of('tconstruct:molten_debris', 45)]).heated().processingTime(60)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_obsidian', 500)], [Fluid.of('minecraft:lava', 500), Fluid.of('minecraft:water', 5)]).processingTime(15)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_rose_gold', 90)], [Fluid.of('tconstruct:molten_gold', 45), Fluid.of('tconstruct:molten_copper', 45)]).processingTime(30)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_pewter', 90)], [Fluid.of('tconstruct:molten_tin', 60), Fluid.of('tconstruct:molten_lead', 30)]).processingTime(30)




   event.recipes.create.mixing([Fluid.of('tconstruct:molten_cinderslime', 90)], [Fluid.of('tconstruct:molten_gold', 45), Fluid.of('tconstruct:scorched_stone', 125), Item.of('tconstruct:ichor_slime_ball', 1)]).superheated().processingTime(60)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_enderium', 180)], [Fluid.of('tconstruct:molten_diamond', 50), Fluid.of('tconstruct:molten_lead', 135), '#forge:dusts/ender_pearl']).superheated().processingTime(120)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_hepatizon', 90)], [Fluid.of('tconstruct:molten_cobalt', 45), Fluid.of('tconstruct:molten_copper', 90), '#forge:dusts/quartz']).superheated().processingTime(60)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_lumium', 180)], [Fluid.of('tconstruct:molten_silver', 45), Fluid.of('tconstruct:molten_tin', 135), 'minecraft:glowstone_dust']).superheated().processingTime(120)
   event.recipes.create.mixing([Fluid.of('kubejs:nicrosil', 90)], [Fluid.of('tconstruct:molten_tin', 45), Fluid.of('tconstruct:molten_nickel', 45), '#forge:dusts/quartz']).superheated().processingTime(60)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_pig_iron', 90)], [Fluid.of('tconstruct:molten_iron', 45), Fluid.of('create:honey', 125), '#forge:raw_pork']).superheated().processingTime(60)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_queens_slime', 90)], [Fluid.of('tconstruct:molten_gold', 45), Fluid.of('tconstruct:molten_cobalt', 45), 'minecraft:magma_cream']).superheated().processingTime(60)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_signalum', 180)], [Fluid.of('tconstruct:molten_silver', 45), Fluid.of('tconstruct:molten_copper', 135), 'minecraft:redstone']).superheated().processingTime(120)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_slimesteel', 90)], [Fluid.of('tconstruct:molten_iron', 45), Fluid.of('tconstruct:seared_stone', 125), Item.of('tconstruct:sky_slime_ball', 1)]).superheated().processingTime(60)



   event.recipes.create.mixing([Fluid.of('tconstruct:molten_steel', 90)], [Fluid.of('tconstruct:molten_iron', 90), '#forge:dusts/coke']).heated().processingTime(30)
   event.recipes.create.mixing([Fluid.of('kubejs:weak_netherite', 90)], [Fluid.of('tconstruct:molten_debris', 90), Fluid.of('tconstruct:molten_gold', 90)]).heated().processingTime(30)
   event.recipes.create.mixing([Fluid.of('tconstruct:molten_netherite', 270)], [Fluid.of('kubejs:weak_netherite', 45), Fluid.of('tconstruct:molten_steel', 225)]).superheated().processingTime(180)

//brick cutting

	event.stonecutting('tconstruct:scorched_stone', '#tconstruct:foundry_bricks')
	event.stonecutting('tconstruct:scorched_road', '#tconstruct:foundry_bricks')
	event.stonecutting('tconstruct:scorched_ladder', '#tconstruct:foundry_bricks')
	event.stonecutting('tconstruct:seared_stone', '#tconstruct:smeltery_bricks')
	event.stonecutting('tconstruct:seared_cobble', '#tconstruct:smeltery_bricks')
	event.stonecutting('tconstruct:seared_paver', '#tconstruct:smeltery_bricks')
	event.stonecutting('tconstruct:seared_fancy_bricks', '#tconstruct:smeltery_bricks')
	event.stonecutting('tconstruct:seared_cracked_bricks', '#tconstruct:smeltery_bricks')
	event.stonecutting('tconstruct:seared_ladder', '#tconstruct:smeltery_bricks')

    event.recipes.farmersdelight.cutting(
        '#tconstruct:seared_blocks',
        '#minecraft:pickaxes',
        ['4x tconstruct:seared_brick']
        )

    event.recipes.farmersdelight.cutting(
        '#tconstruct:scorched_blocks',
        '#minecraft:pickaxes',
        ['4x tconstruct:scorched_brick']
        )


//modifications

	event.remove({ id: 'thermal:parts/netherite_gear' })
	event.remove({ id: 'thermal:parts/lead_gear' })
})