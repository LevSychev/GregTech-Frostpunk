ServerEvents.recipes((event) => {
  event.remove({ mod: "itemfilters" });
  event.remove({ output: "gtceu:liquid_fuel_jetpack" });
  event.remove({ output: "gtceu:electric_jetpack" });
  event.remove({ output: "gtceu:advanced_electric_jetpack" });
});
