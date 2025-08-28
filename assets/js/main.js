// // --- اطلاعات کلی ---
// console.log("عنوان:", document.title);
// document.title = "عنوان جدید";
// console.log("URL:", document.URL);
// console.log("دامنه:", document.domain);
// console.log("Referrer:", document.referrer);
// console.log("آخرین تغییر:", document.lastModified);
// console.log("Character set:", document.characterSet);
// setTimeout(() => {
//   console.log("وضعیت بارگذاری:", document.readyState);
// }, 1000);
// console.log("Active element:", document.activeElement);


// // // ---  دسترسی به بخش ها و المنت ها ---
// console.log("عنوان:", document.title);
// console.log("کل HTML:", document.documentElement);
// console.log("Head:", document.head);
// console.log("Body:", document.body);
// // // document.images و document.links و document.scripts document.styleSheets و document.forms



// // --- انتخاب ---
// console.log("با ID:", document.getElementById("title"));
// console.log("با Class:", document.getElementsByClassName("text"));
// console.log("با CSS:", document.querySelector("p.text"));
// console.log("با Tag Name:", document.getElementsByTagName("p"));
// document.querySelectorAll('[name="username"]')

// // // --- ایجاد المنت ---
// const newDiv = document.createElement("div");
// newDiv.textContent = "من یک div جدیدم!";
// document.body.appendChild(newDiv);


// // --- رویداد DOM ---

  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM کاملاً بارگذاری شد!");
  });
  document.addEventListener("readystatechange", () => {
    console.log("وضعیت بارگذاری:", document.readyState);
  });
  document.addEventListener("visibilitychange", () => {
    console.log("وضعیت نمایشی:", document.visibilityState);
  });
  document.addEventListener("fullscreenchange", () => {
    console.log("وضعیت تمام صفحه:", document.fullscreenElement);
  });
  console.log("وضعیت تمام صفحه:", document.fullscreenElement);













