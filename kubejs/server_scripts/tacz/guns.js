ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  greg
    .assembler("tacz-greg:glock17")
    .itemInputs("kubejs:pistol_base", "gtceu:iron_plate", "4x gtceu:iron_bolt")
    .itemOutputs(
      Item.of(
        "tacz:modern_kinetic_gun",
        '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:glock_17",HasBulletInBarrel:1b}'
      )
    )
    .duration(600)
    .EUt(24);

  greg
    .assembler("tacz-greg:ak47")
    .itemInputs(
      "kubejs:rifle_base",
      "2x gtceu:treated_wood_plate",
      "4x gtceu:steel_plate",
      "8x gtceu:steel_bolt"
    )
    .itemOutputs(
      Item.of(
        "tacz:modern_kinetic_gun",
        '{GunCurrentAmmoCount:0,GunFireMode:"AUTO",GunId:"tacz:ak47",HasBulletInBarrel:1b}'
      )
    )
    .duration(600)
    .EUt(24)
    .circuit(1);

  greg
    .assembler("tacz-greg:sks")
    .itemInputs(
      "kubejs:rifle_base",
      "2x gtceu:treated_wood_plate",
      "4x gtceu:steel_plate",
      "8x gtceu:steel_bolt"
    )
    .itemOutputs(
      Item.of(
        "tacz:modern_kinetic_gun",
        '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:sks_tactical",HasBulletInBarrel:1b}'
      )
    )
    .duration(600)
    .EUt(24)
    .circuit(2);

  greg
    .assembler("tacz-greg:M95")
    .itemInputs(
      "kubejs:rifle_base",
      "16x gtceu:black_steel_plate",
      "4x gtceu:stainless_steel_plate",
      "32x gtceu:steel_bolt"
    )
    .itemOutputs(
      Item.of(
        "tacz:modern_kinetic_gun",
        '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:m95",HasBulletInBarrel:1b}'
      )
    )
    .duration(600)
    .EUt(120);

  greg
    .assembler("tacz-greg:rpg")
    .itemInputs(
      "kubejs:rpg_base",
      "16x gtceu:black_steel_plate",
      "4x gtceu:treated_wood_plate",
      "4x gtceu:stainless_steel_plate",
      "8x gtceu:steel_bolt"
    )
    .itemOutputs(
      Item.of(
        "tacz:modern_kinetic_gun",
        '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"tacz:rpg7",HasBulletInBarrel:1b}'
      )
    )
    .duration(600)
    .EUt(120);
});
