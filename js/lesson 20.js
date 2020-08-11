"use strict"

const options =  {
  name: 'test',
  width: 1024,
  height: 1024,
  colors: {
    border: 'black',
    background: 'red'
  }
};

//проверка кол-во ключей в объекте
console.log(Object.keys(options).length);

//деструктуризация
const {border, background} = options.colors;

console.log(border);

//вывод пары ключ: значение и не оптимальный подсчет ключей
let counter = 0;

for(let key in options) {
  if(typeof options[key] === 'object') {
    for(let i in options[key]) {
      console.log(`${i}: ${options[key][i]}`);
    }
    counter++;
  } else {
    console.log(`${key}: ${options[key]}`);
    counter++;
  }
}