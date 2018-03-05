var myArray = [];
function addTask(task) {
    myArray.push(task);
    console.log("a task was added to the array. the number of tasks in the array is " + myArray.length);
    return myArray.length;
}
function listAllTasks() {
    for (var i = 0; i < myArray.length; i++)
        console.log(myArray[i]);
}
function deleteTask(task) {
    var i = myArray.indexOf(task);
    if (i != -1) {
        myArray.splice(i, 1);
    }
}
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
