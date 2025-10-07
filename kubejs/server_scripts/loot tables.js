LootJS.modifiers((event) => {

	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
	.replaceLoot("mynethersdelight:hoglin_loin", "minecraft:redstone")
	.replaceLoot("minecraft:leather", "irons_spellbooks:hogskin")
	.replaceLoot("minecraft:nether_brick", "minecraft:coal")
	.replaceLoot("minecraft:obsidian", "minecraft:magma_block")
	.replaceLoot("minecraft:crying_obsidian", "create:scorchia")
	.replaceLoot('minecraft:iron_nugget', "supplementaries:ash_brick")
	.replaceLoot('mynethersdelight:ghasta', "supplementaries:ash_brick")
        .addWeightedLoot(
	[8, 16],
        [Item.of('minecraft:iron_nugget').withChance(8), Item.of('create:zinc_nugget').withChance(6), Item.of('create:copper_nugget').withChance(12), Item.of('thermal:tin_nugget').withChance(6), Item.of('thermal:lead_nugget').withChance(6), Item.of('thermal:nickel_nugget').withChance(6), Item.of('thermal:silver_nugget').withChance(3)]);

});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.015)
        .addWeightedLoot([1, 12], 'minecraft:lapis_lazuli');
});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.025)
        .addLoot('thermal:gold_coin');
});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.005)
        .addLoot('thermal:netherite_coin');
});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.1)
        .addLoot('mynethersdelight:hoglin_loin');
});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.025)
        .addLoot('farmersdelight:ham');
});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.075)
        .addLoot('mynethersdelight:ghasta');
});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.5)
        .addLoot('mynethersdelight:hoglin_loin');
});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.5)
        .addLoot('mynethersdelight:strider_slice');
});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.001)
        .addLoot('minecraft:diamond');
});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.0015)
        .addLoot('minecraft:emerald');
});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.005)
        .addLoot('reliquary:withered_rib');
});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.03)
        .addLoot('reliquary:molten_core');
});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.003)
        .addLoot('reliquary:zombie_heart');
});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.003)
        .addLoot('reliquary:catalyzing_gland');
});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.00003)
        .addLoot('kubejs:depressed_baby_ghast');
});

LootJS.modifiers((event) => {
	event.addLootTableModifier('minecraft:gameplay/piglin_bartering')
        .randomChance(0.00001)
        .addLoot('minecraft:wither_skeleton_skull');
});



LootJS.modifiers((event) => {
    event.addBlockLootModifier('minecraft:nether_gold_ore').replaceLoot('minecraft:gold_nugget', 'minecraft:raw_gold', true);
});