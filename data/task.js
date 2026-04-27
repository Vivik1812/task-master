const fs = require('fs');
const PATH = './data/task.json';

function readTask(){
    return JSON.parte(fs.readFileSync(PATH, 'utf8'));
}

function writeTaks(tasks){
    fs.writeFileSync(PATH, JSON.stringify(tasks, null, 2));
}

module.exports = { readTasks, writeTasks };