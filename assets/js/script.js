// Function Declaration (تعریف تابع)
function sayHello() {
  console.log("سلام!");
}
sayHello(); 

// Function Expression (عبارت تابع)
let sayHello2 = function() {
  console.log("سلام!");
};

sayHello2(); 

// Anonymous Functions (توابع بی‌نام)
setTimeout(function() {
  console.log("بعد از ۲ ثانیه اجرا شد!");
}, 2000);


// IIFE (Immediately Invoked Function Expression) – تابع خوداجرا
(function() {
  console.log("این یک تابع خوداجراست!");
})();







