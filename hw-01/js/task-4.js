let credits = 23580; 
const pricePerDroid = 3000;
let message;

let userInput = prompt('Please enter the number of drones');
let totalPrice = userInput * pricePerDroid;
let change = credits - totalPrice;

if (userInput == null){
    console.log('Отменено пользователем!');
    message ='Отменено пользователем!';
}
else if (totalPrice <= credits){
    console.log(`Вы купили ${userInput} дроидов, на счету осталось ${change} кредитов.`)
    message =`Вы купили ${userInput} дроидов, на счету осталось ${change} кредитов.`;
}
else {(totalPrice > credits)
    console.log(`Недостаточно средств на счету!`)
    message =`Недостаточно средств на счету!`;
}
alert(message);