ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  event.remove({ output: "cold_sweat:thermometer" });
  event.remove({ output: "cold_sweat:boiler" });
  event.remove({ output: "cold_sweat:hearth" });

  greg
    .assembler("greg-coldsweat:thermometer")
    .itemInputs("gtceu:glass_vial")
    .inputFluids(Fluid.of("gtceu:mercury", 250))
    .itemOutputs("cold_sweat:thermometer")
    .duration(200)
    .EUt(30);

  event.shaped(Item.of("cold_sweat:boiler"), [" R ", "RBR", "BBB"], {
    R: "gtceu:double_iron_plate",
    W: "minecraft:furnace",
    B: "minecraft:bricks",
  });

  //event.shaped(Item.of("cold_sweat:hearth"), ["RWR", "RAR", "BBB"], {
  //  R: "gtceu:steel_plate",
  //  W: "minecraft:furnace",
  //  A: "gtceu:lv_machine_hull",
  //  B: "minecraft:bricks",
  //});
});
