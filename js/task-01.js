const ref = {
  itemsRef: document.querySelectorAll('.item'),
  titlesRef: document.querySelectorAll('h2'),
};

const numberOfCategories = ref.itemsRef.length;

console.log(`Number of categories: ${numberOfCategories}`);

ref.itemsRef.forEach((item, index) => {
  const category = ref.titlesRef[index].textContent;
  const numberOfElements = ref.itemsRef[index].querySelectorAll('li').length;

  console.log(`Category: ${category} \nElements: ${numberOfElements}`);
});
