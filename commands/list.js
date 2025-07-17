// commands/list.js
const { readData } = require('../utils/fileHandler');

function listTasks() {
  const todos = readData();

  if (todos.length === 0) {
    console.log('📭 No tasks found.');
    return;
  }

  console.log('\n📝 Your Todo List:\n');

  todos.forEach((todo, index) => {
    const status = todo.completed ? '✅' : '❌';
    console.log(`${index}. ${status} ${todo.title} (${todo.priority})`);
    if (todo.description) {
      console.log(`   ↳ ${todo.description}`);
    }
  });

  console.log('');
}

module.exports = listTasks;
