// src/taskService.js

let tasks = [
    { id: 1, name: 'Task 1', status: 'pending' },
    { id: 2, name: 'Task 2', status: 'completed' },
  ];
  
  // Missing return statement in the function
  function findTaskById(id, callback) {
    const task = tasks.find(t => t.id === id);
    if (task) {
      callback(null, task);
    } else {
      callback('Task not found');
    }
  }
  
  module.exports = { findTaskById };
  