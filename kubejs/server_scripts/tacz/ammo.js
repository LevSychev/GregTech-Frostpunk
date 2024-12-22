ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  greg
    .assembler("tacz-greg:ammo_9mm")
    .itemInputs("10x gtceu:copper_plate", "2x minecraft:gunpowder")
    .itemOutputs(Item.of("tacz:ammo", 60, '{AmmoId:"tacz:9mm"}'))
    .duration(100)
    .EUt(24);

  greg
    .assembler("tacz-greg:ammo_762x39")
    .itemInputs("15x gtceu:copper_plate", "3x minecraft:gunpowder")
    .itemOutputs(Item.of("tacz:ammo", 45, '{AmmoId:"tacz:762x39"}'))
    .duration(100)
    .EUt(24);

  greg
    .assembler("tacz-greg:ammo_50bmg")
    .itemInputs(
      "64x gtceu:copper_plate",
      "24x minecraft:gunpowder",
      "16x gtceu:iron_plate",
      "4x minecraft:blaze_powder"
    )
    .itemOutputs(Item.of("tacz:ammo", 24, '{AmmoId:"tacz:50bmg"}'))
    .duration(100)
    .EUt(24);

  greg
    .assembler("tacz-greg:ammo_rpg_rocket")
    .itemInputs("6x gtceu:iron_plate", "12x minecraft:gunpowder")
    .itemOutputs(Item.of("tacz:ammo", 3, '{AmmoId:"tacz:rpg_rocket"}'))
    .duration(100)
    .EUt(24);
});
