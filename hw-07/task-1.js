const categories = document.querySelectorAll('.item');
const numOfCategories = categories.length;
console.log(`В списке ${numOfCategories} категории.`);
console.log(categories);
categories.forEach(item =>
  console.log(
    `Категория: ${item.firstElementChild.textContent}, Количество элементов:${item.lastElementChild.children.length}`,
  ),
);