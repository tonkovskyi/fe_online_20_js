let userInput = prompt("Выберите страну доставки...");
const normalizedInput = userInput.toLowerCase();
let price;
let name;
let message = (price, name) => `Доставка в ${name} будет стоить ${price} кредитов`;

switch (normalizedInput)
 {
  
  case 'китай':
    name = 'Китай';
    price = 100;
    break;

  case 'чили':
    name = 'Чили';
    price = 250;
    break;

  case 'австралия':
    name = 'Австралия';
    price = 170;
    break;

  case 'индия':
    name = 'Индия';
    price = 80;
    break;

  case 'ямайка':
    name = 'Ямайка';
    price = 120;
    break;

  default:
    alert( 'В вашей стране доставка не доступна' );
}
alert(message(price, name));