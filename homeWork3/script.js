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
// Вариант стрелочной
//const getMaxNumber = (firstNumber, secondNumber, thirdNumber) => Math.max(firstNumber, secondNumber, thirdNumber);
console.log(getMaxNumber(firstNumber, secondNumber, thirdNumber));

//Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций
// (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6));
// должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться).
//Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна
// вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа,
// проверки на NaN, Infinity делать не нужно.

const sumNumb = (num1, num2) => num1 + num2;
function diffNumb (num1, num2) {
  if (num1 > num2){
    return num1 - num2;
  }
  else if (num1 < num2){
    return num2 - num1;
}
  else {
    return 0;
  }
}
const multNumb = (num1, num2) => num1 * num2;
const divNumb = (num1, num2) => num1 / num2;

console.log(sumNumb(2,6));
console.log(diffNumb(2,6));
console.log(diffNumb(2,2));
console.log(multNumb(2,6));
console.log(divNumb(2,6));