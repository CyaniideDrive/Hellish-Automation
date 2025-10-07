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

event.recipes.create.splashing([Item.of('minecraft:porkchop').withChance(0.33), Item.of('minecraft:beef').withChance(0.33), Item.of('minecraft:mutton').withChance(0.33)], 'mynethersdelight:hoglin_loin')
event.recipes.create.splashing([Item.of('minecraft:rabbit').withChance(0.5), Item.of('minecraft:chicken').withChance(0.5)], 'mynethersdelight:strider_slice')

})

ServerEvents.recipes(event => {

    let purify = (Result, Input) => {event.recipes.botania.pure_daisy(Result, Input), 	event.recipes.create.splashing(Result, Input),
	event.remove({output: Result})
    }
	
	
	//Full Purifying


	purify('farmersdelight:rich_soil', 'mynethersdelight:resurgent_soil')
	purify('collectorsreap:portobello_colony', 'mynethersdelight:crimson_fungus_colony')
	purify('collectorsreap:portobello_colony', 'mynethersdelight:warped_fungus_colony')
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


	itempurify('minecraft:cod_bucket', 'netherdepthsupgrade:searing_cod_bucket')
	itempurify('minecraft:pufferfish_bucket', 'netherdepthsupgrade:lava_pufferfish_bucket')
	itempurify('minecraft:salmon_bucket', 'netherdepthsupgrade:magmacubefish_bucket')
	itempurify('minecraft:tropical_fish_bucket', 'netherdepthsupgrade:glowdine_bucket')
	itempurify('collectorsreap:clam_bucket', 'netherdepthsupgrade:obsidianfish_bucket')
	itempurify('collectorsreap:tiger_prawn_bucket', 'netherdepthsupgrade:soulsucker_bucket')
	itempurify('collectorsreap:urchin_bucket', 'netherdepthsupgrade:eyeball_fish_bucket')
	itempurify('collectorsreap:platinum_bass_bucket', 'netherdepthsupgrade:blazefish_bucket')
	itempurify('collectorsreap:chieftain_crab_bucket', 'netherdepthsupgrade:fortress_grouper_bucket')
	itempurify('minecraft:axolotl_bucket', 'nethers_exoticism:moloch_in_a_bucket')
	itempurify('minecraft:cod', 'netherdepthsupgrade:searing_cod')
	itempurify('minecraft:pufferfish', 'netherdepthsupgrade:lava_pufferfish')
	itempurify('minecraft:salmon', 'netherdepthsupgrade:magmacubefish')
	itempurify('minecraft:tropical_fish', 'netherdepthsupgrade:blazefish')
	itempurify('collectorsreap:clam', 'netherdepthsupgrade:obsidianfish')
	itempurify('collectorsreap:tiger_prawn', 'netherdepthsupgrade:glowdine')
	itempurify('collectorsreap:urchin', 'netherdepthsupgrade:eyeball_fish')
	itempurify('collectorsreap:platinum_bass', 'netherdepthsupgrade:soulsucker')
	itempurify('minersdelight:squid', 'netherdepthsupgrade:bonefish')
	itempurify('minersdelight:glow_squid', 'netherdepthsupgrade:wither_bonefish')
	itempurify('reliquary:frozen_core', 'reliquary:molten_core')
	itempurify('reliquary:squid_beak', 'reliquary:infernal_claw')
	itempurify('reliquary:rib_bone', 'reliquary:withered_rib')
	itempurify('reliquary:bat_wing', 'netherdepthsupgrade:soul_sucker_leather')
	itempurify('reliquary:chelicerae', 'netherdepthsupgrade:fortress_grouper_plate')
	itempurify('farmersrespite:tea_seeds', 'farmersrespite:coffee_beans')
	itempurify('farmersrespite:rose_hips', 'farmersrespite:coffee_berries')



})

    ServerEvents.recipes(event => {

    


    let altpurify = (Result, Input) => {event.recipes.botania.pure_daisy(Result, Input), event.recipes.create.splashing(Result, Input)
    }


	//Purify (Leave Output)


	altpurify('minecraft:bamboo_block', 'mynethersdelight:powdery_block')
	altpurify('collectorsreap:portobello', 'minecraft:crimson_fungus')
	altpurify('collectorsreap:portobello', 'minecraft:warped_fungus')
	altpurify('miners_delight:cave_carrot_crate', 'mynethersdelight:bullet_pepper_crate')
	altpurify('farmersdelight:carrot_crate', 'miners_delight:cave_carrot_crate')
	altpurify('farmersdelight:potato_crate', 'nethers_exoticism:kiwano_crate')
	altpurify('farmersdelight:beetroot_crate', 'nethers_exoticism:pitaya_crate')
	altpurify('farmersdelight:onion_crate', 'nethers_exoticism:bouddha_s_hand_crate')
	altpurify('farmersdelight:cabbage_crate', 'nethers_exoticism:ramboutan_crate')
	altpurify('farmersdelight:tomato_crate', 'nethers_exoticism:jaboticaba_crate')
	altpurify('collectorsreap:lime_crate', 'collectorsreap:pomegranate_crate')
	altpurify('supplementaries:flax_block', 'farmersdelight:rice_bag')
	altpurify('minecraft:pumpkin', 'netherdepthsupgrade:crimson_kelp_block')
	altpurify('minecraft:melon', 'netherdepthsupgrade:warped_kelp_block')
	altpurify('minecraft:sand', 'minecraft:soul_sand')
	altpurify('minecraft:glass', 'tconstruct:soul_glass')
	altpurify('minecraft:hay_block', 'farmersdelight:straw_bale')
	altpurify('minecraft:grass', 'minecraft:nether_sprouts')
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
	altpurify('quark:berry_sack', 'quark:glowberry_sack')
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



})

    ServerEvents.recipes(event => {

    

    let altitempurify = (Result, Input) => {event.recipes.create.splashing([Result], [Input])
    }


	//Item Purify (Leave Output)


	altitempurify('minecraft:bamboo', 'mynethersdelight:powdery_cannon')
	altitempurify('miners_delight:cave_carrot', 'mynethersdelight:bullet_pepper')
	altitempurify('minecraft:carrot', 'miners_delight:cave_carrot')
	altitempurify('minecraft:potato', 'nethers_exoticism:kiwano')
	altitempurify('minecraft:beetroot', 'nethers_exoticism:pitaya')
	altitempurify('farmersdelight:onion_crate', 'nethers_exoticism:bouddha_s_hand_crate')
	altitempurify('farmersdelight:cabbage', 'nethers_exoticism:ramboutan')
	altitempurify('farmersdelight:tomato', 'nethers_exoticism:jaboticaba')
	altitempurify('collectorsreap:lime', 'collectorsreap:pomegranate')
	altitempurify('supplementaries:flax', 'mynethersdelight:ghasmati')
	altitempurify('minecraft:wheat', 'farmersdelight:straw')
	altitempurify('minecraft:kelp', 'netherdepthsupgrade:warped_kelp')
	altitempurify('minecraft:slime_ball', 'tconstruct:ichor_slime_ball')
	altitempurify('tconstruct:sky_slime_ball', 'tconstruct:ender_slime_ball')
	altitempurify('tconstruct:seared_brick', 'tconstruct:scorched_brick')
	altitempurify('minecraft:kelp', 'netherdepthsupgrade:crimson_kelp')
	altitempurify('farmersdelght:fried_egg', 'mynethersdelight:boiled_egg')
	altitempurify('farmersrespite:yellow_tea_leaves', 'farmersrespite:black_tea_leaves')
	altitempurify('farmersrespite:green_tea_leaves', 'farmersrespite:yellow_tea_leaves')
	altitempurify('minecraft:glow_berries', '#kubejs:end_berries')
	altitempurify('minecraft:sweet_berries', 'minecraft:glow_berries')
	altitempurify('minecraft:brick', 'minecraft:nether_brick')
	altitempurify('minecraft:amethyst_shard', '#kubejs:slime_crystal')
	altitempurify('minecraft:rabbit_foot', 'reliquary:infernal_claws')
	altitempurify('minecraft:feather', 'minecraft:leather')



})