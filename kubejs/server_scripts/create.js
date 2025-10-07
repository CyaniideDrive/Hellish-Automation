ServerEvents.recipes(event => {

let createapplication = (block, ingredient, result) => {
	event.remove({output: result})
	event.recipes.create.item_application([result], [block, ingredient])
}

let createcutting = (ingredient2, result2) => {
	event.remove({output: result2})
	event.stonecutting({'item': result2}, {'item': ingredient2})
}
//Misc

  event.replaceInput({ mod: 'create' }, 'minecraft:dried_kelp', 'thermal:cured_rubber')
  event.replaceInput({ input:'minecraft:bamboo' }, 'minecraft:bamboo', '#kubejs:canes')


    event.remove({ output:'createaddition:tesla_coil'})

    event.remove({ output:'create:crushing_wheel'})
    event.shaped(
  Item.of('create:crushing_wheel'),
   ['222',
    '212',
    '222'],
  {1: 'create:cogwheel',
   2: 'create:andesite_alloy'
  })

event.recipes.create.pressing('thermal:netherite_plate', 'minecraft:netherite_ingot')

//gears

    event.shaped(
  Item.of('kubejs:queenslime_gear'),
   [' 2 ',
    '212',
    ' 2 '],
  {1: 'kubejs:brass_ring',
   2: 'tconstruct:queens_slime_ingot'
  })

    event.shaped(
  Item.of('kubejs:slimesteel_gear'),
   [' 2 ',
    '212',
    ' 2 '],
  {1: 'kubejs:brass_ring',
   2: 'tconstruct:slimesteel_ingot'
  })

    event.shaped(
  Item.of('kubejs:cinderslime_gear'),
   [' 2 ',
    '212',
    ' 2 '],
  {1: 'kubejs:brass_ring',
   2: 'tconstruct:cinderslime_ingot'
  })

event.recipes.create.mixing(['3x kubejs:incomplete_slime_gear_1'], ['kubejs:cinderslime_gear', 'kubejs:slimesteel_gear', 'kubejs:queenslime_gear']).superheated()

//Cardboard

event.shapeless('create:pulp', ['minecraft:ghast_tear', '4x #create:pulpifiable']).keepIngredient('minecraft:ghast_tear').id('kubejs:pulp_manual_only')

event.shaped(
  Item.of('create:cardboard'),
   ['1',
    '2',
    '1'],
  {1: '#forge:stone', 2: 'create:pulp'}).keepIngredient('#forge:stone').id('kubejs:cardboard_manual_only')

  event.remove({ id:'create:mixing/cardboard_pulp'})
  event.recipes.create.mixing(['2x create:pulp'], ['4x #create:pulpifiable', Fluid.of('minecraft:water', 250)])

  event.custom({type:'createaddition:rolling', input: {item: 'create:pulp'}, result: {item: 'minecraft:paper', count: 4}})

  event.remove({ id:'create:pressing/cardboard'})
event.recipes.create.pressing('2x create:cardboard', 'create:pulp')


//rubber

event.remove({ output:'thermal:rubber'})
event.remove({ input:'thermal:rubber'})
event.remove({ output:'thermal:rubber_block'})
event.remove({ input:'thermal:rubber_block'})

  event.recipes.create.filling('kubejs:rubber_gear', [Fluid.of('kubejs:liquid_rubber', 250), 'thermal:quartz_gear'])


    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {
            'item': 'thermal:cured_rubber_block'
        },
        'result': {
            'fluid': 'kubejs:liquid_rubber',
            'amount': 1000
        },
        'temperature': 500,
        'time': 40
    })

    event.custom({
        'type': 'tconstruct:melting',
        'ingredient': {
            'item': 'thermal:cured_rubber'
        },
        'result': {
            'fluid': 'kubejs:liquid_rubber',
            'amount': 250
        },
        'temperature': 500,
        'time': 10
    })


event.recipes.botania.petal_apothecary('thermal:rubberwood_sapling', ['botania:rune_greed', 'nethers_exoticism:jaboticaba', 'nethers_exoticism:kiwano', 'nethers_exoticism:pitaya', 'nethers_exoticism:ramboutan', 'nethers_exoticism:bouddha_s_hand'])


