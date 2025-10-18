ServerEvents.recipes(event => {


	//Purification Removal

	event.remove({id: 'botania:pure_daisy/cobblestone'})
	event.remove({id: 'botania:pure_daisy/sand'})
	event.remove({id: 'botania:pure_daisy/livingwood'})
	event.remove({id: 'botania:pure_daisy/livingrock'})
	event.remove({id: 'create:splashing/industrial_iron_block'})
	event.remove({id: 'create:splashing/industrial_iron_window'})
	event.remove({id: 'create:splashing/industrial_iron_window_pane'})
	event.remove({id: 'create:splashing/sand'})
	event.remove({id: 'create:splashing/red_sand'})
	event.remove({id: 'create:splashing/soul_sand'})
	event.remove({id: 'create:splashing/crushed_raw_zinc'})
	event.remove({id: 'create:splashing/crushed_raw_gold'})
	event.remove({id: 'create:splashing/crushed_raw_copper'})
	event.remove({id: 'create:splashing/crushed_raw_iron'})
	event.remove({id: 'create:splashing/wheat_flour'})
	event.remove({id: 'create:splashing/gravel'})




//purify multiple output

event.recipes.create.splashing('2x reliquary:slime_pearl', 'kubejs:incomplete_slime_gear_1')

//chance purify

})

