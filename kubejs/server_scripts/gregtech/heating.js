ServerEvents.recipes((event) => {
  const greg = event.recipes.gtceu;

  greg.heating_machines("heat_from_energy").EUt(16).duration(20).circuit(1);
});
