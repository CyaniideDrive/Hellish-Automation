ServerEvents.recipes(event => {
event.replaceInput({ mod: 'sophisticatedstorage' }, 'minecraft:gold_ingot', 'tconstruct:cobalt_ingot')
event.replaceInput({ mod: 'sophisticatedbackpacks' }, 'minecraft:gold_ingot', 'tconstruct:cobalt_ingot')
event.replaceInput({ mod: 'sophisticatedstorage' }, 'minecraft:copper_ingot', 'minecraft:gold_ingot')
event.replaceInput({ mod: 'sophisticatedbackpacks' }, 'minecraft:copper_ingot', 'minecraft:gold_ingot')
event.replaceInput({ mod: 'sophisticatedstorage' }, 'minecraft:gold_block', 'tconstruct:cobalt_block')
event.replaceInput({ mod: 'sophisticatedbackpacks' }, 'minecraft:gold_block', 'tconstruct:cobalt_block')
event.replaceInput({ mod: 'sophisticatedstorage' }, 'minecraft:copper_block', 'minecraft:gold_block')
event.replaceInput({ mod: 'sophisticatedbackpacks' }, 'minecraft:copper_block', 'minecraft:gold_block')



	    event.remove({ input:'#forge:ingots/gold', output:'sophisticatedstorage:gold_barrel'})
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:gold_barrel"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/cobalt'},
                    "S": {"item": 'sophisticatedstorage:iron_barrel'}},
                "result": {
                    "item": 'sophisticatedstorage:gold_barrel'
                }})

	    event.remove({ input:'#forge:ingots/gold', output:'sophisticatedstorage:limited_gold_barrel_1'})
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:limited_gold_barrel_1"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/cobalt'},
                    "S": {"item": 'sophisticatedstorage:limited_iron_barrel_1'}},
                "result": {
                    "item": 'sophisticatedstorage:limited_gold_barrel_1'
                }})

	    event.remove({ input:'#forge:ingots/gold', output:'sophisticatedstorage:limited_gold_barrel_2'})
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:limited_gold_barrel_2"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/cobalt'},
                    "S": {"item": 'sophisticatedstorage:limited_iron_barrel_2'}},
                "result": {
                    "item": 'sophisticatedstorage:limited_gold_barrel_2'
                }})

	    event.remove({ input:'#forge:ingots/gold', output:'sophisticatedstorage:limited_gold_barrel_3'})
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:limited_gold_barrel_3"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/cobalt'},
                    "S": {"item": 'sophisticatedstorage:limited_iron_barrel_3'}},
                "result": {
                    "item": 'sophisticatedstorage:limited_gold_barrel_3'
                }})

	    event.remove({ input:'#forge:ingots/gold', output:'sophisticatedstorage:limited_gold_barrel_4'})
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:limited_gold_barrel_4"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/cobalt'},
                    "S": {"item": 'sophisticatedstorage:limited_iron_barrel_4'}},
                "result": {
                    "item": 'sophisticatedstorage:limited_gold_barrel_4'
                }})

	    event.remove({ input:'#forge:ingots/gold', output:'sophisticatedstorage:gold_shulker_box'})
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:gold_shulker_box"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/cobalt'},
                    "S": {"item": 'sophisticatedstorage:iron_shulker_box'}},
                "result": {
                    "item": 'sophisticatedstorage:gold_shulker_box'
                }})

	    event.remove({ input:'#forge:ingots/gold', output:'sophisticatedstorage:gold_chest'})
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:gold_chest"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/cobalt'},
                    "S": {"item": 'sophisticatedstorage:iron_chest'}},
                "result": {
                    "item": 'sophisticatedstorage:gold_chest'
                }})

            event.custom({
                "type": "sophisticatedstorage:double_chest_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:gold_chest"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CBC"],
                "key": {
                    "B": {"tag": 'forge:storage_blocks/cobalt'},
                    "C": {"tag": 'forge:ingots/cobalt'},
                    "S": {"item": 'sophisticatedstorage:iron_chest'}},
                "result": {
                    "item": 'sophisticatedstorage:gold_chest'
                }})

	    event.remove({ input:'#forge:ingots/gold', output:'sophisticatedbackpacks:gold_backpack'})
            event.custom({
                "type": "sophisticatedbackpacks:backpack_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedbackpacks:gold_backpack"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/cobalt'},
                    "S": {"item": 'sophisticatedbackpacks:iron_backpack'}},
                "result": {
                    "item": 'sophisticatedbackpacks:gold_backpack'
                }})








	    event.remove({ input:'#forge:ingots/copper', output:'sophisticatedstorage:copper_barrel'})
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:copper_barrel"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/gold'},
                    "S": {"item": 'sophisticatedstorage:barrel'}},
                "result": {
                    "item": 'sophisticatedstorage:copper_barrel'
                }})

	    event.remove({ input:'#forge:ingots/copper', output:'sophisticatedstorage:limited_copper_barrel_1'})
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:limited_copper_barrel_1"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/gold'},
                    "S": {"item": 'sophisticatedstorage:limited_barrel_1'}},
                "result": {
                    "item": 'sophisticatedstorage:limited_copper_barrel_1'
                }})

	    event.remove({ input:'#forge:ingots/copper', output:'sophisticatedstorage:limited_copper_barrel_2'})
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:limited_copper_barrel_2"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/gold'},
                    "S": {"item": 'sophisticatedstorage:limited_barrel_2'}},
                "result": {
                    "item": 'sophisticatedstorage:limited_copper_barrel_2'
                }})

	    event.remove({ input:'#forge:ingots/copper', output:'sophisticatedstorage:limited_copper_barrel_3'})
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:limited_copper_barrel_3"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/gold'},
                    "S": {"item": 'sophisticatedstorage:limited_barrel_3'}},
                "result": {
                    "item": 'sophisticatedstorage:limited_copper_barrel_3'
                }})

	    event.remove({ input:'#forge:ingots/copper', output:'sophisticatedstorage:limited_copper_barrel_4'})
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:limited_copper_barrel_4"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/gold'},
                    "S": {"item": 'sophisticatedstorage:limited_barrel_4'}},
                "result": {
                    "item": 'sophisticatedstorage:limited_copper_barrel_4'
                }})

	    event.remove({ input:'#forge:ingots/copper', output:'sophisticatedstorage:copper_shulker_box'})
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:copper_shulker_box"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/gold'},
                    "S": {"item": 'sophisticatedstorage:shulker_box'}},
                "result": {
                    "item": 'sophisticatedstorage:copper_shulker_box'
                }})

	    event.remove({ input:'#forge:ingots/copper', output:'sophisticatedstorage:copper_chest'})
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:copper_chest"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/gold'},
                    "S": {"item": 'sophisticatedstorage:chest'}},
                "result": {
                    "item": 'sophisticatedstorage:copper_chest'
                }})

            event.custom({
                "type": "sophisticatedstorage:double_chest_tier_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedstorage:copper_chest"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CBC"],
                "key": {
                    "B": {"tag": 'forge:storage_blocks/gold'},
                    "C": {"tag": 'forge:ingots/gold'},
                    "S": {"item": 'sophisticatedstorage:chest'}},
                "result": {
                    "item": 'sophisticatedstorage:copper_chest'
                }})

	    event.remove({ input:'#forge:ingots/copper', output:'sophisticatedbackpacks:copper_backpack'})
            event.custom({
                "type": "sophisticatedbackpacks:backpack_upgrade",
                "conditions": [{
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": "sophisticatedbackpacks:copper_backpack"}],
                "pattern": [
   		 "CCC",
   		 "CSC",
   		 "CCC"],
                "key": {
                    "C": {"tag": 'forge:ingots/gold'},
                    "S": {"item": 'sophisticatedbackpacks:backpack'}},
                "result": {
                    "item": 'sophisticatedbackpacks:copper_backpack'
                }})





})