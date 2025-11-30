const fs = require('fs');
const Math = require('./Math.js');
const os = require('os');
// console.log('1');
// non-blocking
// const result = fs.readFileSync('introduction.js', 'utf8');
// console.log(result);

// console.log('2')


console.log(1);
// non-blocking Asynchronous
fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(data);
})


console.log(2);

console.log(os.cpus().length);

console.log(Math.addfn(3 , 5),Math.subfn(10, 4));