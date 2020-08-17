

const car = {
  speed: 200,
  weight: 1200,
  drive: function() {
    console.log("Я поехал");
  }
};

const tayota = {
  speed: 210,
  drive: function() {
    console.log("Я помчался");
  }
};

// Старый способ задания прототипа
tayota.__proto__ = car;

// Правильный способ 
Object.setPrototypeOf(tayota, car);

// В динамике
const BMW = Object.create(car);

BMW.drive();
