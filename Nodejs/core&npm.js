// core stand for corss origin resource sharing
// npm stand for node package manager

// core modules are built into the node.js runtime
// npm modules are third-party modules that can be installed using npm

// core modules are:
// fs
// path
// http
// os
// url

// npm modules are:
// express
// mongoose
// axios
// lodash
// moment 

// 1. fs (File System)
// Used for working with files (read, write, update, delete, etc.)
const fs = require('fs');

// Read a file
const data = fs.readFileSync('data.txt', 'utf8');
// 'utf8' is the character encoding that tells Node.js how to interpret the raw binary data from the file into readable text.
// Without specifying the encoding (or if you use null), readFileSync would return a raw Buffer object containing the binary data. This would look something like:
//    <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64>
//'ascii' - 7-bit ASCII data
// 'base64' - Base64 encoded data
// 'hex' - Hexadecimal encoded data
// 'latin1' - ISO-8859-1 encoded data
console.log('Read File:', data);

// Write to a file
fs.writeFileSync('data.txt', 'Hello, World!');
console.log('Write File: Hello, World!');

// Delete a file
fs.unlinkSync('data.txt');
console.log('Delete File: data.txt');

// update a file
fs.appendFileSync('data.txt', 'Hello, World!');
console.log('Append File: Hello, World!');

// create a file
fs.writeFileSync('data.txt', 'Hello, World!');
console.log('Create File: data.txt');

// 2. path

// Used for working with file paths
const path = require('path');

// join two paths
const filePath = path.join(__dirname, 'data.txt');
console.log('Join Path:', filePath);    

// get the directory name
const dirName = path.dirname(filePath);
console.log('Directory Name:', dirName);

// get the file name
const fileName = path.basename(filePath);
console.log('File Name:', fileName);        

// get the file extension
const fileExtension = path.extname(filePath);
console.log('File Extension:', fileExtension);

// 3. http

// Used for creating HTTP servers and clients
const http = require('http');

// create a server
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, World!');
});

// start the server
server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// 4. os

// Used for interacting with the operating system
const os = require('os');   

// get the user's home directory
const homeDir = os.homedir();
console.log('Home Directory:', homeDir);

// get the user's platform
const platform = os.platform();
console.log('Platform:', platform); 

// 5. url

// Used for parsing and formatting URLs
const url = require('url');

// parse a URL
const parsedUrl = url.parse('https://www.example.com/path/to/resource?query=param');    
console.log('Parsed URL:', parsedUrl);

// what is a npm module?
// npm modules are third-party modules that can be installed using npm
// npm modules are stored in the node_modules folder
// npm modules are stored in the package.json file
// npm modules are stored in the package-lock.json file

// express is a web framework for Node.js
// express is a popular and widely used module for building web applications and APIs
// express is a minimalist framework that provides a robust set of features for building web applications

// 6. express
// install express
const express = require('express');   

// create a server
const app = express();

// start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
}); 

// 7. mongoose
// Used for interacting with MongoDB
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/mydatabase');

// create a schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
});

// create a model
const User = mongoose.model('User', userSchema);

// create a user
const user = new User({ name: 'John', email: 'john@example.com' });
// save the user
user.save();
// all mongoose methods are asynchronous
// all mongoose methods return a promise
// all mongoose methods can be chained
// all mongoose methods can be awaited

// 8. axios
// Used for making HTTP requests
const axios = require('axios');

// make a GET request
const responseGet = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
console.log('Response:', responseGet.data);

// make a POST request
const responsePost = await axios.post('https://jsonplaceholder.typicode.com/posts', {
  title: 'New Post',
  body: 'This is a new post',
});
console.log('Response:', responsePost.data);

// make a PUT request
const responsePut = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {
  title: 'Updated Post',
  body: 'This is an updated post',
});
console.log('Response:', responsePut.data);

// make a DELETE request 
const responseDelete = await axios.delete('https://jsonplaceholder.typicode.com/posts/1');
console.log('Response:', responseDelete.data);

// 9. lodash
// Used for working with arrays, objects, and strings
const _ = require('lodash');

// Chunk array into smaller arrays
const numbers = [1, 2, 3, 4, 5];
const chunks = _.chunk(numbers, 2); // [[1, 2], [3, 4], [5]]

// Remove duplicates
const duplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = _.uniq(duplicates); // [1, 2, 3, 4, 5]

// Find difference between arrays
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const diff = _.difference(arr1, arr2); // [1]

// npm/yarn
// npm is the default package manager for Node.js
// Installing packages globally & locally
// npm install <package-name> -g // globally
