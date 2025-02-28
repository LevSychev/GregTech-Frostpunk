GTCEuStartupEvents.registry("gtceu:recipe_type", (event) => {
  event
    .create("heating_machines")
    .category("test")
    .setEUIO("in")
    .setMaxIOSize(1, 0, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.BOX_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_BATH, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.COOLING);
});
