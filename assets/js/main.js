
const out = document.getElementById("output");

// نمایش اندازه‌ها و اطلاعات مرورگر
function showInfo() {
  out.innerHTML = `
        <b>اندازه Viewport:</b> x ${window.innerWidth} y ${window.innerHeight} <br>
        <b>اندازه پنجره مرورگر:</b>x ${window.outerWidth} y ${window.outerHeight} <br>
        <b>موقعیت روی صفحه:</b> X=${window.screenX}, Y=${window.screenY} <br>
        <b>آدرس صفحه:</b> ${window.location.href} <br>
        <b>نام مرورگر:</b> ${window.navigator.userAgent} <br>
        <b>مقدار اسکرول:</b> X=${window.scrollX}, Y=${window.scrollY}
      `;
}

// اجرا هنگام بارگذاری
window.addEventListener("load", showInfo);
// اجرا هنگام تغییر سایز
window.addEventListener("resize", showInfo);
// اجرا هنگام اسکرول
window.addEventListener("scroll", showInfo);


// Open window
function testOpen() {
  let newWin = window.open("https://example.com", "_blank", "width=400,height=400");
  setTimeout(() => newWin.close(), 5000); // بعد 5 ثانیه بسته میشه
}

// ScrollBy
function scrollDown() {
  window.scrollBy(0, 200);
}

// ScrollTo
function scrollToTop() {
  window.scrollTo({ top: 0, left: 0 });
}



















