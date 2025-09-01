const form = document.getElementById("myForm");
const ageInput = document.getElementById("age");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // جلوگیری از ارسال واقعی

  // مقایسه مقدارهای مختلف
  console.log("value:", ageInput.value, typeof ageInput.value);
  console.log("valueAsNumber:", ageInput.valueAsNumber, typeof ageInput.valueAsNumber);
});