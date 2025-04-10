// express is a web framework for Node.js.
// it is a middleware that allows you to create a server.

// create a server
const express = require('express');
const app = express();

// start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// define a route for a web page
app.get('/', (req, res) => {
    res.send('Hello World');
});


// middleware
// middleware is a function that has access to the request object, the response object, and the next function in the application's request-response cycle.
// middleware can modify the request and response objects.
// middleware can terminate the request-response cycle.
// middleware can call the next middleware in the application's request-response cycle.

// example of middleware
app.use((req, res, next) => {
    console.log('Middleware');
    next();
});

// static files
app.use(express.static('public'));

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// RESTful APIs (GET, POST, PUT, DELETE)

// GET request
// GET request is used to get data from the server.
app.get('/api/users', (req, res) => {
    res.json({ message: 'GET request received' });
}); 
 
// POST request
// POST request is used to send data to the server.
app.post('/api/users', (req, res) => {
    res.json({ message: 'POST request received' });
}); 

// PUT request
// PUT request is used to update data on the server.
app.put('/api/users/:id', (req, res) => {
    res.json({ message: 'PUT request received' });
});  

// DELETE request
// DELETE request is used to delete data from the server.
app.delete('/api/users/:id', (req, res) => {
    res.json({ message: 'DELETE request received' });
});   

// Request & response handling

// Request object
// The request object (req) contains information about the incoming HTTP request (like parameters, headers, body, etc.)
// Response object
// The response object can be used to send a response to the client(like sending JSON, HTML, status codes, etc.)
// exemple of response & requestobject
 app.get('/api/users/:id', (req, res) => {
    // req.params is used to get the parameters from the url.
    // req.files is used to get the files from the request.
    // req.body is used to get the body of the request.
    // req.cookies is used to get the cookies of the request.
    // req.path is used to get the path of the request.
    res.json({ message: 'GET request received', id: req.params.id });
 });

// Error handling middleware  
// Error handling middleware is a function that has access to the request object, the response object, and the next function in the application's request-response cycle.
// Error handling middleware can modify the request and response objects. 
// Error handling middleware can terminate the request-response cycle.
// Error handling middleware can call the next middleware in the application's request-response cycle.  

// exemple of error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: 'Error' });
});









