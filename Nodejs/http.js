const http = require('http');
// const fs = require('fs');
// const url = require('url')
const express = require("express")

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/',(req,res)=>{
    res.send("Welcome to Home Page");
})
app.get('/about',(req,res)=>{
    const name = req.query.username;
    res.send(name);
        // res.send("Welcome to about Page");
})

// const server = http.createServer((req,res)=>{
//     const log = Date.now() + ' - ' + req.method + ' ' + req.url + '\n';
//     const myUrl = url.parse(req.url,true)
//     console.log(myUrl)
//     switch(myUrl.pathname){
//         case  '/' :
//              res.end("Welcome to Home Page");
//         break;
//         case  '/about' : 
//         const name = myUrl.query.username;
//         res.end(name);
//         break;
//         default : res.end("Page Not Found");
//         break;
//     }
//     fs.appendFile('data.txt', `Request URL: ${req.url}  in Time : ${log}\n`, (err,data) => {
//         res.end("Error logging request");
//     });
    
// })

const server = http.createServer(app);
server.listen(4000,()=> console.log("server start"));