// کد کثیف
function c(u, p){
  if(u === "admin" && p === "1234"){
    console.log("ok")
  } else {
    console.log("err")
  }
}
c("admin", "1234")


function loginUser(username, password) {
  const ADMIN = { username: "admin", password: "1234" };
  
  const isValid = username === ADMIN.username && password === ADMIN.password;

  if (isValid) {
    console.log("✅ Login successful!");
  } else {
    console.error("❌ Invalid username or password.");
  }
}
loginUser("admin", "1234");







try {
  const data = JSON.parse('{"name":"Abbas "}');
  console.log(data.name);
} catch (error) {
  console.error("خطا در پردازش داده:", error.message);
}




document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#message").innerText = "Hello!";
});
// بهتره اون المنت رو یک بار بگیریم و ازش استفاده کنیم:

const message = document.querySelector("#message");
document.querySelector("#btn").addEventListener("click", () => {
  message.innerText = "Hello!";
});