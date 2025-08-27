// const para1 = document.getElementById("para1");

// // outerHTML: کل تگ + محتواش رو برمی‌گردونه
// console.log(para1.outerHTML);

// para1.outerHTML = '<h2 id="para1" class="title">New Heading</h2>';


// // setAttribute
// para1.setAttribute("id", "example");
// console.log("attribute جدید اضافه شد:", para1.getAttribute("id"));

// // hasAttribute
// console.log("آیا این المنت id دارد؟", para1.hasAttribute("id"));

// // removeAttribute
// para1.removeAttribute("class");

// // getAttribute
// const cls = para1.getAttribute("class");
// console.log("کلاس فعلی:", cls);










// const container = document.getElementById("container");
// const para2 = document.getElementById("para2");

// // removeChild → حذف یک فرزند
// container.removeChild(para2);

// // ساخت یک المنت جدید
// const newPara = document.createElement("p");
// newPara.textContent = "This is a new paragraph";
// container.appendChild(newPara);

// // replaceChild → جایگزینی المنت جدید به‌جای span
// const span1 = document.getElementById("span1");
// container.replaceChild(newPara, span1);

















const container2 = document.getElementById("container");
const para1 = document.getElementById("para1");

console.log("والد para1:", para1.parentNode); // دسترسی به والد
console.log("لیست همه بچه‌ها:", container2.childNodes); // نودهای داخل والد

console.log("اولین بچه:", container2.firstChild);
console.log("آخرین بچه:", container2.lastChild);

// حرکت بین خواهر و برادرها
console.log("nextSibling:", para1.nextSibling);
console.log("previousSibling:", para1.previousSibling);

// closest → نزدیک‌ترین جدی که با selector بخوره
console.log(para1.closest("div")); // میره بالا تا برسه به اولین div