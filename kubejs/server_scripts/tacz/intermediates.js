ServerEvents.recipes((event) => {
  event.shaped(Item.of("kubejs:pistol_base", 1), ["BBB", "PGP", "PSP"], {
    B: "gtceu:iron_bolt",
    P: "gtceu:iron_plate",
    G: "gtceu:small_iron_gear",
    S: "gtceu:small_iron_spring",
  });
  event.shaped(Item.of("kubejs:rifle_base", 1), ["BBB", "PGP", "PSP"], {
    B: "gtceu:steel_bolt",
    P: "gtceu:steel_plate",
    G: "gtceu:small_steel_gear",
    S: "gtceu:steel_spring",
  });
  event.shaped(Item.of("kubejs:rpg_base", 1), ["BBB", "PGP", "PSP"], {
    B: "gtceu:stainless_steel_bolt",
    P: "gtceu:double_stainless_steel_plate",
    G: "gtceu:stainless_steel_gear",
    S: "gtceu:long_stainless_steel_rod",
  });
});
