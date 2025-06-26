// Define a Todolist class to manage a list of tasks
class TodoList {
    constructor(){
        this.tasks = [];
        this.nextId = 1;
    }
// Create a new task with a unique ID and provided description
    createTask(description){
        const task = {id: this.nextId++, description };
        this.tasks.push(task);// Add the new task to the list
        return task;// To return the created task
    }

//Edit an existing task's description by its ID
    editTask(id, newDescription){
        const task = this.tasks.find(task => task.id === id);
        if (!task) throw new Error("Task not found");//Throw error if task is not found
        task.description = newDescription;//Update the task's desc
        return task;
    }
//Delete an existing task's description using its ID
    deleteTask(id){
        const index = this.tasks.findIndex(task => task.id === id);// Find index of the task
        if (index === -1) throw new Error("Task not found");
        this.tasks.splice(index, 1); //Remove the task from the list
        return {message: "Task deleted successfully"};
        
    }
//List all task currently in the task list
    listTasks(){
        return this.tasks; //To return the array of tasks
    }
}
// Export the TodoList class so it can be used in other modules
export default TodoList;