'use strict';

const credits = 23580;
const pricePerDroid = 3000;

const droidNum = prompt('Сколько дронов вы хотите купить');

if (droidNum === null) {
  console.log('Отмененно пользователем')
} else {
  const totalPrice = pricePerDroid * droidNum;
  console.log(totalPrice)

  if (totalPrice <= credits) {
    console.log(`Вы купили ${droidNum} дроидов, на счету осталось ${credits - totalPrice} кредитов.`)
  } else {
    console.log('Недостаточно кредитов на счету')
  }

}