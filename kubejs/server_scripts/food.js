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
});
