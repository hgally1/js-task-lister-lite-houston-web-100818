
document.addEventListener("DOMContentLoaded", () => {
  const taskList = new TaskList();
// get DOM form and input fields
  const newTaskForm = document.getElementById("create-task-form");
  const newTaskDescription = document.getElementById("new-task-description");
  const taskPriority = document.querySelector('#new-task-priority');

  //ul where new tasks will live
  const taskUl = document.getElementById("tasks");

  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());

  // attach event listeners
  newTaskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    taskList.createNewTaskList(newTaskDescription.value, taskPriority.value);
    //reset form
    e.target.reset();
    renderApp();
  })
  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }
  });
});
