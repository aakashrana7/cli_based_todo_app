// commands/complete.js
const { readData, writeData } = require('../utils/fileHandler');

function completeTask(taskIndex) {
  const todos = readData();

  if (taskIndex < 0 || taskIndex >= todos.length) {
    console.log('❌ Invalid task number.');
    return;
  }

  todos[taskIndex].completed = true;
  writeData(todos);

  console.log(`✅ Marked task "${todos[taskIndex].title}" as complete.`);
}

module.exports = completeTask;