event.recipes.create.compacting([Fluid.of('kubejs:fruit_latex', 250)], ['#kubejs:exotic_fruits'])
event.recipes.create.compacting(['thermal:cured_rubber'], [Fluid.of('kubejs:liquid_rubber', 250)])

event.recipes.create.mixing(
  [Fluid.of('kubejs:liquid_rubber', 10)],
  [Fluid.of('kubejs:fruit_latex', 10)]).heated().processingTime(1)

event.recipes.create.mixing(
  [Fluid.of('kubejs:liquid_rubber', 20)],
  [Fluid.of('thermal:latex', 10)]).heated().processingTime(1)

//3D

event.recipes.create.compacting(['kubejs:3d_widget'], ['3x #forge:rods/wooden', '#forge:dyes/red', '#forge:dyes/green', '#forge:dyes/blue'])

	createapplication('kubejs:lifeless_kit', 'kubejs:3d_widget', 'kubejs:3d_casing')



	//Machine Kits

//andesite

event.replaceInput({ output: 'thermal:quartz_gear' }, 'minecraft:iron_nugget', 'kubejs:gold_ring')
event.replaceInput({ output: 'thermal:quartz_gear' }, 'minecraft:quartz', 'kubejs:rounded_quartz')
event.recipes.create.pressing('2x kubejs:gold_ring', '#forge:rods/gold')


  event.recipes.create.sandpaper_polishing('2x kubejs:rounded_quartz', 'minecraft:quartz')

    event.custom({
        type:'createaddition:rolling',
        input: {
            item: 'mynethersdelight:powder_cannon'
        },
        result: {
            item: 'createaddition:straw'
        }
    })



event.shaped(
  Item.of('kubejs:lifeless_kit'),
   ['121',
    '232',
    '121'],
  {1: 'create:andesite_alloy',
   2: 'thermal:quartz_gear',
   3: 'create:andesite_casing'
  })

event.shaped(
  Item.of('kubejs:rubber_kit'),
   ['121',
    '232',
    '121'],
  {1: '#forge:ingots/rose_gold',
   2: 'kubejs:rubber_gear',
   3: 'create:copper_casing'
  })

event.shaped(
  Item.of('kubejs:lava_kit'),
   ['121',
    '232',
    '121'],
  {1: '#forge:ingots/rose_gold',
   2: 'thermal:signalum_gear',
   3: 'create:copper_casing'
  })

event.shaped(
  Item.of('kubejs:living_kit'),
   ['121',
    '232',
    '121'],
  {1: '#forge:ingots/brass',
   2: 'kubejs:forgeslime_gear',
   3: 'create:brass_casing'
  })

event.shaped(
  Item.of('kubejs:sturdy_kit'),
   ['121',
    '232',
    '121'],
  {1: 'minecraft:netherite_scrap',
   2: 'thermal:lead_gear',
   3: 'create:railway_casing'
  })

event.shaped(
  Item.of('kubejs:power_kit'),
   ['121',
    '232',
    '121'],
  {1: 'minecraft:netherite_scrap',
   2: 'thermal:ruby_gear',
   3: 'create:railway_casing'
  })



event.recipes.create.pressing('2x kubejs:brass_ring', '#forge:rods/brass')

    event.custom({
        type:'createaddition:rolling',
        input: {
            item: 'minecraft:netherite_ingot'
        },
        result: {
            item: 'kubejs:netherite_rod',
            count: 2
        }
    })

	//output keeping application recipes
		event.remove({ id:'create:crafting/kinetics/speedometer'})
		event.custom({'type': 'create:item_application', 'ingredients':[{'item': 'create:andesite_casing'}, {'item': 'minecraft:compass'}], 'results': [{'item': 'create:speedometer'}]})
		event.remove({ id:'create:crafting/logistics/packager'})
		event.custom({'type': 'create:item_application', 'ingredients':[{'item': 'kubejs:sturdy_kit'}, {'item': 'create:cardboard_block'}], 'results': [{'item': 'create:packager'}]})
		event.remove({ id:'create:crafting/logistics/white_postbox'})
		event.custom({'type': 'create:item_application', 'ingredients':[{'item': 'kubejs:sturdy_kit'}, {'item': 'thermal:cured_rubber'}], 'results': [{'item': 'create:white_postbox'}]})




