const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ref = {
  ingredientsListRef: document.querySelector('#ingredients'),
};

const createElements = ingredients => {
  return ingredients.map(element => {
    const elementref = document.createElement('li');
    elementref.textContent = `${element}`;
    elementref.classList.add('item');

    return elementref;
  });
};

const cardProduct = createElements(ingredients);

ref.ingredientsListRef.append(...cardProduct);
