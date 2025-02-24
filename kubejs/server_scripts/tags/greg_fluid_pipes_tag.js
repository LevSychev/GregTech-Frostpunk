ServerEvents.tags("block", (event) => {
  const materials = [
    "aluminium",
    "chromium",
    "copper",
    "europium",
    "gold",
    "iridium",
    "lead",
    "titanium",
    "tungsten",
    "naquadah",
    "neutronium",
    "duranium",
    "bronze",
    "niobium_titanium",
    "stainless_steel",
    "steel",
    "tin_alloy",
    "tungsten_carbide",
    "polybenzimidazole",
    "polyethylene",
    "polytetrafluoroethylene",
    "wood",
    "treated_wood",
    "tungsten_steel",
    "vanadium_steel",
    "potin",
  ];

  materials.forEach((element) => {
    event.add("gtceu:fluid_pipes", `gtceu:${element}_tiny_fluid_pipe`);
    event.add("gtceu:fluid_pipes", `gtceu:${element}_small_fluid_pipe`);
    event.add("gtceu:fluid_pipes", `gtceu:${element}_normal_fluid_pipe`);
    event.add("gtceu:fluid_pipes", `gtceu:${element}_large_fluid_pipe`);
    event.add("gtceu:fluid_pipes", `gtceu:${element}_huge_fluid_pipe`);
    event.add("gtceu:fluid_pipes", `gtceu:${element}_quadruple_fluid_pipe`);
    event.add("gtceu:fluid_pipes", `gtceu:${element}_nonuple_fluid_pipe`);
  });
});