//Casings

	event.remove({ output:'create:andesite_casing'})
	createapplication('create:cardboard_block','create:andesite_alloy','create:andesite_casing')
	event.remove({ output:'create:copper_casing'})
	createapplication('create:cardboard_block','tconstruct:rose_gold_ingot','create:copper_casing')
	event.remove({ output:'create:brass_casing'})
	createapplication('kubejs:brass_frame','#kubejs:stripped_livingwood','create:brass_casing')
	event.remove({ output:'create:railway_casing'})
	createapplication('kubejs:netherite_frame','#kubejs:stripped_dreamwood','create:railway_casing')



//machines

   //misc

	createapplication('minecraft:cobblestone', 'create_new_age:overcharged_iron_sheet', 'create_new_age:magnetite_block')
	createapplication('minecraft:smooth_stone', 'minecraft:redstone', 'create:redstone_contact')


	//multi output misc cutting
	event.remove({ id:'railways:crafting/conductor_whistle'})
	event.remove({ id:'create:crafting/kinetics/schedule'})
	event.remove({ output:'create_enchantment_industry:enchanting_guide'})
	event.remove({ output:'create_central_kitchen:cooking_guide'})
	event.remove({ output:'create_central_kitchen:miners_cooking_guide'})
	event.remove({ output:'create:nixie_tube'})
	event.stonecutting('2x railways:conductor_whistle', 'create:sturdy_sheet')
	event.stonecutting('4x create:schedule', 'create:sturdy_sheet')
	event.stonecutting('4x create_enchantment_industry:enchanting_guide', 'create:sturdy_sheet')
	event.stonecutting('4x create_central_kitchen:cooking_guide', 'create:sturdy_sheet')
	event.stonecutting('4x create_central_kitchen:miners_cooking_guide', 'create:sturdy_sheet')
	event.stonecutting('minecraft:barrel', '#minecraft:logs').id('barrel_cutting_manual_only')
	event.stonecutting('minecraft:chest', '#minecraft:logs').id('chest_cutting_manual_only')


   //decor






	//decor cutting
	event.remove({ output:'create:nixie_tube'})
	event.remove({ output:'create:display_board'})
	event.remove({ output:'create:placard'})
	event.remove({ output:'sophisticatedstorage:decoration_table'})
	event.remove({ output:'supplementaries:blackboard'})
	event.stonecutting('8x create:nixie_tube', 'kubejs:3d_casing')
	event.stonecutting('32x create:display_board', 'kubejs:3d_casing')
	event.stonecutting('16x create:placard', 'kubejs:3d_casing')
	event.stonecutting('sophisticatedstorage:decoration_table', 'kubejs:3d_casing')
	event.stonecutting('32x supplementaries:blackboard', 'kubejs:3d_casing')
	event.stonecutting('supplementaries:globe', 'kubejs:3d_casing')



   //upgrades
	createapplication('create:chute', '#forge:plates/gold', 'create:smart_chute')
	createapplication('create:andesite_funnel', '#forge:plates/gold', 'create:brass_funnel')
	createapplication('create:andesite_tunnel', '#forge:plates/gold', 'create:brass_tunnel')
	createapplication('create:fluid_pipe', '#forge:plates/gold', 'create:smart_fluid_pipe')
	createapplication('create:fluid_pipe', '#forge:plates/iron', 'create:fluid_valve')
	createapplication('create:fluid_pipe', 'create:cogwheel', 'create:mechanical_pump')
	createapplication('create:mechanical_piston','#forge:slimeballs','create:sticky_mechanical_piston')
	createapplication('create:sticky_mechanical_piston','supplementaries:soap','create:mechanical_piston')
	createapplication('create:mechanical_bearing', 'minecraft:clock', 'create:clockwork_bearing')
	createapplication('create:rope_pulley','create:electron_tube','create:elevator_pulley')
	createapplication('create:depot','create:cogwheel','create:weighted_ejector')
	createapplication('create:windmill_bearing', '#forge:gears/quartz', 'create:mechanical_bearing')
	createapplication('create:fluid_tank', 'create:sturdy_sheet', 'railways:fuel_tank')
	createapplication('create:encased_chain_drive','create:electron_tube','create:adjustable_chain_gearshift')
	createapplication('create:gearshift','create:electron_tube','create:sequenced_gearshift')



   //lifeless
	createapplication('create:andesite_casing','#kubejs:depot_slabs','create:depot')
	createapplication('create:andesite_casing', 'create:shaft', 'createaddition:rolling_mill')
	createapplication('create:andesite_casing','minecraft:chain','create:encased_chain_drive')
	createapplication('create:andesite_casing','minecraft:piston','create:mechanical_piston')
	createapplication('create:andesite_casing', 'create:cogwheel', 'create:gantry_carriage')
	createapplication('create:andesite_casing', '#forge:slimeballs', 'create:sticker')
	createapplication('create:andesite_casing', 'create:analog_lever', 'create:contraption_controls')
	createapplication('create:andesite_casing','minecraft:iron_trapdoor','create:item_hatch')
	createapplication('create:andesite_casing', 'create:transmitter', 'create:redstone_link')
	createapplication('create:andesite_casing','create:andesite_alloy_block','create:mechanical_press')
	createapplication('kubejs:lifeless_kit','create:propeller','create:encased_fan')
	createapplication('kubejs:lifeless_kit','thermal:saw_blade','create:mechanical_saw')
	createapplication('kubejs:lifeless_kit','thermal:drill_head','create:mechanical_drill')
	createapplication('kubejs:lifeless_kit','create:whisk','create:mechanical_mixer')
	createapplication('kubejs:lifeless_kit','create:brass_hand','create:deployer')
	createapplication('kubejs:lifeless_kit','#forge:ropes','create:rope_pulley')
	createapplication('kubejs:lifeless_kit', 'create:turntable', 'create:windmill_bearing')
	createapplication('kubejs:lifeless_kit', 'botania:mana_diamond', 'torchmaster:megatorch')


	//createcutting

	//multi output andesite cutting
	event.remove({ output:'create:mechanical_roller'})
	event.stonecutting('64x create:shaft', 'kubejs:lifeless_kit')
	event.stonecutting('16x minecraft:piston', 'kubejs:lifeless_kit')
	event.stonecutting('64x create:cogwheel', 'kubejs:lifeless_kit')
	event.stonecutting('64x create:large_cogwheel', 'kubejs:lifeless_kit')
	event.stonecutting('16x create:clutch', 'kubejs:lifeless_kit')
	event.stonecutting('16x create:gearshift', 'kubejs:lifeless_kit')
	event.stonecutting('16x create:gearbox', 'kubejs:lifeless_kit')
	event.stonecutting('32x create:encased_chain_drive', 'kubejs:lifeless_kit')
	event.stonecutting('8x create:adjustable_chain_gearshift', 'kubejs:lifeless_kit')
	event.stonecutting('8x create:depot', 'kubejs:lifeless_kit')
	event.stonecutting('8x create:basin', 'kubejs:lifeless_kit')


   //copper
	createapplication('minecraft:copper_block', 'minecraft:hopper', 'create:spout')
	createapplication('create:copper_casing', 'minecraft:hopper', 'create:spout')
	createapplication('minecraft:copper_block', 'minecraft:iron_bars', 'create:item_drain')
	createapplication('create:copper_casing', 'minecraft:iron_bars', 'create:item_drain')



   //rubber
	createapplication('kubejs:rubber_kit', 'minecraft:barrel', 'quark:crate')


	//multi output rubber cutting
	event.remove({ output:'create:portable_item_interface'})
	event.stonecutting('16x create:andesite_funnel', 'kubejs:rubber_kit')
	event.stonecutting('16x create:andesite_tunnel', 'kubejs:rubber_kit')
	event.stonecutting('8x create:brass_funnel', 'kubejs:rubber_kit')
	event.stonecutting('8x create:brass_tunnel', 'kubejs:rubber_kit')
	event.stonecutting('32x create:chute', 'kubejs:rubber_kit')
	event.stonecutting('16x minecraft:hopper', 'kubejs:rubber_kit')
	event.stonecutting('16x create:item_vault', 'kubejs:rubber_kit')
	event.stonecutting('32x create:belt_connector', 'kubejs:rubber_kit')
	event.stonecutting('4x create:portable_storage_interface', 'kubejs:rubber_kit')
	event.stonecutting('8x prettypipes:pipe', 'kubejs:rubber_kit')



   //lava
	createapplication('kubejs:lava_kit', 'minecraft:bucket', 'thermal:device_tree_extractor')
	createapplication('kubejs:lava_kit', 'minecraft:composter', 'thermal:device_composter')
	createapplication('kubejs:lava_kit', 'minecraft:copper_block', 'create:steam_engine')
	createapplication('kubejs:lava_kit', 'thermal:cured_rubber_block', 'create:hose_pulley')
	createapplication('kubejs:lava_kit', '#forge:glass', 'thermal:fluid_cell')


	//multi output lava cutting
	event.remove({ output:'create:portable_fluid_interface'})
	event.stonecutting('32x create:fluid_pipe', 'kubejs:lava_kit')
	event.stonecutting('16x create:mechanical_pump', 'kubejs:lava_kit')
	event.stonecutting('16x create:smart_fluid_pipe', 'kubejs:lava_kit')
	event.stonecutting('16x create:fluid_tank', 'kubejs:lava_kit')
	event.stonecutting('4x create:portable_fluid_interface', 'kubejs:lava_kit')
	event.stonecutting('8x create:spout', 'kubejs:lava_kit')
	event.stonecutting('32x create:water_wheel', 'kubejs:lava_kit')
	event.stonecutting('16x create:large_water_wheel', 'kubejs:lava_kit')
	event.stonecutting('64x tconstruct:scorched_stone', 'kubejs:lava_kit')
	event.stonecutting('64x tconstruct:seared_stone', 'kubejs:lava_kit')
	event.stonecutting('48x tconstruct:scorched_glass', 'kubejs:lava_kit')
	event.stonecutting('48x tconstruct:seared_glass', 'kubejs:lava_kit')
	event.stonecutting('32x tconstruct:scorched_soul_glass', 'kubejs:lava_kit')
	event.stonecutting('32x tconstruct:seared_soul_glass', 'kubejs:lava_kit')




   //living
	createapplication('create:brass_casing', 'create:transmitter', 'create:display_link')
	createapplication('kubejs:living_kit', 'thermal:copper_gear', 'createaddition:alternator')
	createapplication('kubejs:living_kit', 'thermal:gold_gear', 'createaddition:electric_motor')
	createapplication('kubejs:living_kit', 'minecraft:lightning_rod', 'create_new_age:energiser_t2')
	createapplication('kubejs:living_kit', 'thermal:drill_head','createoreexcavation:sample_drill')
	createapplication('kubejs:living_kit', 'kubejs:forgeslime_gear', 'create:rotation_speed_controller')
	createapplication('kubejs:living_kit', 'create:brass_hand', 'create:mechanical_arm')
	createapplication('kubejs:living_kit', 'minecraft:enchanting_table', 'create_enchantment_industry:printer')
	createapplication('kubejs:living_kit', 'minecraft:grindstone', 'create_enchantment_industry:disenchanter')


	//multi output living cutting
	event.remove({ output:'create:mechanical_crafter'})
	event.remove({ output:'create:content_observer'})
	event.remove({ output:'create:stockpile_switch'})
	event.remove({ output:'create_hypertube:hypertube'})
	event.remove({ output:'create_hypertube:hypertube_entrance'})
	event.remove({ output:'create_hypertube:hypertube_accelerator'})
	event.stonecutting('3x create:mechanical_crafter', 'kubejs:living_kit')
	event.stonecutting('8x create:content_observer', 'kubejs:living_kit')
	event.stonecutting('8x create:stockpile_switch', 'kubejs:living_kit')
	event.stonecutting('64x create_hypertube:hypertube', 'kubejs:living_kit')
	event.stonecutting('8x create_hypertube:hypertube_entrance', 'kubejs:living_kit')
	event.stonecutting('8x create_hypertube:hypertube_accelerator', 'kubejs:living_kit')



   //sturdy
	createapplication('create:railway_casing', 'create:analog_lever', 'create:controls')
	createapplication('create:railway_casing', 'minecraft:compass', 'create:track_station')
	createapplication('create:railway_casing', 'create:transmitter', 'create:stock_link')
	createapplication('create:railway_casing', '#forge:wool/green', 'railways:green_conductor_cap')
	createapplication('create:railway_casing', '#forge:wool/magenta', 'railways:magenta_conductor_cap')
	createapplication('create:railway_casing', '#forge:wool/cyan', 'railways:cyan_conductor_cap')
	createapplication('create:railway_casing', '#forge:wool/yellow', 'railways:yellow_conductor_cap')
	createapplication('create:railway_casing', '#forge:wool/white', 'railways:white_conductor_cap')
	createapplication('create:railway_casing', '#forge:wool/gray', 'railways:gray_conductor_cap')
	createapplication('create:railway_casing', '#forge:wool/light_blue', 'railways:light_blue_conductor_cap')
	createapplication('create:railway_casing', '#forge:wool/purple', 'railways:purple_conductor_cap')
	createapplication('create:railway_casing', '#forge:wool/light_gray', 'railways:light_gray_conductor_cap')
	createapplication('create:railway_casing', '#forge:wool/blue', 'railways:blue_conductor_cap')
	createapplication('create:railway_casing', '#forge:wool/brown', 'railways:brown_conductor_cap')
	createapplication('create:railway_casing', '#forge:wool/red', 'railways:red_conductor_cap')
	createapplication('create:railway_casing', '#forge:wool/lime', 'railways:lime_conductor_cap')
	createapplication('create:railway_casing', '#forge:wool/orange', 'railways:orange_conductor_cap')
	createapplication('create:railway_casing', '#forge:wool/black', 'railways:black_conductor_cap')
	createapplication('create:railway_casing', '#forge:wool/pink', 'railways:pink_conductor_cap')
	createapplication('kubejs:sturdy_kit', '#forge:slimeballs', 'create:package_frogport')
	createapplication('kubejs:sturdy_kit', 'minecraft:paper', 'create:stock_ticker')
	createapplication('kubejs:sturdy_kit', 'create:precision_mechanism', 'railways:remote_lens')



	//multi output sturdy cutting
	event.remove({ id:'create:crafting/logistics/redstone_requester'})
	event.remove({ id:'create:crafting/logistics/factory_gauge'})
	event.remove({ id:'railways:crafting/remote_lens'})
	event.remove({ output:'create:track_station'})
	event.remove({ output:'create:track_signal'})
	event.remove({ output:'railways:semaphore'})
	event.remove({ output:'railways:track_coupler'})
	event.remove({ output:'railways:track_switch_andesite'})
	event.remove({ output:'railways:track_switch_brass'})
	event.remove({ output:'railways:portable_fuel_interface'})
	event.stonecutting('64x minecraft:rail', 'kubejs:sturdy_kit')
	event.stonecutting('32x minecraft:powered_rail', 'kubejs:sturdy_kit')
	event.stonecutting('32x minecraft:detector_rail', 'kubejs:sturdy_kit')
	event.stonecutting('32x minecraft:activator_rail', 'kubejs:sturdy_kit')
	event.stonecutting('16x create:controller_rail', 'kubejs:sturdy_kit')
	event.stonecutting('16x botania:ghost_rail', 'kubejs:sturdy_kit')
	event.stonecutting('2x create:track_station', 'kubejs:sturdy_kit')
	event.stonecutting('4x create:track_signal', 'kubejs:sturdy_kit')
	event.stonecutting('4x railways:semaphore', 'kubejs:sturdy_kit')
	event.stonecutting('2x railways:track_coupler', 'kubejs:sturdy_kit')
	event.stonecutting('2x create:redstone_requester', 'kubejs:sturdy_kit')
	event.stonecutting('8x create:factory_gauge', 'kubejs:sturdy_kit')
	event.stonecutting('4x railways:track_switch_andesite', 'kubejs:sturdy_kit')
	event.stonecutting('2x railways:track_switch_brass', 'kubejs:sturdy_kit')
	event.stonecutting('4x railways:portable_fuel_interface', 'kubejs:sturdy_kit')
	event.stonecutting('8x create:mechanical_roller', 'kubejs:sturdy_kit')
	event.stonecutting('railways:remote_lens', 'kubejs:sturdy_kit')
	event.stonecutting('64x create:track', 'kubejs:sturdy_kit')
	event.stonecutting('64x railways:track_create_andesite_wide', 'kubejs:sturdy_kit')
	event.stonecutting('64x railways:track_create_andesite_narrow', 'kubejs:sturdy_kit')



   //power
	createapplication('kubejs:power_kit', 'createaddition:alternator', 'create_new_age:carbon_brushes')
	createapplication('minecraft:copper_block', 'thermal:ruby_gear', 'create_new_age:generator_coil')
	createapplication('kubejs:power_kit', 'createaddition:electric_motor', 'create_new_age:basic_motor')
	createapplication('kubejs:power_kit', 'create_new_age:overcharged_diamond', 'create_new_age:basic_motor_extension')
	createapplication('kubejs:power_kit', 'create_new_age:energiser_t2', 'create_new_age:energiser_t3')
	createapplication('create_new_age:basic_motor_extension', 'kubejs:placeholder', 'create_new_age:advanced_motor_extension')
	createapplication('create_new_age:basic_motor', 'kubejs:placeholder', 'create_new_age:advanced_motor')
	createapplication('create_new_age:advanced_motor', 'kubejs:placeholder', 'create_new_age:reinforced_motor')
	createapplication('kubejs:power_kit', '#forge:glass', 'thermal:energy_cell')


	//multi output power cutting
	event.remove({ id:'createaddition:portable_energy_interface'})
	event.stonecutting('4x createaddition:portable_energy_interface', 'kubejs:power_kit')
	event.stonecutting('16x createaddition:modular_accumulator', 'kubejs:power_kit')


