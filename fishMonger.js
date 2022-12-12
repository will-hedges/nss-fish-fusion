const { boatInventory } = require("./fishingBoat.js");

/*
  we want to build up a fish monger's inventory

  Go through the fishing boat's inventory

  Look for fishes that cost less than $7.50
  Of these fishes, we want to buy 10 at a time to add to the monger's inventory
  But if we can't buy 10, don't buy any

  let a chef tell the fish monger their max. price per fish
  but it would still have to be less than $7.50

  at the end, we want the fish monger to have a qty 10 of any fish they buy

  make this inventory available to restaurant chefs
  */

const mongerInventory = (maxPrice = 7.5) => {
  if (maxPrice > 7.5) {
    maxPrice = 7.5;
  }

  const purchasedFish = [];
  const freshCatchOfTheDay = boatInventory();

  for (const fish of freshCatchOfTheDay) {
    if (fish.price <= maxPrice && fish.amount >= 10) {
      fish.amount = 10;
      purchasedFish.push(fish);
    }
  }

  return purchasedFish;
};

module.exports = { mongerInventory };
