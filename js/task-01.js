const ref = {
  itemsRef: document.querySelectorAll(".item"),
};

const numberOfCategories = ref.itemsRef.length;

console.log(`Number of categories: ${numberOfCategories}`);

ref.itemsRef.forEach((item) => {
  const category = item.querySelector("h2").textContent;
  const numberOfElements = item.querySelectorAll("li").length;

  console.log(`Category: ${category} \nElements: ${numberOfElements}`);
});
