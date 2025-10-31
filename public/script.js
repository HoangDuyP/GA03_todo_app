document.addEventListener("DOMContentLoaded", function () {
    const addTaskButton = document.getElementById("addTaskButton");
    let taskNo = 0;
    addTaskButton.addEventListener("click", function () {
        taskNo += 1;
        const taskList = document.getElementById("taskList");
        const doneTaskList = document.getElementById("doneTaskList");
        const newTask = document.createElement("div");
        newTask.className = "flex border border-sky-500 mb-2";
        newTask.innerHTML = `
            <input id="taskContent${taskNo}" type="text" class="text-black grow pl-2" placeholder="New task..." />
            <input id="checkDone${taskNo}" type="checkbox" class="largerCheckbox ml-2" />
            <button id="deleteTaskButton${taskNo}" class="text-center bg-red-500 w-5 ml-2">X</button>
        `;
        taskList.appendChild(newTask);
        const taskContent = newTask.querySelector("input[type='text']");
        newTask.querySelector(`#checkDone${taskNo}`).addEventListener("change", function () {
            if (this.checked) {
                taskList.removeChild(newTask);
                doneTaskList.appendChild(newTask);
                taskContent.readOnly = true;
            }
            else {
                doneTaskList.removeChild(newTask);
                taskList.appendChild(newTask);
                taskContent.readOnly = false;
            }
        });
        newTask.querySelector(`#deleteTaskButton${taskNo}`).addEventListener("click", function () {
            newTask.remove();
        });
    });
});