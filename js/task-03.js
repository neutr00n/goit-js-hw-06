const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ref = {
  listRef: document.querySelector('.gallery'),
};

const createNewGalleryElements = elements => {
  return elements
    .map(element => {
      return `<li><img src="${element.url}" alt="${element.alt}" width="300px;" height="200px;"></li>`;
    })
    .join('');
};

ref.listRef.innerHTML = createNewGalleryElements(images);

ref.listRef.style.listStyle = 'none';
ref.listRef.style.display = 'Flex';
ref.listRef.style.gap = '30px';
