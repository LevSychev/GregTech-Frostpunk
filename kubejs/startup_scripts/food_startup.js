StartupEvents.registry("item", (event) => {
  event
    .create("sawdust_soup")
    .maxStackSize(16)
    .food((food) => {
      food.hunger(5);
    });
  event
    .create("uranium_soup")
    .maxStackSize(16)
    .food((food) => {
      food
        .hunger(1000000000)
        .saturation(1000000000)
        .effect("minecraft:instant_damage", 1, 10, 10);
    })
    .tooltip("Enough energy to feed you for the rest of your life!");
  event
    .create("buckwheat_porridge")
    .maxStackSize(16)
    .food((food) => {
      food
        .hunger(1000000000)
        .saturation(1000000000)
        .effect("minecraft:instant_damage", 1, 10, 10);
    });
});
