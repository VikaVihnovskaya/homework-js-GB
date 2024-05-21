//Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат
// 2^3 степени + 3 ^ 3 степени
//
const power = (num) => num ** 3;
console.log(power(2));
console.log(power(3));

console.log(`Результат: ${power(2) + power(3)}`);

//Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы
// за вычетом налогов равен значение"

const salaryAfterTax = (userSalary) => userSalary - userSalary * 0.13;
let userSalary = +prompt('Введите число');

if (isNaN(userSalary) === false) {
  console.log(`Размер заработной платы за вычетом налогов равен ${salaryAfterTax(userSalary)}.` );
} else console.log("Вы ввели неверное значение. Попробуйте еще раз.");

//Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное
// значение среди этих чисел

let firstNumber = +prompt('Введите первое число');
let secondNumber = +prompt('Введите второе число')
let thirdNumber = +prompt('Введите третье число')

function getMaxNumber(firstNumber, secondNumber, thirdNumber) {
  return Math.max(firstNumber, secondNumber, thirdNumber);
}

console.log(getMaxNumber(firstNumber, secondNumber, thirdNumber));