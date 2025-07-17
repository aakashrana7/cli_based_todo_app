const addTask = require('./commands/add');
const listTasks = require('./commands/list');
const completeTask = require('./commands/complete');
const removeTask = require('./commands/remove');
// Get command line argument (e.g., "add", "list", "remove", etc.)
const command = process.argv[2];

// Dynamically call corresponding command handler
switch (command) {
  case 'add':
    addTask();
    break;

  case 'list':
    listTasks();
    break;

  case 'complete': {
    const taskId = parseInt(process.argv[3]);
    if (isNaN(taskId)) {
      console.log('❌ Please provide a valid task number.');
    } else {
      completeTask(taskId);
    }
    break;
  }

  case 'remove': {
    const taskId = parseInt(process.argv[3]);
    if (isNaN(taskId)) {
      console.log('❌ Please provide a valid task number.');
    } else {
      removeTask(taskId);
    }
    break;
  }

  default:
    console.log('❌ Unknown command. Try: add, list, complete <taskNumber>, remove <taskNumber>');
}
