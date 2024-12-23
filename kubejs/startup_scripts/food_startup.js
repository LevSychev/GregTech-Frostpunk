StartupEvents.registry("item", (event) => {
  event
    .create("sawdust_soup")
    .maxStackSize(16)
    .food((food) => {
      food.hunger(5);
    });
});
