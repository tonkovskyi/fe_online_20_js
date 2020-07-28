const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Cats',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Koi Fish',
    },
    {
      url:'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Horses',
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