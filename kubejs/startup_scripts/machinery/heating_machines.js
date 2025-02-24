GTCEuStartupEvents.registry("gtceu:machine", (event) => {
  event
    .create(
      "electric_heater",
      "simple"
    )
    .tiers(GTValues.LV, GTValues.MV, GTValues.HV)
    .definition((tier, builder)=>
        builder
            .langValue(GTValues.VLVH[tier] + " Electric heater")
            .recipeType("heating_machines")
        )
});
