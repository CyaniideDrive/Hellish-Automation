//Mushrooms as seeds for Apothecary

ServerEvents.tags('item', event => {
	event.add('botania:seed_apothecary_reagent', 'minecraft:brown_mushroom')
	event.add('botania:seed_apothecary_reagent', 'minecraft:red_mushroom')
	event.add('botania:seed_apothecary_reagent', 'minecraft:crimson_fungus')
	event.add('botania:seed_apothecary_reagent', 'minecraft:warped_fungus')
	

})

ServerEvents.recipes(event => {

//misc
event.replaceInput({ input: '#botania:floating_flowers' }, '#botania:floating_flowers', 'kubejs:content_baby_ghast')

//Apothecary
event.replaceInput({ output: 'botania:apothecary_deepslate' }, 'minecraft:cobbled_deepslate', 'minecraft:blackstone')

//Altar

event.replaceInput({ id: 'botania:runic_altar/water' }, 'minecraft:sugar_cane', '#kubejs:canes')

//event.recipes.botania.mana_infusion('output', 'input', mana, 'modifier')

event.recipes.botania.mana_infusion('botania:mana_pearl', 'netherdepthsupgrade:eyeball', 6000)
event.recipes.botania.mana_infusion('irons_spellbooks:arcane_ingot', 'supplementaries:ash_brick', 400)
event.recipes.botania.mana_infusion('irons_spellbooks:arcane_ingot', 'minecraft:nether_brick', 400)


//Fertilizer
event.remove({ output:'botania:fertilizer'})
event.shapeless(
  Item.of('botania:fertilizer', 1),
['4x #netherdepthsupgrade:nether_salad_foods',
    'minecraft:bone_meal']).id('kubejs:floral_fertilizer_manual_only')

event.recipes.create.mixing(
  '2x botania:fertilizer',
['4x #netherdepthsupgrade:nether_salad_foods',
'minecraft:bone_meal'])

//flowers
event.replaceInput({ output: 'botania:thermalily' }, 'botania:rune_fire', '#botania:petals/red')
event.replaceInput({ output: 'botania:thermalily' }, 'botania:rune_earth', 'minecraft:blaze_rod')

})