const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const nameIngredients = document.querySelector("ul#ingredients");

let fragment = new DocumentFragment();

for (const value of ingredients) {
  const ingredientsEl = document.createElement("li");
  ingredientsEl.classList.add('item');
  ingredientsEl.textContent += value;
  fragment.appendChild(ingredientsEl);
}
document.querySelector("ul#ingredients").append(fragment);
