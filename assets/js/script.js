function outer() {
  let count = 0;

  return function inner() {
    count++;
    console.log(count);
  }

}

const fn = outer();

fn();
fn();



const counter = (function() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
})();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3



function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15



function greeting(name) {
  return function() {
    return "سلام " + name;
  };
}

const sayHello = greeting("عباس");

console.log(sayHello()); // "سلام عباس"




function createCounter() {
  let counter = 0; // متغیر خصوصی
  
  return function() {
    counter++;
    return counter;
  };
}

const myCounter = createCounter();

console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3