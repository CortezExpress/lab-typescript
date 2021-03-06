// Iteration 1
// 1. Create an array of strings
let myArray: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to 
// accept a string and don't have to return anything.
function addTask (task:string){
    myArray.push(task);
    console.log("a task was added to the array. the number of tasks in the array is "+ myArray.length);
    return myArray.length; 
}

// 3. Create a function to list all tasks, it must show in the console the task.
function listAllTasks(){
    for (var i=0; i< myArray.length; i++)
        console.log(myArray[i]);
}

// 4. Create a function to delete a task, you must find the task inside the array and delete it.
function deleteTask(task:string){
    var i = myArray.indexOf(task);
    if(i != -1) {
        myArray.splice(i, 1);
    }
}

// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