//Crushing & Milling
  event.recipes.create.milling('thermal:quartz_dust', 'minecraft:quartz')
  event.recipes.create.milling('thermal:ender_pearl_dust', '#forge:ender_pearls')
  event.recipes.create.milling('kubejs:coke_dust', 'thermal:coal_coke')





//Mixing 

   event.remove({ id:'create:mixing/andesite_alloy_from_zinc'})
   event.remove({ id:'create:mixing/andesite_alloy'})
   event.remove({ id:'create:crafting/materials/andesite_alloy_from_zinc'})
   event.remove({ id:'create:crafting/materials/andesite_alloy'})
   event.recipes.create.mixing(['2x create:andesite_alloy'], ['#kubejs:alloy_nuggets', 'supplementaries:ash_brick', 'botania:livingrock'])
   event.recipes.create.mixing(['4x create:andesite_alloy'], ['#kubejs:alloy_nuggets', 'minecraft:nether_brick', 'botania:livingrock'])
   event.recipes.create.mixing(['8x create:andesite_alloy'], ['#kubejs:alloy_nuggets', 'irons_spellbooks:arcane_ingot', 'botania:livingrock'])

   event.recipes.create.mixing(['create:rose_quartz'], [Fluid.of('thermal:redstone', 200), 'minecraft:quartz']).processingTime(30)

   event.recipes.create.mixing([Fluid.of('thermal:creosote', 25), Item.of('thermal:coal_coke').withChance(0.75)], ['minecraft:coal']).heated().processingTime(45)


