const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const markup=[]
for (const ingredient of ingredients) {
  const ingredientsName = document.createElement("li");
  ingredientsName.classList.add("item");
  ingredientsName.textContent = ingredient;
  console.log(ingredientsName);
  markup.push(ingredientsName)
}
list.append(...markup);



