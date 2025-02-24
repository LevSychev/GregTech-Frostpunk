ServerEvents.recipes((event) => {
  event.shaped("gtceu:construction_core", ["PRP", "CHC", "MCM"], {
    M: "gtceu:lv_electric_motor",
    C: "#gtceu:circuits/lv",
    H: "gtceu:lv_machine_hull",
    P: "gtceu:manganese_phosphide_single_wire",
    R: "gtceu:lv_robot_arm",
  });

  event.shaped("gtceu:greenhouse", ["GGG", "CHC", "PUP"], {
    G: "gtceu:tempered_glass",
    C: "#gtceu:circuits/mv",
    H: "gtceu:mv_machine_hull",
    P: "gtceu:mv_electric_piston",
    U: "gtceu:mv_electric_pump",
  });

  event.shaped("gtceu:lv_electric_heater", [" G ", "PHP", "UCU"], {
    G: "gtceu:tin_rotor",
    C: "#gtceu:circuits/lv",
    H: "gtceu:lv_machine_hull",
    P: "gtceu:copper_spring",
    U: "gtceu:tin_single_cable",
  });
  event.shaped("gtceu:mv_electric_heater", [" G ", "PHP", "UCU"], {
    G: "gtceu:bronze_rotor",
    C: "#gtceu:circuits/mv",
    H: "gtceu:mv_machine_hull",
    P: "gtceu:cupronickel_spring",
    U: "gtceu:copper_single_cable",
  });
  event.shaped("gtceu:hv_electric_heater", [" G ", "PHP", "UCU"], {
    G: "gtceu:steel_rotor",
    C: "#gtceu:circuits/hv",
    H: "gtceu:hv_machine_hull",
    P: "gtceu:kanthal_spring",
    U: "gtceu:gold_single_cable",
  });
});
