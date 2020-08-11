//массивы и псевдомассивы

"use strict"

const arr = [1, 2, 3, 6, 8];

// удаляет последний элемент массива и возвращает его
arr.pop();

// добавление нового элемента в конец массива
arr.push('was')

// удаление первого элемента массива (используется редко)
arr.shift();

// добавление нового элемента в начало массива
arr.unshift('asd');

// split() преварщает  строку в массив, s - разделитель
const str = 'Машина, Дом, Дерево';
const products = str.split(', ');

// метод join(), превращающий массив в строку, s - разделитель
const products2 = ['Машина', 'Дом', 'Дерево'];
const str2 = products2.join('; ');

// метод sort() -  сортировка посимвольная
const products3 = [3, 2, 1, 6];
products3.sort(compareNum);
console.log(products3);


function compareNum(a, b) {
  return a - b;
}


// циклы и методы перебора массива

for(let i = 0; i < arr.length; i++) {
  // console.log(arr[i]);
}

for(let value of arr) {
  // console.log(value);
}

arr.forEach(function(item, i, arr) {
  // console.log(`${i}: ${item} внутри массива ${arr}`);
})