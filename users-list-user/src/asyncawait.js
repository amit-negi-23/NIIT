const users = require("./users");
// Define a function that returns a promise to get all users and return a promise
const getAllUsers = () => {
  return users;
};
//Define a function to create a new user and return a promise
const createUser = (user) => {
   let newuser= users.push(user);
   return user;
};
// Define a function to get a user by id and return a promise
const getAUserByID =  (id) => {
  let getuser =  users.filter((user) => {return user.id ===id  });
  if(getuser){
      return getuser;
  }else{
    return "User does not exist"
  }
};
// Define an async function that calls the createUser and getAllUsers function using await
// and returns all users
const displayUsers = async (user) => {
  const allUsers = null;
  return allUsers;
};
//Define a async function to display a specific user by Id
// return the user
const displayAUser = async (id) => {
  const user = null;
  return user;
};

module.exports = {
  getAllUsers,
  getAUserByID,
  createUser,
  displayAUser,
  displayUsers,
};
