"use strict";
exports.__esModule = true;
var Todo = (function () {
    function Todo() {
        this.taskList = [];
    }
    Todo.prototype.addTask = function (task) {
        this.taskList.push(task);
        console.log("========== task added ==========\n       " + task);
        return this.taskList.length;
    };
    Todo.prototype.listAllTasks = function () {
        for (var i = 0; i < this.taskList.length; i++)
            console.log(this.taskList[i]);
    };
    ;
    Todo.prototype.deleteTask = function (task) {
        var i = this.taskList.indexOf(task);
        if (i != -1) {
            this.taskList.splice(i, 1);
            console.log("========== task removed ==========\n        " + task);
            return this.taskList.length;
        }
    };
    return Todo;
}());
var myTodos = new Todo();
console.log("Number of items:", myTodos.addTask('This is our first task'));
console.log("Number of items:", myTodos.addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", myTodos.addTask('Finish this iteration 3!! 🤓'));
myTodos.listAllTasks();
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", myTodos.deleteTask('Finish this iteration 2!! 🤓'));
myTodos.listAllTasks();
