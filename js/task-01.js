const listCategory = document.querySelector("#categories");
console.log(listCategory)
const listCategoryAll = listCategory.querySelectorAll(".item")
console.log(`Number of categories: ${listCategoryAll.length}`);
listCategoryAll.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`)
});