#!/usr/bin/env node
const fs = require("fs");
const args = process.argv.slice(2);

if (args.length === 0) {
  console.log('No command provided. Please provide a command.');
  process.exit(1);
}

const command = args[0];
console.log(command)

switch (command) {
  case 'add':
    if (args.length < 2) {
      console.log('Usage: my-cli add <description>');
      process.exit(1);
    }
    const name = args[1];
    console.log(`${name}!`);
    break;
  case 'update':
    if(args.length < 2){
        console.log('Usage: my-cli update <TaskID>');
      process.exit(1);
    }
    const TaskID = args[1];
    console.log(`${TaskID}!`);
    break;
  case 'delete':
        if(args.length < 2){
            console.log('Usage: my-cli delete <DeleteTaskID>');
          process.exit(1);
        }
        const DelTaskID = args[1];
        console.log(`${DelTaskID}!`);
        break;
  case 'mark-in-progress':
        if(args.length < 2){
            console.log('Usage: my-cli delete <DeleteTaskID>');
          process.exit(1);
        }
        const progressTaskID = args[1];
        console.log(`${progressTaskID}!`);
        break;
  case 'mark-done':
        if(args.length < 2){
            console.log('Usage: my-cli delete <DeleteTaskID>');
          process.exit(1);
        }
        const DoneTaskID = args[1];
        console.log(`${DoneTaskID}!`);
        break;
  case 'list-done':
            if(args.length < 1){
                console.log('Usage: my-cli list-done');
              process.exit(1);
            }
            
            console.log(`${DoneTaskID}!`);
            break;
  case 'list-todo':
                if(args.length < 2){
                    console.log('Usage: my-cli list-todo');
                  process.exit(1);
                }
                
                console.log(`${DoneTaskID}!`);
                break;
  case 'list-inprogress':
                    if(args.length < 2){
                        console.log('Usage: my-cli list-inprogress');
                      process.exit(1);
                    }
                    
                    console.log(`${DoneTaskID}!`);
                    break;
  default:
    console.log('Unknown command:', command);
    console.log('Available commands: add, update, delete, mark-in-progress, mark-done, list-done, list-todo, list-inprogress, list');
    process.exit(1);
}
