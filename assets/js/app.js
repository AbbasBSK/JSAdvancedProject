// // روش سنتی بدون پترن:
// let counter = 0;

// function increase() {
//   counter++;
// }
// function getCount() {
//   return counter;
// }
// // روش دیزاین پترنی (Module Pattern):
// const CounterModule = (function() {
//   let counter = 0;
//   function increase() {
//     counter++;
//   }
//   function getCount() {
//     return counter;
//   }
//   return {
//     increase,
//     getCount
//   };
// })();

// CounterModule.increase();
// CounterModule.increase();
// CounterModule.increase();

// console.log(CounterModule.getCount());

// // روش سنتی:
// function Carr() {
//   this.cost = function() {
//     return 20000;
//   };
// }
// function LuxuryCar() {
//   this.cost = function() {
//     return 20000 + 5000;
//   };
// }
// // روش دیزاین پترنی (Decorator):
// function Car() {
//   this.cost = function() {
//     return 20000;
//   };
// }

// function addSunroof(car) {
//   const oldCost = car.cost();
//   car.cost = function() {
//     return oldCost + 1500;
//   };
// }

// const myCar = new Car();
// addSunroof(myCar);
// console.log(myCar.cost()); // 21500


// روش سنتی:
let data = 10;
function updateUI() {
  console.log("UI updated:", data);
}
data = 20;
updateUI();

// روش دیزاین پترنی (Observer):
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  notify(data) {
    this.observers.forEach(fn => fn(data));
  }
}

const subject = new Subject();

subject.subscribe(data => console.log("UI updated:", data));
subject.subscribe(data => console.log("Logger:", data));
console.log(subject);


subject.notify(42);
























// class Subject {
//   constructor() {
//     this.observers = [];
//   }

//   subscribe(fn) {
//     this.observers.push(fn);
//     // console.log("مقداردهی پراپرتی");
//   }

//   notify(data) {
//     this.observers.forEach(f => f(data));
//     // console.log("لحظه اعمال تغییر");
//   }
// }

// const subject = new Subject();

// subject.subscribe(data => console.log("UI updated:", data));
// subject.subscribe(data => console.log("Logger:", data));

// // console.log(subject.observers);

// subject.notify(5);
// subject.notify(6);




// const strategies = {
//   gold: price => price * 0.8,
//   silver: price => price * 0.9,
//   normal: price => price
// };

// function calculate(price, type) {
//   return strategies[type](price);
// }

// console.log(calculate(100 , "silver"));
