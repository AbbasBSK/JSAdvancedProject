// 1. دسترسی به فرم‌ها
console.log(document.forms); // همه فرم‌های صفحه یک HTML Collection
console.log(document.forms[0]); // اولین فرم
console.log(document.forms["myForm"]); // دسترسی با id یا name
// این روش قدیمیه (بیشتر برای IE و اوایل جاوااسکریپت استفاده می‌شد).


// شورتکات (Shortcut) یا Helper Function
const $ = (selector, root = document) => root.querySelector(selector);
let form = $("#myForm");
let msg = $("#msg");
// توی پروژه‌های بزرگ، بهتره اسم تابع توصیفی‌تر باشه (مثل qs یا select) تا همه‌ی اعضای تیم راحت بفهمن.
const $$ = (selector, root = document) => root.querySelectorAll(selector);
// بعضی‌ها $ رو برای querySelector می‌ذارن و $$ برای querySelectorAll:




// 2. گرفتن و ست کردن مقدار ورودی‌ها
// گرفتن مقدار
console.log(form.username.value); // مقدار input با name="username"
// ست کردن مقدار
form.username.value = "Ali";

// .value → گرفتن یا ست کردن مقدار
// .checked → برای چک‌باکس و رادیو
// .disabled → غیرفعال کردن فیلد
// .hidden → پنهان/ظاهر کردن



// 3. چک‌باکس و رادیو
// رادیو
// const start = () => {
//   console.log(form.gender.value); // مقدار انتخاب شده (male یا female)
//   form.remember.disabled = true;
// }

// 4. پنهان و آشکار کردن المان
msg.hidden = true;  // پنهان میشه
msg.hidden = false; // دوباره ظاهر میشه


// 5. ارسال فرم با جاوااسکریپت
const start = () => {
  // form.submit(); // ارسال خودکار بدون کلیک کاربر
  // // reset(): بازگرداندن مقادیر فرم به حالت اولیه
  // form.reset();
  // // focus(): انتقال فوکوس به یک ورودی
  // form.username.focus();
  // blur(): خارج کردن فوکوس
  // form.username.blur();
  // select(): انتخاب متن داخل input
  form.username.select();
};
// submit → وقتی فرم ارسال میشه
// reset → وقتی فرم ریست میشه
// input → هر بار که کاربر چیزی تایپ می‌کنه
// change → وقتی مقدار ورودی تغییر می‌کنه و کاربر فوکوس رو از اون خارج می‌کنه
// focus → وقتی یک فیلد فوکوس می‌گیره
// blur → وقتی فوکوس از فیلد خارج میشه
// رویداد ارسال
form.addEventListener("submit", function(e) {
  e.preventDefault(); // جلوگیری از ارسال واقعی
  msg.innerText = "✅ فرم ارسال شد، مقدار: " + form.username.value;
});

// رویداد ریست
form.addEventListener("reset", function() {
  msg.innerText = "♻️ فرم ریست شد";
});

// رویداد input
form.username.addEventListener("input", function() {
  msg.innerText = "در حال تایپ: " + form.username.value;
});

// رویداد focus و blur
form.password.addEventListener("focus", function() {
  msg.innerText = "رمز عبور فوکوس گرفت";
});
form.password.addEventListener("blur", function() {
  msg.innerText = "رمز عبور فوکوس رو از دست داد";
});
































