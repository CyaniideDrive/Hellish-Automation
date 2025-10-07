ServerEvents.tags('block', event => {
	event.add('create:fan_processing_catalysts/splashing', 'botania:pure_daisy')
	event.add('create:fan_processing_catalysts/splashing', 'botania:floating_pure_daisy')
	event.add('create:fan_transparent', 'botania:floating_pure_daisy')
	event.remove('create:fan_processing_catalysts/splashing', 'minecraft:water')
	event.remove('create:fan_processing_catalysts/splashing', 'minecraft:water_flowing')
	event.add('create:fan_processing_catalysts/blasting', 'netherdepthsupgrade:wet_lava_sponge')
	event.add('create:fan_transparent', 'netherdepthsupgrade:wet_lava_sponge')

})


ServerEvents.recipes(event => {

//misc

event.remove({ id: 'endportalrecipe:craftable_end_portal' })
event.remove({ output:'#forge:coins'})
event.remove({ output:'tconstruct:coin_cast'})
event.remove({ output:'tconstruct:coin_sand_cast'})
event.remove({ output:'tconstruct:coin_red_sand_cast'})
event.remove({ input:'#forge:coins'})
event.remove({ input:'tconstruct:coin_cast'})
event.remove({ input:'tconstruct:coin_sand_cast'})
event.remove({ input:'tconstruct:coin_red_sand_cast'})
event.remove({ output:'thermal:dynamo_numismatic'})
event.remove({ output:'thermal:dynamo_stirling'})
event.remove({ output:'thermal:dynamo_compression'})
event.remove({ output:'thermal:dynamo_magmatic'})
event.remove({ output:'thermal:dynamo_lapidary'})
event.remove({ output:'thermal:dynamo_disenchantment'})
event.remove({ output:'thermal:dynamo_gourmand'})
event.remove({ output:'create_new_age:electrical_connector'})
event.remove({ output:'create_new_age:heat_pipe'})
event.remove({ output:'create_new_age:heat_pump'})
event.remove({ output:'create_new_age:heater'})
event.remove({ output:'create_new_age:stirling_engine'})
event.remove({ output:'create_new_age:solid_corium'})
event.remove({ output:'create_new_age:corium'})
event.remove({ output:'create_new_age:reactor_casing'})
event.remove({ output:'create_new_age:reactor_rod'})
event.remove({ output:'create_new_age:reactor_glass'})
event.remove({ output:'create_new_age:reactor_fuel_acceptor'})
event.remove({ output:'create_new_age:reactor_heat_vent'})
event.remove({ output:'create_new_age:basic_solar_heating_plate'})
event.remove({ output:'create_new_age:advanced_solar_heating_plate'})
event.remove({ output:'create_new_age:thorium_ore'})
event.remove({ output:'create_new_age:nuclear_fuel'})
event.remove({ output:'create_new_age:thorium'})
event.remove({ output:'create_new_age:radioactive_thorium'})
event.remove({ output:'create_new_age:blank_circuit'})
event.remove({ output:'create_new_age:copper_circuit'})
event.remove({ output:'create_new_age:copper_wire'})
event.remove({ output:'create_new_age:overcharged_iron_wire'})
event.remove({ output:'create_new_age:overcharged_golden_wire'})
event.remove({ output:'create_new_age:overcharged_diamond_wire'})
event.replaceOutput({ output: 'nethers_exoticism:soul_glass' }, 'nethers_exoticism:soul_glass', 'tconstruct:soul_glass')
event.remove({ id: 'mynethersdelight:cutting/hoglin_hide' })
event.replaceOutput({ output: 'cofh_core:honey' }, 'cofh_core:honey', 'create:honey')
event.replaceOutput({ output: 'tconstruct:honey' }, 'tconstruct:honey', 'create:honey')
event.remove({ id:'createoreexcavation:extractor'})
event.remove({ id:'createoreexcavation:extractor/water'})
event.replaceInput({ id: 'supplementaries:slingshot' }, 'minecraft:rabbit_hide', '#forge:leather')
event.replaceInput({ input: 'minecraft:leather' }, 'minecraft:leather', '#forge:leather')
event.replaceInput({ id: 'quark:building/crafting/compressed/bonded_leather' }, '#forge:leather', 'minecraft:leather')
event.replaceInput({ id: 'minecraft:bone_block' }, 'minecraft:bone_meal', 'minecraft:bone')
event.replaceOutput({ id: 'minecraft:bone_meal_from_bone_block' }, 'minecraft:bone_meal', 'minecraft:bone')
event.replaceInput({ id: 'minecraft:stonecutter' }, 'minecraft:stone', '#forge:stone')
event.replaceInput({ id: 'netherdepthsupgrade:lava_fishing_rod' }, 'minecraft:netherite_scrap', 'botania:mana_string')
event.replaceInput({ id: 'netherdepthsupgrade:lava_fishing_rod' }, 'minecraft:blaze_rod', '#forge:rods/iron')
event.replaceInput({ id: 'minecraft:lever' }, 'minecraft:cobblestone', '#forge:stone')
event.replaceInput({ id: 'create:milling/cobblestone' }, 'minecraft:cobblestone', '#minecraft:stone_crafting_materials')
event.replaceInput({ input: 'create:copper_sheet' }, 'create:copper_sheet', '#forge:plates/copper')
event.replaceInput({ input: 'create:brass_sheet' }, 'create:brass_sheet', '#forge:plates/brass')
event.replaceInput({ input: 'create:iron_sheet' }, 'create:iron_sheet', '#forge:plates/iron')
event.replaceInput({ input: 'create:golden_sheet' }, 'create:golden_sheet', '#forge:plates/gold')
event.replaceInput({ input: 'createaddition:electrum_sheet' }, 'createaddition:electrum_sheet', '#forge:plates/electrum')
event.replaceInput({ input: 'createaddition:zinc_sheet' }, 'createaddition:zinc_sheet', '#forge:plates/zinc')
event.replaceOutput({ output: 'create:copper_sheet' }, 'create:copper_sheet', 'thermal:copper_plate')
event.replaceOutput({ output: 'create:iron_sheet' }, 'create:iron_sheet', 'thermal:iron_plate')
event.replaceOutput({ output: 'create:golden_sheet' }, 'create:golden_sheet', 'thermal:gold_plate')
event.replaceOutput({ output: 'createaddition:electrum_sheet' }, 'createaddition:electrum_sheet', 'thermal:electrum_plate')
event.replaceInput({ id: 'irons_spellbooks:scroll_forge' }, 'minecraft:polished_deepslate', 'minecraft:polished_blackstone')
event.replaceInput({ input: 'minecraft:glass' }, 'minecraft:glass', '#forge:glass/colorless')
event.replaceInput({ id: 'brewinandchewin:keg' }, 'minecraft:honeycomb', '#outer_end:crystal_shards')
event.replaceInput({ output: '#forge:gears' }, 'minecraft:iron_nugget', 'kubejs:gold_ring')
event.replaceInput({ id: 'thermal:tools/detonator' }, 'thermal:signalum_gear', 'thermal:ruby_gear')
event.replaceInput({ id: 'thermal:augments/machine_speed_augment' }, 'thermal:lead_gear', 'thermal:ruby_gear')
event.remove({ id: 'ae2:charging/meteorite_compass' })
event.remove({ id: 'ae2:network/blocks/crank' })
event.remove({ id: 'ae2:network/blocks/crystal_processing_charger' })
event.remove({ id: 'theurgy:distillation/cobblestone' })
event.remove({ id: 'theurgy:distillation/stone_bricks' })
event.replaceInput({ id: 'theurgy:distillation/leaves' }, '#minecraft:leaves', '#minecraft:wart_blocks')
event.replaceInput({ id: 'theurgy:distillation/dirt' }, '#minecraft:dirt', '#forge:netherrack')
event.remove({ id: 'thermal:augments/dynamo_fuel_augment' })
event.remove({ id: 'thermal:augments/dynamo_output_augment' })
event.remove({ id: 'thermal:augments/dynamo_throttle_augment' })
event.remove({ id: 'thermal:energy_duct_4' })
event.remove({ id: 'thermal:fluid_duct_4' })
event.remove({ id: 'thermal:fluid_duct_windowed' })
event.remove({ id: 'thermal:energy_limiter_attachment_2' })




event.remove({ id: 'farmersdelight:fried_egg' })
event.remove({ id: 'farmersdelight:fried_egg_from_campfire_cooking' })
event.remove({ id: 'farmersdelight:fried_egg_from_smoking' })
event.replaceInput(
  { input: 'minecraft:egg' },
           'minecraft:egg',
           '#forge:eggs')

event.remove({ id:'irons_spellbooks:arcane_ingot'})
event.replaceInput(
  { input: 'irons_spellbooks:arcane_ingot' },
           'irons_spellbooks:arcane_ingot',
           'botania:manasteel_ingot')
//coins

event.shapeless(
  Item.of('thermal:netherite_coin', 1),
    ['9x thermal:gold_coin'])

event.shapeless(
  Item.of('thermal:netherite_coin', 9),
    ['thermal:gold_coin'])

//Shapeless

event.shapeless(
  Item.of('minecraft:wheat_seeds', 1),
    ['minecraft:wheat']).id('kubejs:wheat_seeds_manual_only')

  event.remove({ id:'minecraft:red_dye_from_beetroot'})
event.shapeless(
  Item.of('minecraft:beetroot_seeds', 1),
    ['minecraft:beetroot']).id('kubejs:beetroot_seeds_manual_only')


event.remove({ output:'mynethersdelight:letios_compost'})
event.remove({ output:'farmersdelight:organic_compost'})

event.shapeless(
  Item.of('mynethersdelight:resurgent_soil', 1),[
    '2x #minecraft:wart_blocks',
    '#minecraft:soul_fire_base_blocks',
    'minecraft:bone']).id('kubejs:nether_compost_manual_only')

event.remove({ id:'farmersdelight:rice_from_bag'})
event.replaceInput({ output: 'farmersdelight:rice_bag' }, 'farmersdelight:rice', 'mynethersdelight:ghasmati')

event.shapeless(
  Item.of('mynethersdelight:ghasmati', 9),
    ['farmersdelight:rice_bag'])

event.shapeless(
  Item.of('tconstruct:necrotic_bone', 5),
    ['reliquary:withered_rib'])

event.shapeless(
  Item.of('kubejs:empty_mimic'),
    [Item.of('endermanoverhaul:enderman_tooth', 2),
    '#artifacts:artifacts',
    '#forge:chests/wooden'])


	//Shaped

  //misc
event.shaped(
  Item.of('minecraft:bamboo', 16),
   ['1',
    '1'],
  {1: 'minecraft:bamboo_block'
  })

event.shaped(
  Item.of('mynethersdelight:powder_cannon', 16),
   ['1',
    '1'],
  {1: 'mynethersdelight:powdery_block'
  })

event.shaped(
  Item.of('kubejs:content_baby_ghast'),
   ['111',
    '131',
    '222'],
  {1: 'mynethersdelight:ghasmati',
   2: 'mynethersdelight:ghasta',
   3: 'reliquary:catalyzing_gland'
  })

event.shaped(
  Item.of('minecraft:water_bucket'),
   ['1',
    '2'],
  {1: 'minecraft:ghast_tear', 2: 'minecraft:bucket'}).id('kubejs:ghast_water_manual_only')

event.shaped(
  Item.of('nethers_exoticism:bone_column'),
   ['11',
    '11'],
  {1: 'minecraft:bone_meal'})

event.shaped(
  Item.of('minecraft:chest'),
   ['111',
    '1 1',
    '111'],
  {1: '#minecraft:planks'
  })

event.shaped(
  Item.of('minecraft:chest', 4),
   ['111',
    '1 1',
    '111'],
  {1: '#minecraft:logs'
  })

event.remove({ id:'prettypipes:pipe'})
event.shaped(
  Item.of('prettypipes:pipe', 4),
   ['121'],
  {1: '#forge:plates/brass',
   2: '#forge:ingots/brass'
  })

event.shaped(
  Item.of('prettypipes:pipe', 4),
   ['1',
    '2',
    '1'],
  {1: '#forge:plates/brass',
  2: '#forge:ingots/brass'
  })

//Mixing

event.recipes.create.mixing(
  '2x mynethersdelight:resurgent_soil',
['2x #minecraft:wart_blocks',
'#minecraft:wither_summon_base_blocks',
'minecraft:bone'])

event.recipes.create.mixing(
  '16x farmersdelight:milk_bottle',
['16x minecraft:glass_bottle',
'minecraft:ghast_tear'])


event.remove({ id: 'thermal:dirt_crafting' })
event.recipes.create.mixing(
  '4x minecraft:dirt',
['16x kubejs:dead_dirt',
'#kubejs:fertile'])

//stonecutting



//Cutting

    event.remove({ id: 'irons_spellbooks:hogskin_to_leather' })
    event.recipes.farmersdelight.cutting(
        'mynethersdelight:hoglin_hide',
        '#farmersdelight:tools/knives',
        ['4x irons_spellbooks:hogskin',
 Item.of('2x irons_spellbooks:hogskin').withChance(0.5)]
        )

    event.recipes.farmersdelight.cutting(
        'kubejs:content_baby_ghast',
        '#kubejs:weapons',
        ['kubejs:depressed_baby_ghast',
 Item.of('mynethersdelight:ghasta').withChance(0.1),
 Item.of('minecraft:ghast_tear'),
 Item.of('minecraft:ghast_tear', 3).withChance(0.5)]
        )

    event.recipes.farmersdelight.cutting(
        '#netherdepthsupgrade:nether_salad_foods',
        '#farmersdelight:tools/knives',
        [Item.of('farmersdelight:straw').withChance(0.5)]
        )

    event.remove({ id: 'netherdepthsupgrade:bone_meal' })
    event.recipes.farmersdelight.cutting(
        'netherdepthsupgrade:bonefish',
        '#farmersdelight:tools/knives',
        [Item.of('2x minecraft:bone'), Item.of('reliquary:rib_bone')]
        )

    event.recipes.farmersdelight.cutting(
        'netherdepthsupgrade:wither_bonefish',
        '#farmersdelight:tools/knives',
        [Item.of('2x tconstruct:necrotic_bone'), Item.of('reliquary:withered_rib')]
        )


    event.remove({ id: 'farmersdelight:cutting/nether_bricks' })
    event.recipes.farmersdelight.cutting(
        'minecraft:nether_bricks',
        '#minecraft:pickaxes',
        [Item.of('minecraft:nether_brick'), Item.of('minecraft:nether_brick').withChance(0.5)]
        )

    event.recipes.farmersdelight.cutting(
        'minecraft:red_nether_bricks',
        '#minecraft:pickaxes',
        [Item.of('minecraft:nether_brick'), Item.of('minecraft:nether_brick').withChance(0.5), Item.of('minecraft:nether_wart').withChance(0.5)]
        )

    event.recipes.farmersdelight.cutting(
        'minecraft:magma_block',
        '#minecraft:pickaxes',
        [Item.of('2x minecraft:magma_cream'), Item.of('2x minecraft:magma_cream').withChance(0.25)]
        )



//rolling
//    event.custom({
//        type:'createaddition:rolling',
//        input: {
//            item: 'create:pulp'
//        },
//        result: {
//            item: 'minecraft:paper',
//            count: 4
//        }
//    })


//filling
  event.recipes.create.filling('kubejs:content_baby_ghast', [Fluid.water(500), 'kubejs:depressed_baby_ghast'])

//deploying



//energizing

	event.custom({'type': 'create_new_age:energising',
	'energy_needed': 1000,
	'ingredients': [{'item': 'reliquary:catalyzing_gland'}],
	'results': [{'item': 'reliquary:eye_of_the_storm'}]})

	event.remove({ id: 'ae2:charging/charged_certus_quartz_crystal' })
	event.custom({'type': 'create_new_age:energising',
	'energy_needed': 1600,
	'ingredients': [{'item': 'ae2:certus_quartz_crystal'}],
	'results': [{'item': 'ae2:charged_certus_quartz_crystal'}]})

	event.remove({ id: 'ae2:charging/guide' })
	event.custom({'type': 'create_new_age:energising',
	'energy_needed': 1600,
	'ingredients': [{'item': 'minecraft:book'}],
	'results': [{'item': 'ae2:guide'}]})

//compacting
  event.recipes.create.compacting([Fluid.lava(500), 'netherdepthsupgrade:lava_sponge'], ['netherdepthsupgrade:wet_lava_sponge'])

//Crushing & Milling
  event.recipes.create.milling([Item.of('16x minecraft:redstone').withChance(0.5)], 'mynethersdelight:bullet_pepper')
  event.recipes.create.milling(['1x minecraft:sugar', Item.of('minecraft:sugar').withChance(0.1)], 'mynethersdelight:strider_rock')
  event.recipes.create.milling(['2x minecraft:sugar', Item.of('minecraft:sugar').withChance(0.5), Item.of('minecraft:bone_meal').withChance(0.25)], 'mynethersdelight:strider_egg')
  event.recipes.create.crushing(['27x minecraft:bone_meal', Item.of('9x minecraft:white_dye').withChance(0.25), Item.of('27x minecraft:bone_meal').withChance(0.25)], 'minecraft:bone_block')


})