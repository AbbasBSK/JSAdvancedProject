const form = document.getElementById("myForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // جلوگیری از رفرش شدن صفحه

  const formData = new FormData(form);
  const obj = Object.fromEntries([...formData]); // تبدیل به آبجکت
  const json = JSON.stringify(obj); // تبدیل به JSON

  try {
    const response = await fetch("https://example.com/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"  // چون داریم JSON می‌فرستیم
      },
      body: json
    });

    const result = await response.json(); // فرض می‌کنیم سرور JSON برمی‌گردونه
    console.log("پاسخ سرور:", result);
  } catch (error) {
    console.error("خطا در ارسال:", error);
  }
});




























// const params = new URLSearchParams(formData);
// console.log(params.toString());
// params.append("country", "iran");
// params.set("age", "31");
// params.delete("city");

// console.log(params.toString());
































// const iterator =  formData.entries()
// console.log(iterator);


// console.log(iterator.next()); // اولین عنصر
// console.log(iterator.next()); // دومین عنصر
// console.log(iterator.next()); // تمام شد









