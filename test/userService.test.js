// test/userService.test.js

const { getUserById } = require('../src/userService');

describe('getUserById', () => {
  it('should return user with valid ID', async () => {
    let user = await getUserById(1);  // Issue: No assertion
    console.log(user);  // Debugging: Logs without assertion

    // Missing assertion
  });

  it('should return undefined for non-existent user', async () => {
    let user = await getUserById(999);  // Issue: No assertion
    console.log(user);  // Debugging: Logs without assertion
  });
});
