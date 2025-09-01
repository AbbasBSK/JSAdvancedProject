const form = document.getElementById("myForm");
const username = document.getElementById("username");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // جلوگیری از ارسال واقعی برای تست
  alert("🎯 فرم ارسال شد! مقدار: " + username.value);
});

// دکمه‌ای که از submit() استفاده می‌کند
document.getElementById("forceSubmit").addEventListener("click", () => {
  form.submit(); 
  // ⚠ هیچ اعتبارسنجی انجام نمی‌شود
  // ⚠ هیچ رویداد submit اجرا نمی‌شود
});

// دکمه‌ای که از requestSubmit() استفاده می‌کند
document.getElementById("requestSubmit").addEventListener("click", () => {
  form.requestSubmit();
  // ✅ رویداد submit اجرا می‌شود
  // ✅ اعتبارسنجی انجام می‌شود
});