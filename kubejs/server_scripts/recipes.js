ServerEvents.recipes((event) => {
  console.log("Hello! The recipes event has fired!");

  event.shaped(
    Item.of("minecraft:elytra", 2), // arg 1: output
    ["NEN", "PNP", "DTD"],
    {
      N: "minecraft:netherite_ingot",
      E: "minecraft:elytra",
      P: "minecraft:phantom_membrane",
      D: "minecraft:dragon_breath",
      T: "minecraft:totem_of_undying",
    }
  );

  // Create crushing recipes
  event.custom({
    type: "create:crushing",
    ingredients: [{ tag: "kitambi:netherite_gear" }],
    processingTime: 400,
    results: [
      { item: "minecraft:netherite_ingot" },
      { item: "minecraft:diamond", chance: 0.65 },
    ],
  });

  event.custom({
    type: "create:crushing",
    ingredients: [{ tag: "kitambi:diamond_gear" }],
    processingTime: 400,
    results: [{ item: "minecraft:diamond" }],
  });

  event.custom({
    type: "create:crushing",
    ingredients: [{ tag: "kitambi:gold_gear" }],
    processingTime: 400,
    results: [{ item: "minecraft:gold_ingot" }],
  });

  event.custom({
    type: "create:crushing",
    ingredients: [{ tag: "kitambi:iron_gear" }],
    processingTime: 400,
    results: [{ item: "minecraft:iron_ingot" }],
  });
});
