// localStorage.setItem('username', 'Abbas');
// localStorage.setItem('name', 'ali');

// localStorage.removeItem('name')

// let userName = localStorage.getItem('username')
// console.log(userName);

// localStorage.clear()






















// const user = { name: "Ali", age: 25 };

// // ذخیره
// localStorage.setItem("user",JSON.stringify(user) );

// // خواندن
// const savedUser =JSON.parse(localStorage.getItem("user")) ;
// console.log(savedUser); 







































//  1- خواندن اطلاعات ذخیره‌شده
const redBtn =  document.getElementById("redBtn");
const blueBtn = document.getElementById("blueBtn");
const savedColor = localStorage.getItem("bgColor");

if (savedColor) {
  document.body.style.backgroundColor = savedColor;
}

//  3- تغییر رنگ و ذخیره‌سازی
redBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";
  localStorage.setItem("bgColor", "red");
});

blueBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
  localStorage.setItem("bgColor", "blue");
  
  
  
  
  
  // const saveNameBtn = document.getElementById("saveNameBtn");
  // const savedName = localStorage.getItem("userName");
  // if (savedName) {
  //   document.getElementById("welcome").textContent = `سلام ${savedName}!`;
  // }
  //  2- ذخیره اسم کاربر
  saveNameBtn.addEventListener("click", () => {
    const name = document.getElementById("nameInput").value;
    if (name.trim() !== "") {
      localStorage.setItem("userName", name);
      document.getElementById("welcome").textContent = `سلام ${name}!`;
      document.getElementById("nameInput").value = "";
    }
  });
});