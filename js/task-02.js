const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById(`ingredients`);

const elements = ingredients.map((ingredient) => {
  const li = document.createElement(`li`);
  li.textContent = ingredient;
  li.classList.add("item");
  return li;
});

ul.append(...elements);
