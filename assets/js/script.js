const TaskManager = (function () {
  // مدیریت مقادیر فضای ذخیره سازی
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function save() { localStorage.setItem("tasks", JSON.stringify(tasks)); }

  // تعریف توابع مورد نیاز برای کار با آرایه 
  return {
    get: () => tasks,
    add: (task) => { tasks.push(task); save(); },
    update: (index, task) => { tasks[index] = task; save(); },
    remove: (index) => { tasks.splice(index, 1); save(); },
    complete: (index, bool) => {
      tasks[index].completed = bool ? bool : 0; save();
    } // اضافه شد
  };
})();

// ابجاد متعیر ها با استفاده فراخوانی المان های صفحه
const taskList = document.getElementById("taskList");
const modal = document.getElementById("taskModal");
const addBtn = document.getElementById("addTaskBtn");
const saveBtn = document.getElementById("saveBtn");
const titleInput = document.getElementById("taskTitle");
const textInput = document.getElementById("taskText");
const modalTitle = document.getElementById("modalTitle");

let editIndex = null;


addBtn.onclick = () => {
  editIndex = null;
  modalTitle.textContent = "تسک جدید";
  titleInput.value = "";
  textInput.value = "";
  modal.showModal();
};

saveBtn.onclick = (e) => {
  e.preventDefault();
  const task = {
    title: titleInput.value,
    text: textInput.value,
    date: new Date().toLocaleString("fa-IR")
  };
  if (editIndex !== null) TaskManager.update(editIndex, task);
  else TaskManager.add(task);
  render();
  modal.close();
};





window.editTask = (i) => {
  const t = TaskManager.get()[i];
  editIndex = i;
  modalTitle.textContent = "ویرایش تسک";
  titleInput.value = t.title;
  textInput.value = t.text;
  modal.showModal();
};

const deleteTask = (i) => {
  TaskManager.remove(i);
  render();
};

const completeTask = (i, bool) => {
  console.log(i);

  TaskManager.complete(i, bool);
  render();
};

render();

function render() {
  taskList.innerHTML = "";
  TaskManager.get().forEach((task, i) => {
    const li = document.createElement("li");
    li.className = task.completed === 1 ? "completed" : task.completed === 2 ? "not-completed" : ""; // اگر تسک کامل شده بود کلاس اضافه شود
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
