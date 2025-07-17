const inquirer = require('inquirer');
const { readTasks, writeTasks } = require('../utils/fileHandler');

async function addTask() {
  const answers = await inquirer.prompt([
    // ask for title, description, priority
    {
        type: 'input',
        name: 'title',
        message: 'Enter task title: ',
        validate: input => input ? true : 'Title cannot be empty.'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter task description: '
    },
    {
        type: 'list',
        name: 'priority',
        message: 'Select task Priority: ',
        choices: ['High', 'Medium', 'Low']
    },
  ]);

  // read current todos
  // push new task (with a status: "pending", and unique ID or index)
  // save back to JSON
  const tasks = readTasks();
  const newTask = {
    id: tasks.length + 1,
    title: answers.title,
    description: answers.description,
    priority: answers.priority,
    status: 'pending'
  };

  tasks.push(newTask);
  writeTasks(tasks);

  console.log('✅ Task added successfully!');
}

module.exports = addTask;