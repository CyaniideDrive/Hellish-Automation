StartupEvents.registry('fluid', event => {  

event.create('liquid_rubber')
    .thickTexture(0x3d363c)
    .bucketColor(0x3d363c)
    .displayName('Liquid Rubber')

event.create('fruit_latex')
    .thinTexture(0xa9800b)
    .bucketColor(0xa9800b)
    .displayName('Fruity Latex')

  event.create('nicrosil')
    .displayName('Quartz Solder')
    .stillTexture('tconstruct:fluid/molten/compat_alloy/nicrosil/still')
    .flowingTexture('tconstruct:fluid/molten/compat_alloy/nicrosil/flowing')
    .bucketColor(0xddf1f1)

event.create('weak_netherite')
    .thickTexture(0x362223)
    .bucketColor(0x362223)
    .displayName('Molten Weak Netherite')

})