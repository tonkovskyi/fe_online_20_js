const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  
  const imageList = document.querySelector('#ingredients');
  
  const lists = [];
  
  const createLi = function(obj) {
    const list = document.createElement('li');
    const image = document.createElement('img');
    image.setAttribute('url', `${obj.url}`);
    image.setAttribute('alt', `${obj.alt}`);
    list.appendChild(image);
    lists.push(list);
    console.log(lists);
  };
  
  images.forEach(item => createLi(item));
  imageList.append(...lists);