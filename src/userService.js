// src/userService.js

let users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  
  // Unused function
  function calculateAge(birthYear) {
    return new Date().getFullYear() - birthYear;
  }
  
  // Unused variable
  let temp = 'This is not used';
  
  // Simulating a function that retrieves a user by ID, but no error handling
  function getUserById(id) {
    console.log('Fetching user...');
    return users.find(user => user.id === id);  // Issue: No error handling if user not found
  }
  
  module.exports = { getUserById };
  