// const { rejects } = require('assert');
// const { promiseImpl } = require('ejs');

// const express = require('express');
// const { resolve } = require('path');
// const app = express();

// const path = require('path')
// const filespath = path.join(__dirname,'public')
// console.log("filepaths :",filespath);


// //=================================================================

// // Create a server and make static Api

// // const data = require('./data.js')

// // const http = require('http');
// // const { time } = require('console');
// // http.createServer((req , res)=>{
// //     res.writeHead(200,{'Content-Type':'application/json'})
// //     res.write(JSON.stringify(data))
// //     res.end();
// // }).listen(3000)
// //=================================================================





// console.log("a")
// let foo = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(console.log("b"))        
//     },2000)
// })
// foo.then((data)=>{console.log("c")})



// //=================================================================
// // Async problem and handle with (new Promise)

// // let a = 10;
// // let b = 20

// // let pro = new Promise((accept,reject)=>{
// //     setTimeout(()=>{
// //         accept(40); 
// //     },4000)

// // })

// // // console.log(a+b)
// // pro.then((data)=>{
// //     console.log("final data : ",data)
// //     b=data
// //     console.log(a+b);
// // })

// //=================================================================

// //==================================================
// // const data = require('./data')

// // app.get('',(req,res)=>{
// //     res.send(data);
// // }).listen(3000)
 
// // app.get('/About',(req,res)=>{
// //     console.log(req.query.name)
// //     res.send("This is About page "+req.query.name);
// // })

// // app.get('/Contact',(req,res)=>{
// //     console.log(req.query.name)
// //     res.send({
// //         name:'asghar',
// //         mail:'asghar@gmail.com',
// //     });
// // })
// //==================================================



// //======================================================

// //load html files by using use malmare express.static

// //app.use(express.static(filespath))

// // app.get('/about',(req , res)=>{
// //     res.sendFile(`${filespath}/about.html`)
// //     console.log(req.query.name)
// // })
// // app.get('',(req , res)=>{
// //     res.sendFile(`${filespath}/index.html`)
// //     console.log(req.query.name)
// // })

// //======================================================



// //======================================================

// // dynamic files or data by using ejs template engine

// // app.set('view engine','ejs')
// // app.get('/profile',(req,res)=>{
// //     const user={
// //         name:'Asghar',
// //         gender:"male",
// //         mail:"asghar@gmail.com",
// //         skills:['C#','JavaScript','Python']
// //     }
// //     res.render('profile',{user})

// // })
// // app.get('/help',(req,res)=>{
// //     res.render('help')
// // })

// //============================================================


// const middlemare = require('./middlemare.js')
// const route = express.Router()

// route.use(middlemare)

// app.get('',(req,res)=>{
//     res.send("hello MR.Asghar");
// })
// app.get('/gallery',(req,res)=>{
//     res.send("This is Gallery page ");
// }) 

// route.get('/about',(req,res)=>{
//     res.send("This is About page ");
// })

// app.get('/help',(req,res)=>{
//     res.send("This is Help page ");
// })

// app.use('/',route)

// app.listen(5000)
