// ابجاد متعیر ها با استفاده فراخوانی المان های صفحه
const modal = document.getElementById("taskModal");
const taskList = document.getElementById("taskList");
const titleInput = document.getElementById("taskTitle");
const textInput = document.getElementById("taskText");
const modalTitle = document.getElementById("modalTitle");
const addBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("saveBtn");

const TaskManager = (function () {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  return (task) => {
    tasks.push(task);
    console.log("Current tasks array:", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
})();




// تابع باز کردن پاپ آپ
addBtn.onclick = () => {
  modalTitle.textContent = "تسک جدید";
  titleInput.value = "";
  textInput.value = "";
  modal.showModal();
};

// تابع ذخیره تسک 
saveBtn.onclick = (e) => {
  e.preventDefault();
  if (!titleInput.value || !textInput.value) {
    alert("لطفا عنوان و توضیحات تسک را وارد کنید.");
    return
  }
  const task = {
    title: titleInput.value,
    text: textInput.value,
    date: new Date().toLocaleString("fa-IR")
  };
  TaskManager(task);
  modal.close();
};
