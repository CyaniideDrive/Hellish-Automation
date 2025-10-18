ServerEvents.recipes(event => {

	//misc

        event.remove({ id: 'create:filling/grass_block' })
	event.recipes.create.sequenced_assembly([
        'minecraft:grass_block'
    ],  'minecraft:dirt', [
		event.recipes.createDeploying('minecraft:dirt', ['minecraft:dirt', '#forge:seeds']),
	event.recipes.createPressing('minecraft:dirt', 'minecraft:dirt'),
		event.recipes.createDeploying('minecraft:dirt', ['minecraft:dirt', '#kubejs:fertile']),
		event.recipes.createFilling('minecraft:dirt', ['minecraft:dirt', Fluid.of('minecraft:water')])
    ]).transitionalItem('minecraft:dirt',).loops(4).id('real_dirt')

	//new age
	
        event.remove({ output: 'create_new_age:redstone_magnet' })
        event.remove({ output: 'create_new_age:layered_magnet' })
        event.remove({ output: 'create_new_age:fluxuated_magnetite' })
        event.remove({ output: 'create_new_age:netherite_magnet' })


	event.recipes.createSequencedAssembly([
	Item.of('create_new_age:redstone_magnet', 1)],
            'create_new_age:magnetite_block', [
	event.recipes.createDeploying('kubejs:incomplete_redstone_magnet', ['kubejs:incomplete_redstone_magnet', 'minecraft:redstone']),
	event.recipes.createDeploying('kubejs:incomplete_redstone_magnet', ['kubejs:incomplete_redstone_magnet', 'minecraft:redstone']),
	event.recipes.createPressing('kubejs:incomplete_redstone_magnet', 'kubejs:incomplete_redstone_magnet')
	]).transitionalItem('kubejs:incomplete_redstone_magnet').loops(2).id('redstone_magnet_upgrade')


	event.recipes.create.sequenced_assembly([
        'create_new_age:layered_magnet'
    ],  'create_new_age:redstone_magnet', [
		event.recipes.createDeploying('kubejs:incomplete_layered_magnet', ['kubejs:incomplete_layered_magnet', 'create_new_age:overcharged_iron_sheet']),
		event.recipes.createDeploying('kubejs:incomplete_layered_magnet', ['kubejs:incomplete_layered_magnet', 'create_new_age:overcharged_golden_sheet']),
		event.recipes.createPressing('kubejs:incomplete_layered_magnet', 'kubejs:incomplete_layered_magnet')
    ]).transitionalItem('kubejs:incomplete_layered_magnet',).loops(2).id('layered_magnet_upgrade')

	event.recipes.create.sequenced_assembly([
        'create_new_age:fluxuated_magnetite'
    ],  'create_new_age:layered_magnet', [
		event.recipes.createDeploying('kubejs:incomplete_fluxuated_magnetite', ['kubejs:incomplete_fluxuated_magnetite', 'create_new_age:overcharged_diamond']),
		event.recipes.createPressing('kubejs:incomplete_fluxuated_magnetite', 'kubejs:incomplete_fluxuated_magnetite'),
		event.recipes.createPressing('kubejs:incomplete_fluxuated_magnetite', 'kubejs:incomplete_fluxuated_magnetite')
    ]).transitionalItem('kubejs:incomplete_fluxuated_magnetite',).loops(2).id('fluxuated_magnetite_upgrade')

	event.recipes.create.sequenced_assembly([
        'create_new_age:netherite_magnet'
    ],  'create_new_age:fluxuated_magnetite', [
		event.recipes.createDeploying('kubejs:incomplete_netherite_magnet', ['kubejs:incomplete_netherite_magnet', 'minecraft:netherite_scrap']),
		event.recipes.createPressing('kubejs:incomplete_netherite_magnet', 'kubejs:incomplete_netherite_magnet'),
		event.recipes.createPressing('kubejs:incomplete_netherite_magnet', 'kubejs:incomplete_netherite_magnet'),
		event.recipes.createPressing('kubejs:incomplete_netherite_magnet', 'kubejs:incomplete_netherite_magnet'),
		event.recipes.createPressing('kubejs:incomplete_netherite_magnet', 'kubejs:incomplete_netherite_magnet')
    ]).transitionalItem('kubejs:incomplete_netherite_magnet',).loops(2).id('netherite_magnet_upgrade')

	//Power Connectors

        event.remove({ id: 'createaddition:crafting/small_connector_copper' })
        event.remove({ id: 'createaddition:crafting/large_connector_gold' })
        event.remove({ id: 'createaddition:crafting/large_connector_electrum' })
        event.recipes.createSequencedAssembly(
            [Item.of('createaddition:connector', 4)],
            'create:andesite_alloy',
            [
                event.recipes.create.deploying('kubejs:incomplete_connector', ['kubejs:incomplete_connector', '#forge:rods/copper']),
                event.recipes.create.deploying('kubejs:incomplete_connector', ['kubejs:incomplete_connector', 'create:andesite_alloy']),
                event.recipes.create.pressing('kubejs:incomplete_connector', 'kubejs:incomplete_connector')
            ]
        ).transitionalItem('kubejs:incomplete_connector').loops(1).id('small_connectors')

        event.recipes.createSequencedAssembly(
            [Item.of('createaddition:large_connector', 4)],
            'create:andesite_alloy',
            [
                event.recipes.create.deploying('kubejs:incomplete_connector', ['kubejs:incomplete_connector', '#forge:rods/electrum']),
                event.recipes.create.deploying('kubejs:incomplete_connector', ['kubejs:incomplete_connector', 'create:andesite_alloy']),
                event.recipes.create.pressing('kubejs:incomplete_connector', 'kubejs:incomplete_connector'),
                event.recipes.create.deploying('kubejs:incomplete_connector', ['kubejs:incomplete_connector', 'create:andesite_alloy']),
                event.recipes.create.pressing('kubejs:incomplete_connector', 'kubejs:incomplete_connector')
            ]
        ).transitionalItem('kubejs:incomplete_large_connector').loops(1).id('large_connectors')


//Progression


    event.remove({ output:'thermal:signalum_gear'})

	event.recipes.create.sequenced_assembly([
        'thermal:signalum_gear'
    ],  'thermal:quartz_gear', [
		event.recipes.createFilling('kubejs:incomplete_molten_gear', ['kubejs:incomplete_molten_gear', Fluid.of('minecraft:lava', 100)]),
		event.recipes.createFilling('kubejs:incomplete_molten_gear', ['kubejs:incomplete_molten_gear', Fluid.of('tconstruct:blazing_blood', 5)])
    ]).transitionalItem('kubejs:incomplete_molten_gear',).loops(4).id('molten_gear')




	event.recipes.create.sequenced_assembly([
        'kubejs:brass_frame'
    ],  '#forge:rods/brass', [
		event.recipes.createFilling('kubejs:incomplete_brass_frame', ['kubejs:incomplete_brass_frame', Fluid.of('tconstruct:molten_brass', 10)]),
		event.recipes.createDeploying('kubejs:incomplete_brass_frame', ['kubejs:incomplete_brass_frame', '#forge:rods/brass']),
		event.recipes.createPressing('kubejs:incomplete_brass_frame', 'kubejs:incomplete_brass_frame')
    ]).transitionalItem('kubejs:incomplete_brass_frame',).loops(3).id('brass_frame')


	event.recipes.create.sequenced_assembly([
        'minecraft:end_portal_frame'
    ],  'create:brass_casing', [
		event.recipes.createFilling('kubejs:incomplete_end_portal_frame', ['kubejs:incomplete_end_portal_frame', Fluid.of('tconstruct:molten_enderium', 180)]),
		event.recipes.createDeploying('kubejs:incomplete_end_portal_frame', ['kubejs:incomplete_end_portal_frame', '#forge:plates/netherite']),
		event.recipes.createPressing('kubejs:incomplete_end_portal_frame', 'kubejs:incomplete_end_portal_frame')
    ]).transitionalItem('kubejs:incomplete_end_portal_frame',).loops(1).id('portal_frame')


	event.recipes.create.sequenced_assembly([
        'kubejs:forgeslime_gear'
    ],  'kubejs:incomplete_slime_gear_1', [
		event.recipes.createPressing('kubejs:incomplete_slime_gear_2', 'kubejs:incomplete_slime_gear_2')
    ]).transitionalItem('kubejs:incomplete_slime_gear_2',).loops(16).id('forgeslime_gear')


	event.recipes.create.sequenced_assembly([
        'kubejs:netherite_frame'
    ],  '#forge:rods/netherite', [
		event.recipes.createFilling('kubejs:incomplete_netherite_frame', ['kubejs:incomplete_netherite_frame', Fluid.of('tconstruct:molten_steel', 10)]),
		event.recipes.createDeploying('kubejs:incomplete_netherite_frame', ['kubejs:incomplete_netherite_frame', '#forge:rods/netherite']),
		event.recipes.createPressing('kubejs:incomplete_netherite_frame', 'kubejs:incomplete_netherite_frame')
    ]).transitionalItem('kubejs:incomplete_netherite_frame',).loops(3).id('netherite_frame')


    event.remove({ output:'create:sturdy_sheet'})
	event.recipes.create.sequenced_assembly([
        'create:sturdy_sheet'
    ],  '#forge:plates/lead', [
		event.recipes.createFilling('create:unprocessed_obsidian_sheet', ['create:unprocessed_obsidian_sheet', Fluid.of('tconstruct:blazing_blood', 50)]),
		event.recipes.createPressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
		event.recipes.createPressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
		event.recipes.createPressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet'),
		event.recipes.createPressing('create:unprocessed_obsidian_sheet', 'create:unprocessed_obsidian_sheet')
    ]).transitionalItem('create:unprocessed_obsidian_sheet',).loops(4).id('sturdy_sheet')





    event.remove({ output:'thermal:lead_gear'})
	event.recipes.create.sequenced_assembly([
        'thermal:lead_gear'
    ],  'thermal:constantan_gear', [
		event.recipes.createFilling('kubejs:incomplete_sturdy_gear', ['kubejs:incomplete_sturdy_gear', Fluid.of('kubejs:nicrosil', 45)]),
		event.recipes.createDeploying('kubejs:incomplete_sturdy_gear', ['kubejs:incomplete_sturdy_gear', 'create:sturdy_sheet']),
		event.recipes.createDeploying('kubejs:incomplete_sturdy_gear', ['kubejs:incomplete_sturdy_gear', 'thermal:press_gear_die']).keepHeldItem()
    ]).transitionalItem('kubejs:incomplete_sturdy_gear',).loops(2).id('sturdy_gear')


    event.remove({ output:'thermal:sapphire_gear'})
	event.recipes.create.sequenced_assembly([
        'thermal:sapphire_gear'
    ],  'thermal:constantan_gear', [
		event.recipes.createFilling('kubejs:incomplete_overcharged_gear', ['kubejs:incomplete_overcharged_gear', Fluid.of('thermal:redstone', 100)]),
		event.custom({"type": 'create_new_age:energising',
		"energy_needed": 5000,
		"ingredients": [{"item": 'kubejs:incomplete_overcharged_gear'}],
		"results": [{"item": 'kubejs:incomplete_overcharged_gear'}]})
		]).transitionalItem('kubejs:incomplete_overcharged_gear').loops(4).id('overcharged_gear')


	event.recipes.create.sequenced_assembly([
        'create:transmitter'
    ],  '#forge:plates/copper', [
		event.recipes.createDeploying('kubejs:incomplete_transmitter', ['kubejs:incomplete_transmitter', '#forge:rods/copper']),
		event.recipes.createDeploying('kubejs:incomplete_transmitter', ['kubejs:incomplete_transmitter', 'minecraft:redstone'])
    ]).transitionalItem('kubejs:incomplete_transmitter',).loops(1).id('efficient_transmitter')





	event.recipes.create.sequenced_assembly([
        'artifacts:mimic_spawn_egg'
    ],  'kubejs:empty_mimic', [
		event.recipes.createFilling('kubejs:empty_mimic', ['kubejs:empty_mimic', Fluid.of('tconstruct:liquid_soul')]),
		event.recipes.createDeploying('kubejs:empty_mimic', ['kubejs:empty_mimic', 'quark:soul_bead'])
    ]).transitionalItem('kubejs:empty_mimic',).loops(4).id('mimic_egg')





    event.remove({ id:'minecraft:netherite_upgrade_smithing_template'})
    event.remove({ id:'tconstruct:smeltery/casting/diamond/smithing_template'})
    event.recipes.create.sequenced_assembly([
        Item.of('minecraft:netherite_upgrade_smithing_template', 2)],
       'minecraft:netherite_upgrade_smithing_template', [
        event.recipes.createDeploying('kubejs:incomplete_netherite_smithing_template', ['kubejs:incomplete_netherite_smithing_template', 'minecraft:netherrack']),
        event.recipes.createPressing('kubejs:incomplete_netherite_smithing_template', 'kubejs:incomplete_netherite_smithing_template'),
	event.recipes.createFilling('kubejs:incomplete_end_portal_frame', ['kubejs:incomplete_end_portal_frame', Fluid.of('tconstruct:molten_diamond', 400)])
    ]).transitionalItem('kubejs:incomplete_netherite_smithing_template').loops(1).id('smithing_template_from_template')





    event.recipes.create.sequenced_assembly([
        'minecraft:netherite_upgrade_smithing_template',
    ], 'minecraft:netherrack', [
        event.recipes.createPressing('kubejs:incomplete_netherite_smithing_template', 'kubejs:incomplete_netherite_smithing_template'),
	event.recipes.createFilling('kubejs:incomplete_end_portal_frame', ['kubejs:incomplete_end_portal_frame', Fluid.of('tconstruct:molten_diamond', 800)])
    ]).transitionalItem('kubejs:incomplete_netherite_smithing_template').loops(4).id('smithing_template_from_scratch')


})