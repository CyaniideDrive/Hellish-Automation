ServerEvents.recipes(event => {

	event.remove({ id:'createoreexcavation:ore_vein_type/glowstone'})
	event.remove({ id:'createoreexcavation:drilling/glowstone'})
	event.recipes.createoreexcavation.vein('{"text": "Glowstone"}', 'minecraft:glowstone_dust').id('kubejs:glowstone').biomeWhitelist('minecraft:is_nether').placement(64, 16, 6894685)

	event.recipes.createoreexcavation.drilling(
		['2x minecraft:glowstone_dust', Item.of('2x minecraft:glowstone_dust').withChance(0.5)],
		'kubejs:glowstone', 400)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.priority(1)
		.id('kubejs:glowstone2');



	event.recipes.createoreexcavation.vein('{"text": "Nether Lapis"}', 'minecraft:lapis_lazuli').id('kubejs:nether_lapis').biomeWhitelist('minecraft:is_nether').placement(256, 24, 6894685)

	event.recipes.createoreexcavation.drilling(
		['minecraft:lapis_lazuli', Item.of('6x minecraft:lapis_lazuli').withChance(0.5)],
		'kubejs:nether_lapis', 400)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.priority(2)
		.id('kubejs:nether_lapis2');



	event.recipes.createoreexcavation.vein('{"text": "Nether Coal"}', 'minecraft:coal').id('kubejs:nether_coal').biomeWhitelist('minecraft:is_nether').placement(128, 8, 6894685)

	event.recipes.createoreexcavation.drilling(
		'minecraft:lapis_coal',
		'kubejs:nether_coal', 400)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.priority(2)
		.id('kubejs:nether_coal2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Apatite"}', 'thermal:apatite').id('kubejs:nether_apatite').biomeWhitelist('minecraft:is_nether').placement(256, 12, 6894685)

	event.recipes.createoreexcavation.drilling(
		['2x thermal:apatite', Item.of('6x thermal:apatite').withChance(0.5)],
		'kubejs:nether_apatite', 400)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.priority(4)
		.id('kubejs:nether_apatite2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Sulfur"}', 'thermal:sulfur').id('kubejs:nether_sulfur').biomeWhitelist('minecraft:is_nether').placement(512, 12, 6894685)

	event.recipes.createoreexcavation.drilling(
		'thermal:sulfur',
		'kubejs:nether_sulfur', 400)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.priority(4)
		.id('kubejs:nether_sulfur2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Niter"}', 'thermal:niter').id('kubejs:nether_niter').biomeWhitelist('minecraft:is_nether').placement(512, 12, 6894685)

	event.recipes.createoreexcavation.drilling(
		'thermal:niter',
		'kubejs:nether_niter', 400)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.fluid('minecraft:lava')
		.priority(4)
		.id('kubejs:nether_niter2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Cinnabar"}', 'thermal:cinnabar').id('kubejs:nether_cinnabar').biomeWhitelist('minecraft:is_nether').placement(512, 12, 6856894)

	event.recipes.createoreexcavation.drilling(
		'thermal:cinnabar',
		'kubejs:nether_cinnabar', 400)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.fluid('minecraft:lava')
		.priority(4)
		.id('kubejs:nether_cinnabar2');


	event.remove({ id:'createoreexcavation:drilling/quartz'})
	event.remove({ id:'createoreexcavation:ore_vein_type/quartz'})
	event.recipes.createoreexcavation.vein('{"text": "Nether Quartz"}', 'minecraft:quartz').id('kubejs:nether_quartz').biomeWhitelist('minecraft:is_nether').placement(64, 12, 6869485)

	event.recipes.createoreexcavation.drilling(
		['minecraft:quartz', Item.of('minecraft:quartz').withChance(0.25)],
		'kubejs:nether_quartz', 400)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.fluid('minecraft:lava')
		.priority(2)
		.id('kubejs:nether_quartz2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Certus Quartz"}', 'ae2:certus_quartz_crystal').id('kubejs:nether_certus_quartz').biomeWhitelist('minecraft:is_nether').placement(64, 12, 9468685)

	event.recipes.createoreexcavation.drilling(
		['ae2:certus_quartz_crystal', Item.of('ae2:charged_certus_quartz_crystal').withChance(0.25)],
		'kubejs:nether_certus_quartz', 400)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.fluid('minecraft:lava')
		.priority(4)
		.id('kubejs:nether_certus_quartz2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Copper"}', 'minecraft:raw_copper').id('kubejs:nether_copper').biomeWhitelist('minecraft:is_nether').placement(512, 16, 6868945)

	event.recipes.createoreexcavation.drilling(
		['2x minecraft:raw_copper', Item.of('4x minecraft:raw_copper').withChance(0.5)],
		'kubejs:nether_copper', 600)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.fluid('minecraft:lava')
		.priority(6)
		.id('kubejs:nether_copper2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Iron"}', 'minecraft:raw_iron').id('kubejs:nether_iron').biomeWhitelist('minecraft:is_nether').placement(512, 24, 6894685)

	event.recipes.createoreexcavation.drilling(
		'minecraft:raw_iron',
		'kubejs:nether_iron', 600)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.fluid('minecraft:lava')
		.priority(5)
		.id('kubejs:nether_iron2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Zinc"}', 'create:raw_zinc').id('kubejs:nether_zinc').biomeWhitelist('minecraft:is_nether').placement(512, 24, 6868945)

	event.recipes.createoreexcavation.drilling(
		'create:raw_zinc',
		'kubejs:nether_zinc', 600)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.priority(5)
		.id('kubejs:nether_zinc2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Tin"}', 'thermal:raw_tin').id('kubejs:nether_tin').biomeWhitelist('minecraft:is_nether').placement(512, 24, 6885946)

	event.recipes.createoreexcavation.drilling(
		'thermal:raw_tin',
		'kubejs:nether_tin', 600)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.fluid('minecraft:lava')
		.priority(5)
		.id('kubejs:nether_tin2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Lead"}', 'thermal:raw_lead').id('kubejs:nether_lead').biomeWhitelist('minecraft:is_nether').placement(512, 24, 6694885)

	event.recipes.createoreexcavation.drilling(
		'thermal:raw_lead',
		'kubejs:nether_lead', 600)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.fluid('minecraft:lava')
		.priority(5)
		.id('kubejs:nether_lead2');


	event.remove({ id:'createoreexcavation:ore_vein_type/nether_gold'})
	event.remove({ id:'createoreexcavation:drilling/nether_gold'})
	event.recipes.createoreexcavation.vein('{"text": "Nether Gold"}', 'minecraft:raw_gold').id('kubejs:nether_gold').biomeWhitelist('minecraft:is_nether').placement(64, 4, 6546889)

	event.recipes.createoreexcavation.drilling(
		[Item.of('8x minecraft:raw_gold'), Item.of('16x minecraft:raw_gold').withChance(0.5)],
		'kubejs:nether_gold', 600)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.fluid('minecraft:lava')
		.priority(6)
		.id('kubejs:nether_gold2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Rich Gold"}', 'minecraft:raw_gold_block').id('kubejs:rich_nether_gold').biomeWhitelist('minecraft:is_nether').placement(512, 16, 8946685)

	event.recipes.createoreexcavation.drilling(
		[Item.of('8x minecraft:raw_gold_block'), Item.of('16x minecraft:raw_gold_block').withChance(0.5), Item.of('128x minecraft:raw_gold').withChance(0.5)],
		'kubejs:rich_nether_gold', 600)
		.stress(512)
		.drill('#kubejs:diamond_and_up_drills')
		.fluid('tconstruct:blazing_blood')
		.priority(9)
		.id('kubejs:rich_nether_gold2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Silver"}', 'thermal:raw_silver').id('kubejs:nether_silver').biomeWhitelist('minecraft:is_nether').placement(512, 40, 6894865)

	event.recipes.createoreexcavation.drilling(
		'thermal:raw_silver',
		'kubejs:nether_silver', 600)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.fluid('minecraft:lava')
		.priority(4)
		.id('kubejs:nether_silver2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Nickel"}', 'thermal:raw_nickel').id('kubejs:nether_nickel').biomeWhitelist('minecraft:is_nether').placement(512, 24, 4658698)

	event.recipes.createoreexcavation.drilling(
		'thermal:raw_nickel',
		'kubejs:nether_nickel', 600)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.fluid('minecraft:lava')
		.priority(5)
		.id('kubejs:nether_nickel2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Redstone"}', 'createoreexcavation:raw_redstone').id('kubejs:nether_redstone').biomeWhitelist('minecraft:is_nether').placement(256, 16, 6894685)

	event.recipes.createoreexcavation.drilling(
		['createoreexcavation:raw_redstone', Item.of('2x createoreexcavation:raw_redstone').withChance(0.5), Item.of('8x minecraft:redstone').withChance(0.75)],
		'kubejs:nether_redstone', 600)
		.stress(256)
		.drill('#createoreexcavation:drills')
		.fluid('minecraft:lava')
		.priority(7)
		.id('kubejs:nether_redstone2');


	event.recipes.createoreexcavation.vein('{"text": "Raw Cobalt"}', 'tconstruct:raw_cobalt').id('kubejs:raw_cobalt').biomeWhitelist('minecraft:is_nether').placement(512, 32, 6648895)

	event.recipes.createoreexcavation.drilling(
		'tconstruct:raw_cobalt',
		'kubejs:raw_cobalt', 1200)
		.stress(512)
		.drill('#kubejs:diamond_and_up_drills')
		.fluid('tconstruct:blazing_blood')
		.priority(6)
		.id('kubejs:raw_cobalt2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Diamond"}', 'createoreexcavation:raw_diamond').id('kubejs:nether_diamond').biomeWhitelist('minecraft:is_nether').placement(512, 64, 6468895)

	event.recipes.createoreexcavation.drilling(
		'createoreexcavation:raw_diamond',
		'kubejs:nether_diamond', 1200)
		.stress(512)
		.drill('#createoreexcavation:drills')
		.fluid('tconstruct:blazing_blood')
		.priority(8)
		.id('kubejs:nether_diamond2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Emerald"}', 'createoreexcavation:raw_emerald').id('kubejs:nether_emerald').biomeWhitelist('minecraft:is_nether').placement(512, 64, 6694588)

	event.recipes.createoreexcavation.drilling(
		'createoreexcavation:raw_emerald',
		'kubejs:nether_emerald', 1200)
		.stress(512)
		.drill('#createoreexcavation:drills')
		.fluid('tconstruct:blazing_blood')
		.priority(8)
		.id('kubejs:nether_emerald2');


	event.recipes.createoreexcavation.vein('{"text": "Nether Arcane Debris"}', 'irons_spellbooks:arcane_debris').id('kubejs:nether_arcane_debris').biomeWhitelist('minecraft:is_nether').placement(512, 128, 9568684)

	event.recipes.createoreexcavation.drilling(
		'irons_spellbooks:arcane_debris',
		'kubejs:nether_arcane_debris', 1600)
		.stress(1024)
		.drill('#kubejs:diamond_and_up_drills')
		.fluid('tconstruct:blazing_blood')
		.priority(3)
		.id('kubejs:nether_arcane_debris2');


	event.remove({ id:'createoreexcavation:ore_vein_type/netherite'})
	event.remove({ id:'createoreexcavation:drilling/netherite'})
	event.recipes.createoreexcavation.vein('{"text": "Poor Ancient Debris"}', 'minecraft:netherite_scrap').id('kubejs:ancient_debris').biomeWhitelist('minecraft:is_nether').placement(512, 32, 668589)

	event.recipes.createoreexcavation.drilling(
		['tconstruct:debris_nugget', Item.of('8x tconstruct:debris_nugget').withChance(0.5), Item.of('2x minecraft:netherite_scrap').withChance(0.5), Item.of('minecraft:ancient_debris').withChance(0.1)],
		'kubejs:ancient_debris', 1600)
		.stress(1024)
		.drill('#kubejs:diamond_and_up_drills')
		.fluid('minecraft:lava')
		.priority(9)
		.id('kubejs:ancient_debris2');


	event.recipes.createoreexcavation.vein('{"text": "Rich Ancient Debris"}', 'minecraft:ancient_debris').id('kubejs:rich_ancient_debris').biomeWhitelist('minecraft:is_nether').placement(512, 128, 8658946)

	event.recipes.createoreexcavation.drilling(
		[Item.of('2x minecraft:ancient_debris'), Item.of('4x minecraft:ancient_debris').withChance(0.5)],
		'kubejs:rich_ancient_debris', 1600)
		.stress(2048)
		.drill('createoreexcavation:netherite_drill')
		.fluid('tconstruct:blazing_blood')
		.priority(10)
		.id('kubejs:rich_ancient_debris2');

})