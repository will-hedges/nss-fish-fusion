const { mongerInventory } = require("./fishMonger.js");

/* 
  we want to build a menu (string)

  the chef should be able to specify a maximum price per fish for the day (arg for mongerInventory)
  
  and buy half of the monger's stock (should be 5 but don't hardcode)

  with each fish, create 3 different meals per fish
    1. fish soup
    2. fish sandwich
    3. grilled fish
  
  put out the menu for the day (wrapped in the appropriate tags)
*/

const fishMenu = (maxPricePerFish) => {
  const fishes = mongerInventory(maxPricePerFish);

  for (const fish of fishes) {
    fish.amount = fish.amount / 2;
  }

  const menuSections = [];

  for (const fish of fishes) {
    const menuSection = `\t<h2>${fish.species}</h2>
    <section class="menu__item">${fish.species} Soup</section>
    <section class="menu__item">${fish.species} Sandwich</section>
    <section class="menu__item">Grilled ${fish.species}</section>`;

    menuSections.push(menuSection);
  }

  const menuAsHTML = `<h1>Menu</h1>\n<article class="menu>\n${menuSections.join(
    "\n"
  )}\n</article>`;

  return menuAsHTML;
};

module.exports = { fishMenu };
