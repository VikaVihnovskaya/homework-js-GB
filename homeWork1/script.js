// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия,
// преобразовать значение в температуру по фаренгейту.
// Формула перевода градусов Цельсия в градусы Фаренгейта:
// градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фаренгейтах.

const tempCels = 22;
const tempFahr = (9 / 5) * tempCels + 32;
console.log(`Температура по Цельсию: ${tempCels}`);
console.log(`Температура по Фаренгейту: ${tempFahr}`);
