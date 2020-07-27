const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  
  const mainUl = document.querySelector('#ingredients');
  
  const allLists = [];
  
  const createLi = function(string) {
    const list = document.createElement('li');
    list.textContent = string;
    allLists.push(list);
  };
  
  ingredients.forEach(item => createLi(item));
  mainUl.append(...allLists);