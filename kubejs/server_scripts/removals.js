ServerEvents.recipes((event) => {
  event.remove({ mod: "itemfilters" });
  event.remove({ output: "gtceu:liquid_fuel_jetpack" });
  event.remove({ output: "gtceu:electric_jetpack" });
  event.remove({ output: "gtceu:advanced_electric_jetpack" });
  event.remove({ output: "#minecraft:boats" });
  event.remove({ output: "gtceu:rubber_boat" });
  event.remove({ type: "gtceu:assembler", output: "gtceu:rubber_boat" });
  event.remove({ output: "gtceu:treated_wood_boat" });
  event.remove({ type: "gtceu:assembler", output: "gtceu:treated_wood_boat" });
});
