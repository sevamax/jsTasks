"use strict"

// Передача по ссылке или по значению
// Spread оператор (ES6-ES9)



let obj = {
  b: 4,
  c: 1,
  d: {
    a: 1,
    ly: 10
  }
};

// Первый способ поверхостное копирование объекта (перебор циклом for in)

function copy(mainObject) {
  let newObject = {};
  for(let key in mainObject) {
    newObject[key] = mainObject[key];
  }
  return newObject;
}
const newObject = copy(obj);

// Второе способ поверхостного копирования объекта (Object.assign())

const add = {
  x: 3,
  o: 5
};
const copyObj = Object.assign({}, obj); // Клонирование объекта
Object.assign(obj, add); // Склеяйка объектов в один


// ...Spread

const video = ['youtube', 'rutube', 'vimeo'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'fb']; // Вытаскиваем все элементы переменных через ...


const a = {
  0: 1,
  1: '241',
  2: 'asd'
};
const b = {...a};
