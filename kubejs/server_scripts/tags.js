ServerEvents.tags("fluid", (event) => {
  console.log("Hello! The fluid tags event has fired!");

  event.add("create:bottomless/allow", "mob_grinding_utils:fluid_xp");
});

ServerEvents.tags("item", (event) => {
  console.log("Hello! The item tags event has fired!");

  [
    "minecraft:netherite_shovel",
    "minecraft:netherite_pickaxe",
    "minecraft:netherite_axe",
    "minecraft:netherite_hoe",
    "minecraft:netherite_sword",
    "minecraft:netherite_helmet",
    "minecraft:netherite_chestplate",
    "minecraft:netherite_leggings",
    "minecraft:netherite_boots",
  ].forEach((item) => {
    event.add("kitambi:netherite_gear", item);
  });

  [
    "minecraft:diamond_shovel",
    "minecraft:diamond_pickaxe",
    "minecraft:diamond_axe",
    "minecraft:diamond_hoe",
    "minecraft:diamond_sword",
    "minecraft:diamond_helmet",
    "minecraft:diamond_chestplate",
    "minecraft:diamond_leggings",
    "minecraft:diamond_boots",
  ].forEach((item) => {
    event.add("kitambi:diamond_gear", item);
  });

  [
    "minecraft:gold_shovel",
    "minecraft:gold_pickaxe",
    "minecraft:gold_axe",
    "minecraft:gold_hoe",
    "minecraft:gold_sword",
    "minecraft:gold_helmet",
    "minecraft:gold_chestplate",
    "minecraft:gold_leggings",
    "minecraft:gold_boots",
  ].forEach((item) => {
    event.add("kitambi:gold_gear", item);
  });

  [
    "minecraft:iron_shovel",
    "minecraft:iron_pickaxe",
    "minecraft:iron_axe",
    "minecraft:iron_hoe",
    "minecraft:iron_sword",
    "minecraft:iron_helmet",
    "minecraft:iron_chestplate",
    "minecraft:iron_leggings",
    "minecraft:iron_boots",
  ].forEach((item) => {
    event.add("kitambi:iron_gear", item);
  });
});
