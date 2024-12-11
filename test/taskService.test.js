// test/taskService.test.js

const { findTaskById } = require('../src/taskService');

describe('findTaskById', () => {
  it('should return task with valid ID', () => {
    // Missing mock or actual asynchronous handling
    let task = findTaskById(1, (err, task) => {
      if (err) {
        console.error(err);
      }
      console.log(task);  // Debugging: Logs without assertions
    });

    // Missing assertion for the task
  });

  it('should handle task not found', () => {
    let task = findTaskById(999, (err, task) => {
      if (err) {
        console.log(err);  // Improper error handling
      }
    });

    // Missing assertion
  });
});
