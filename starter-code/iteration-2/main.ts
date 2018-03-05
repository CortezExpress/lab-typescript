// Add the reference to the "TodoInterface"
import { TodoInterface } from './todoInterface';

// 1. Create a class Todo that implements the Interface created before.
class Todo implements TodoInterface {
    taskList: Array<string> =[];

   addTask(task: string): number {
       this.taskList.push(task);
       console.log(`========== task added ==========
       ${task}`)
       return this.taskList.length;
   }
  
   listAllTasks(){
for (var i=0; i< this.taskList.length; i++)
       console.log(this.taskList[i]);
   };

   deleteTask(task: string): number{
    var i = this.taskList.indexOf(task);
    if(i != -1) {
        this.taskList.splice(i, 1);
        console.log(`========== task removed ==========
        ${task}`)
        return this.taskList.length;
 
    }
   }
}
  

// Execution
let myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
