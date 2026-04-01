const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {   
  console.log('Please turn of the water');
  setTimeout(() => {
    console.log("Please turn of the motor. Its gentle remainder.")
  }, 3000);
});

console.log('Code is running')
console.log('Code is still running')
myEmitter.emit('Waterfull');