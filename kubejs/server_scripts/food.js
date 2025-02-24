ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  event.shapeless("minecraft:bread", [
    "minecraft:wheat",
    "minecraft:wheat",
    "gtceu:wood_dust",
  ]);

  event.shapeless("kubejs:sawdust_soup", [
    "minecraft:bowl",
    "minecraft:rotten_flesh",
    "gtceu:wood_dust",
  ]);

  greg
    .mixer("uranium_soup")
    .itemInputs(
      "gtceu:uranium_235_dust",
      "gtceu:salt_dust",
      "minecraft:potato",
      "gtceu:diethylenetriaminepentaacetic_acid_dust"
    )
    .inputFluids(Fluid.of("minecraft:water", 500))
    .itemOutputs("kubejs:uranium_soup")
    .EUt(1920)
    .duration(200);

  greg
    .mixer("buckwheat_porridge")
    .itemInputs(
      "farmersdelight:rice",
      "gtceu:rare_earth_dust",
      "gtceu:osmiridium_dust",
      "gtceu:ruthenium_dust",
      "gtceu:titanium_dust",
      "gtceu:platinum_dust"
    )
    .inputFluids(Fluid.of("minecraft:water", 100))
    .itemOutputs("kubejs:buckwheat_porridge")
    .EUt(1920)
    .duration(200);
});
