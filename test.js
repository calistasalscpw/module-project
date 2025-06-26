import TodoList from "./todolist.js";

const todo = new TodoList();

const task1 = todo.createTask("Huddle");
const task2 = todo.createTask("Learning JavaScript");
const task3 = todo.createTask("Lunch");

console.log(todo.listTasks())

todo.editTask(task2.id, "Learning React.js")
console.log("Result of Edited Task: \n", todo.listTasks())

todo.deleteTask(task2.id)
console.log("Result of Deleted Task: \n",todo.listTasks())