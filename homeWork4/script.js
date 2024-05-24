//Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
  if (i === 0) {
    console.log(`${i} - это ноль`);
  } else if (i % 2 === 0) {
    console.log(`${i} - четное число`);
  } else {
    console.log(`${i} - нечетное число`);
  }
}

//Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr)
arr.splice(3, 2);
console.log(arr);

//Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function createRandomArray(min, max, countElem) {
  const array = [];
  for (let i = 0; i < countElem; i++) {
    array.push(Math.floor(Math.random() * (max - min) + min));
  }
  return array;
}

const newArr = createRandomArray(0,9,5);
console.log(newArr);

const sumArrayElements = (array) => array.reduce((acc, sum) => acc + sum);
console.log(`Сумма элементов массива - ${sumArrayElements(newArr)}.`);

const MinValue = Math.min.apply(null, newArr);
console.log(`Минимальный элемент в массиве - ${MinValue}`);

const findElem = newArr.includes(3);
console.log(`Проверка на наличие числа 3 в массиве - ${findElem}`);

