// ابجاد متعیر ها با استفاده فراخوانی المان های صفحه
const taskList = document.getElementById("taskList");
const modal = document.getElementById("taskModal");
const addBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("saveBtn");
const titleInput = document.getElementById("taskTitle");
const textInput = document.getElementById("taskText");
const modalTitle = document.getElementById("modalTitle");

const TaskManager = (function () {
  // مدیریت مقادیر فضای ذخیره سازی
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  function save() { localStorage.setItem("tasks", JSON.stringify(tasks)); }

  // تعریف توابع مورد نیاز برای کار با آرایه 
  return {
    get: () => tasks,
    add: (task) => { tasks.push(task); save(); },
  };
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
  TaskManager.add(task);
  modal.close();
  render();
};

render();

// تابع رندر برای بارگذاری مجدد اطلاعات 
function render() {
  taskList.innerHTML = "";
  TaskManager.get().forEach((task, i) => {

    const li = document.createElement("li");
    li.innerHTML = `
          <div class="task-header">
            <span class="task-title">${task.title}</span>
            <div class="task-actions">
              <button class="yellow fs_2x shadow" 
              title="ویرایش" 
              onclick="editTask(${i})">&#9998;</button>
              
              <button class="red fs_2x " 
              title="حذف" 
              onclick="deleteTask(${i})">&#x1F5D1; </button>

              <button class="green fs_2x " 
              title="تکمیل" 
              onclick="completeTask(${i}, 1)" >&#x2611;</button>

              <button class="orange fs_2x " 
              title="عدم تکمیل" 
              onclick="completeTask(${i}, 2)" >&#10006;</button>
            </div>
          </div>
          <div>${task.text}</div>
          <div class="task-date">${task.date}</div>
        `;
    taskList.appendChild(li);
  });
}