//compacting


   //removed in favor of deploying recipe  event.recipes.create.compacting([Fluid.of('minecraft:water')], ['minecraft:ghast_tear'])

//cutting
   

event.recipes.create.cutting('6x minecraft:chain', 'minecraft:iron_ingot')
event.recipes.create.cutting('6x minecraft:chain', '#forge:ingots/zinc')


//filling
  event.recipes.create.filling('create:electron_tube', [Fluid.of('tconstruct:molten_iron', 10), 'create:polished_rose_quartz'])



// Crafting Changes



   //removed in favor of gears in machine kits    event.replaceInput({ output: 'create:propeller' }, 'create:andesite_alloy', 'thermal:quartz_gear')

   event.replaceInput({ output: 'create:brass_hand' }, 'create:brass_sheet', '#forge:plates/gold')
   event.replaceInput({ id: 'minecraft:nether_brick'}, 'minecraft:netherrack', 'supplementaries:ash_brick')
   event.replaceInput({ output: 'minecraft:chain' }, 'minecraft:iron_ingot', 'minecraft:iron_nugget')
   event.replaceInput({ output: 'minecraft:chain' }, 'create:zinc_ingot', '#forge:nuggets/zinc')
   event.remove({ id: 'create:sequenced_assembly/sturdy_sheet'})
   event.replaceInput({ output: 'createaddition:modular_accumulator' }, 'create:brass_casing', 'create:railway_casing')
   event.remove({ output: 'create_new_age:energiser_t1'})
   event.replaceInput({ id: 'create:crafting/logistics/pulse_repeater' }, 'create:brass_sheet', '#forge:plates/gold')
   event.replaceInput({ id: 'create:crafting/logistics/pulse_extender' }, 'create:brass_sheet', '#forge:plates/gold')
   event.replaceInput({ id: 'create:crafting/logistics/pulse_timer' }, 'create:brass_sheet', '#forge:plates/gold')
   event.replaceInput({ id: 'create:crafting/logistics/pulse_repeater' }, '#balm:stones', '#forge:stone')
   event.replaceInput({ id: 'create:crafting/logistics/pulse_extender' }, '#balm:stones', '#forge:stone')
   event.replaceInput({ id: 'create:crafting/logistics/pulse_timer' }, '#balm:stones', '#forge:stone')

   event.replaceInput({ output: 'createoreexcavation:drilling_machine' }, 'create:spout', 'kubejs:lava_kit')
   event.replaceInput({ output: 'createoreexcavation:drilling_machine' }, 'create:precision_mechanism', 'kubejs:forgeslime_gear')
   event.replaceInput({ output: 'createoreexcavation:drilling_machine' }, 'create:electron_tube', 'kubejs:living_kit')
   event.replaceInput({ output: 'createoreexcavation:drilling_machine' }, 'create:sturdy_sheet', 'kubejs:forgeslime_gear')
   event.replaceInput({ output: 'createoreexcavation:drilling_machine' }, 'create:copper_casing', '#forge:plates/brass')
   event.replaceInput({ output: 'createoreexcavation:drilling_machine' }, 'create:brass_casing', 'create:fluid_tank')
   event.replaceInput({ output: 'createoreexcavation:drilling_machine' }, 'create:mechanical_drill', 'kubejs:lifeless_kit')


event.shapeless(
  Item.of('create:andesite_alloy', 4),
    ['2x irons_spellbooks:arcane_ingot',
     '2x #kubejs:alloy_nuggets',
     '2x botania:livingrock']).id('lifeless_alloy_4_manual_only')

event.shapeless(
  Item.of('create:andesite_alloy', 2),
    ['minecraft:nether_brick',
     '#kubejs:alloy_nuggets',
     'botania:livingrock']).id('lifeless_alloy_2_manual_only')

event.shapeless(
  Item.of('create:andesite_alloy', 1),
    ['supplementaries:ash_brick',
     '#kubejs:alloy_nuggets',
     'botania:livingrock']).id('lifeless_alloy_1_manual_only')





})