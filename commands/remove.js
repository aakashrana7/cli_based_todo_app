// commands/remove.js
const { readData, writeData } = require('../utils/fileHandler');

function removeTask(taskIndex) {
  const todos = readData();

  if (taskIndex < 0 || taskIndex >= todos.length) {
    console.log('❌ Invalid task number.');
    return;
  }

  const removed = todos.splice(taskIndex, 1);
  writeData(todos);

  console.log(`🗑 Removed task "${removed[0].title}".`);
}

module.exports = removeTask;
