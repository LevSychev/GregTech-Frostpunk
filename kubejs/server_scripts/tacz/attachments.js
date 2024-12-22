ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  //magazine upgrades
  greg
    .assembler("tacz-greg:extended_mag_pistol")
    .itemInputs("4x gtceu:steel_plate", "4x gtceu:iron_bolt")
    .itemOutputs(
      Item.of("tacz:attachment", '{AttachmentId:"tacz:light_extended_mag_3"}')
    )
    .duration(600)
    .EUt(24);
  greg
    .assembler("tacz-greg:extended_mag_rifle")
    .itemInputs("4x gtceu:stainless_steel_plate", "4x gtceu:iron_bolt")
    .itemOutputs(
      Item.of("tacz:attachment", '{AttachmentId:"tacz:extended_mag_3"}')
    )
    .duration(600)
    .EUt(120);
  greg
    .assembler("tacz-greg:extended_mag_sniper")
    .itemInputs("16x gtceu:black_steel_plate", "8x gtceu:iron_bolt")
    .itemOutputs(
      Item.of("tacz:attachment", '{AttachmentId:"tacz:sniper_extended_mag_3"}')
    )
    .duration(600)
    .EUt(120);

  //scopes
  greg
    .assembler("tacz-greg:scope_lpvo_1_6")
    .itemInputs("gtceu:steel_plate", "#forge:lenses/white")
    .itemOutputs(
      Item.of("tacz:attachment", '{AttachmentId:"tacz:scope_lpvo_1_6"}')
    )
    .duration(600)
    .EUt(24);

  //incendiary upgrade
  greg
    .assembler("tacz-greg:ammo_mod_incendiary")
    .itemInputs(
      "2x gtceu:aluminium_plate",
      "minecraft:blaze_powder",
      "4x gtceu:phosphorus_dust"
    )
    .itemOutputs(Item.of("tacz:attachment", '{AttachmentId:"tacz:ammo_mod_i"}'))
    .duration(600)
    .EUt(24);
});
