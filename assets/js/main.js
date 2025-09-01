const $ = (selector, root = document) => root.querySelector(selector);
const form = $("#myForm");
const username = $("#username");
const countMessage = $(".count-message");
const message = $(".message");

// 1️⃣ هر بار که کاربر تایپ می‌کند
username.addEventListener("input", () => {
  countMessage.textContent = username.value.length;
  if (username.value.length < 5) {
    // ایجاد پیام خطای سفارشی
    username.setCustomValidity("نام کاربری باید حداقل ۵ حرف داشته باشد");
    message.textContent = "⚠ نام کاربری باید حداقل ۵ حرف داشته باشد";
    message.classList.add("show");
    // reportValidity → نمایش پیام خطای سفارشی روی فیلدهای نامعتبر
    // form.reportValidity();
  } else {
    // پاک کردن پیام خطا
    username.setCustomValidity("");
    message.textContent = "";
    message.classList.remove("show");
  }
});

// 2️⃣ هنگام ارسال فرم
form.addEventListener("submit", (e) => {
  // checkValidity → بررسی اعتبار کل فرم، true/false
  if (!form.checkValidity()) {
    e.preventDefault(); // جلوگیری از ارسال فرم

  } else {
    alert("فرم با موفقیت ارسال شد!");
  }
});