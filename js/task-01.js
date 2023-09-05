const categoriesList = document.querySelector(`#categories`);
const categoryItems = categoriesList.querySelectorAll(`li.item`);
const categoryCount = categoryItems.length;

console.log(`Number of categories: ${categoryCount}`);

categoryItems.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  const categoryCount = category.lastElementChild.children.length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryCount}`);
});
