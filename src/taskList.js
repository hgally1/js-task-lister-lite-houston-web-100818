class TaskList {
    constructor () {
        this.tasks = [];
    }
    createNewTaskList(description, priority) {
        const newTask = new Task(description, priority);
        this.tasks.push(newTask);
    }
    renderTasks(){
        return this.tasks.map((task) => task.render()).join("");
    }
    
    deleteTask(description){
        this.tasks = this.tasks.filter((task) => task.description !== description);
    }
}
