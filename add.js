const fs = require('fs');

// Path to your JSON file
const filePath = 'data.json';

// New data to append
function addTask(){
  const newTask = {
    id: "3",
    description: "Review pull requests",
    status: "todo",
    createdAt: "2024-09-04T14:00:00Z",
    updatedAt: "2024-09-04T14:00:00Z"
  };


  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }
  
    let tasks = [];
  
    // Step 2: If the file is not empty, parse the existing data
    if (data) {
      try {
        tasks = JSON.parse(data);
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        return;
      }
    }
  
    // Step 3: Append the new task to the existing array of tasks
    tasks.push(newTask);
     
  
    // Step 4: Write the updated data back to the file
    fs.writeFile(filePath, JSON.stringify(tasks, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('New task added successfully.');
      }
    });
  });
  
}


// Step 1: Read the existing data from the file
addTask();