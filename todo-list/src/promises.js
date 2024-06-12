const todolist = require("./todolist");

//Define a function that gets all the todos from the
// todolist array declared asynchronously after 2 seconds
getAllTodos = (todo) => {
  return new Promise((resolve, reject) => {
    setTimeout((err, todo) => {
            if(todo===undefined){
              reject(err)
            }else{
              resolve(todo.length);
            }
    }, 2000);
  });
};
// Define a function to add a todo to the todolist array
createTodo = (todo) => {
  return new Promise((resolve, reject) => {
    if (todo==undefined) {
      reject("No data to be added");
      
    } else {
      let newList = todolist.push(todo);
      resolve(newList);
    }
  });
};
module.exports = {
  createTodo,
  getAllTodos,
};