ServerEvents.recipes(event => {

    let purify = (Result, Input) => {event.recipes.botania.pure_daisy(Result, Input), 	event.recipes.create.splashing(Result, Input),
	event.remove({output: Result})
    }
	
	
	//Full Purifying


	purify('farmersdelight:rich_soil', 'mynethersdelight:resurgent_soil')
	purify('botania:livingrock', '#forge:stone')
	purify('kubejs:dead_dirt', 'minecraft:soul_soil')
	purify('minecraft:sponge', 'netherdepthsupgrade:lava_sponge')
	purify('botania:livingwood_log', '#minecraft:logs')
})

    ServerEvents.recipes(event => {

    let itempurify = (Result, Input) => {event.recipes.create.splashing(Result, Input),
	event.remove({output: Result})
}
	

	//Item Purifying


	itempurify('collectorsreap:chieftain_crab_bucket', 'netherdepthsupgrade:fortress_grouper_bucket')
	itempurify('minecraft:axolotl_bucket', 'nethers_exoticism:moloch_in_a_bucket')
	itempurify('minecraft:cod', 'netherdepthsupgrade:searing_cod_roll')
	itempurify('minecraft:pufferfish', 'netherdepthsupgrade:lava_pufferfish_roll')
	itempurify('minecraft:salmon', 'netherdepthsupgrade:magmacubefish_roll')
	itempurify('minecraft:tropical_fish', 'netherdepthsupgrade:blazefish_roll')
	itempurify('collectorsreap:clam', 'netherdepthsupgrade:obsidianfish_roll')
	itempurify('collectorsreap:tiger_prawn', 'netherdepthsupgrade:glowdine_roll')
	itempurify('collectorsreap:urchin', 'netherdepthsupgrade:eyeball_fish')
	itempurify('collectorsreap:platinum_bass', 'netherdepthsupgrade:soulsucker_roll')
	itempurify('miners_delight:squid', 'netherdepthsupgrade:bonefish')
	itempurify('miners_delight:squid', 'miners_delight:glow_squid')
	itempurify('reliquary:frozen_core', 'reliquary:molten_core')
	itempurify('reliquary:squid_beak', 'reliquary:infernal_claw')
	itempurify('reliquary:rib_bone', 'reliquary:withered_rib')
	itempurify('reliquary:bat_wing', 'netherdepthsupgrade:soul_sucker_leather')
	itempurify('reliquary:chelicerae', 'netherdepthsupgrade:fortress_grouper_plate')
	itempurify('farmersrespite:tea_seeds', 'farmersrespite:coffee')
	itempurify('farmersrespite:rose_hips', 'farmersrespite:long_coffee')
	itempurify('minecraft:porkchop', 'mynethersdelight:hotdog')
	itempurify('minecraft:beef', 'mynethersdelight:sausage_and_potatoes')
	itempurify('minecraft:mutton', 'mynethersdelight:plate_of_stuffed_hoglin')
	itempurify('minecraft:chicken', 'mynethersdelight:strider_stew')
	itempurify('minecraft:rabbit', 'mynethersdelight:bleeding_tartar')



})

    ServerEvents.recipes(event => {

    


    let altpurify = (Result, Input) => {event.recipes.botania.pure_daisy(Result, Input), event.recipes.create.splashing(Result, Input)
    }


	//Purify (Leave Output)


	altpurify('minecraft:bamboo_block', 'mynethersdelight:powdery_block')
	altpurify('minecraft:sand', 'minecraft:soul_sand')
	altpurify('minecraft:glass', 'tconstruct:soul_glass')
	altpurify('minecraft:bricks', 'minecraft:nether_bricks')
	altpurify('tconstruct:earth_congealed_slime', 'tconstruct:ichor_congealed_slime')
	altpurify('tconstruct:sky_congealed_slime', 'tconstruct:ender_congealed_slime')
	altpurify('tconstruct:seared_bricks', 'tconstruct:scorched_bricks')
	altpurify('tconstruct:seared_stone', 'tconstruct:scorched_stone')
	altpurify('tconstruct:seared_fancy_bricks', 'tconstruct:chiseled_scorched_bricks')
	altpurify('tconstruct:seared_cobble', 'tconstruct:scorched_road')
	altpurify('tconstruct:seared_paver', 'tconstruct:polished_scorched_stone')
	altpurify('farmersrespite:yellow_tea_leaves_sack', 'farmersrespite:black_tea_leaves_sack')
	altpurify('farmersrespite:green_tea_leaves_sack', 'farmersrespite:yellow_tea_leaves_sack')
	altpurify('minecraft:cactus', 'nethers_exoticism:pitaya_stem')
	altpurify('create:scoria', 'create:scorchia')
  	altpurify('create:cut_scoria', 'create:cut_scorchia')
	altpurify('create:polished_cut_scoria', 'create:polished_cut_scorchia')
  	altpurify('create:cut_scoria_bricks', 'create:cut_scorchia_bricks')
  	altpurify('create:small_scoria_bricks', 'create:small_scorchia_bricks')
  	altpurify('create:layered_scoria', 'create:layered_scorchia')
	altpurify('create:scoria_pillar', 'create:scorchia_pillar')
	altpurify('minecraft:bricks', 'minecraft:nether_bricks')
	altpurify('minecraft:obsidian', '#kubejs:hot_obsidian')
	altpurify('minecraft:amethyst_block', '#kubejs:slime_crystal_block')
	altpurify('minecraft:cobblestone', 'minecraft:netherrack')
	altpurify('supplementaries:feather_block', 'quark:bonded_leather')
	altpurify('minecraft:skeleton_skull', 'minecraft:wither_skeleton_skull')



})

    ServerEvents.recipes(event => {

    

    let altitempurify = (Result, Input) => {event.recipes.create.splashing([Result], [Input])
    }


	//Item Purify (Leave Output)


	altitempurify('minecraft:bamboo', 'mynethersdelight:powdery_cannon')
	altitempurify('minecraft:carrot', 'mynethersdelight:stuffed_pepper')
	altitempurify('minecraft:carrot', 'miners_delight:cave_carrot')
	altitempurify('minecraft:potato', 'mynethersdelight:deviled_egg')
	altitempurify('minecraft:beetroot', 'collectorsreap:pomegranate_gummy')
	altitempurify('farmersdelight:cabbage', 'mynethersdelight:ghast_salad')
	altitempurify('farmersdelight:tomato', 'collectorsreap:pomegranate_custard')
	altitempurify('farmersdelight:onion', 'mynethersdelight:chilidog')
	altitempurify('collectorsreap:lime', 'nethers_exoticism:unsettling_fruits_salad')
	altitempurify('supplementaries:flax', 'farmersdelight:cooked_rice')
	altitempurify('minecraft:wheat', 'mynethersdelight:slices_of_bread')
	altitempurify('minecraft:kelp', 'netherdepthsupgrade:warped_kelp_roll_slice')
	altitempurify('farmersdelght:fried_egg', 'mynethersdelight:boiled_egg')
	altitempurify('farmersrespite:yellow_tea_leaves', 'farmersrespite:black_tea_leaves')
	altitempurify('farmersrespite:green_tea_leaves', 'farmersrespite:yellow_tea_leaves')
	altitempurify('minecraft:sweet_berries', '#kubejs:end_berries')
	altitempurify('minecraft:sweet_berries', 'minecraft:glow_berries')
	altitempurify('collectorsreap:portobello', 'farmersdelight:nether_salad')
	altitempurify('farmersdelight:pumpkin_slice', 'mynethersdelight:hot_cream_cone')
	altitempurify('minecraft:melon_slice', 'collectorsreap:pink_limeade')
	altitempurify('minecraft:slime_ball', 'tconstruct:ichor_slime_ball')
	altitempurify('tconstruct:sky_slime_ball', 'tconstruct:ender_slime_ball')
	altitempurify('tconstruct:seared_brick', 'tconstruct:scorched_brick')
	altitempurify('minecraft:brick', 'minecraft:nether_brick')
	altitempurify('minecraft:amethyst_shard', '#kubejs:slime_crystal')
	altitempurify('minecraft:rabbit_foot', 'reliquary:infernal_claws')
	altitempurify('minecraft:feather', 'minecraft:leather')
 

//Haunting
event.recipes.create.haunting('miners_delight:glow_squid', 'miners_delight:squid')
event.recipes.create.haunting('miners_delight:cave_carrot', 'minecraft:carrot')
event.recipes.create.haunting('miners_delight:cave_carrot_crate', 'farmersdelight:carrot_crate')
event.recipes.create.haunting('quark:glowberry_sack', 'quark:berry_sack')
event.recipes.create.haunting('farmersrespite:black_tea_leaves', 'farmersrespite:yellow_tea_leaves')
event.recipes.create.haunting('farmersrespite:yellow_tea_leaves', 'farmersrespite:green_tea_leaves')
event.recipes.create.haunting('farmersrespite:black_tea_leaves_sack', 'farmersrespite:yellow_tea_leaves_sack')
event.recipes.create.haunting('farmersrespite:yellow_tea_leaves_sack', 'farmersrespite:green_tea_leaves_sack')



})