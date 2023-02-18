

// // 1) mongodb connection with node.js...

// // const {MongoClient}= require('mongodb')
// // const url = 'path(local mongodb)'
// // const client = new MongoClient(url)
// // const database = 'database name'

// // // make a new file for dbconnection name as dbconnection

// // const dbconnection= async ()=>{
// //     let result = await client.connect();
// //     let db= result.db(database)
// //     return db.collection('collection name')   
// // }

// // // Read data from mongodb 1 Methods with promise:
// // dbconnection().then((resp)=>{
// //     resp.find({}).toArray().then((data)=>{
// //         console.log(data)
// //     })    
// // })

// // // Read data from mongodb 2 Methods with Async and await:
// // const finded = async () =>{
// //     let result = await dbconnection();
// //     let data = await result.find({}).toArray();
// //     console.log(data)
// // }


// // // 2) create insert and read(find) and update and delete through/with node.js...

// // const inserted = async () =>{
// //     let result = await dbconnection();
// //     let data = await result.insert({name:"asghar",price:1234}).toArray();
// //     console.log(data)
// // }

// // const updated = async () =>{
// //     let result = await dbconnection();
// //     let data = await result.updateOne({name:"asghar"},{$set:{price:1234}}).toArray();
// //     console.log(data)
// // }

// // const deleteed = async () =>{
// //     let result = await dbconnection();
// //     let data = await result.deleteOne({name:"asghar"}).toArray();
// //     console.log(data)
// // }

// // //================== same output =======================

// // const getdata = async()=>{
// //     let result = await client.connect();
// //     let db= result.db(database)
// //     let collection = db.collection('collection name')
// //     let resp = await collection.find({name:"asghar"}).toArray()
// //     console.log(resp)
// // }

// // const insertdata = async()=>{
// //     let result = await client.connect();
// //     let db= result.db(database)
// //     let collection = db.collection('collection name')
// //     let resp = await collection.insert({name:"asghar"}).toArray()
// //     console.log(resp)
// // }

// // const updatedata = async()=>{
// //     let result = await client.connect();
// //     let db= result.db(database)
// //     let collection = db.collection('collection name')
// //     let resp = await collection.updateOne({name:"asghar"},{$set:{price:1234}}).toArray()
// //     console.log(resp)
// // }
// // const deletedata = async()=>{
// //     let result = await client.connect();
// //     let db= result.db(database)
// //     let collection = db.collection('collection name')
// //     let resp = await collection.deleteOne({name:"asghar"}).toArray() //deleteMany
// //     console.log(resp)
// // }

// // 3) get post put delete a data from node.js n express.js to mongodb database...
// // postman and react.js and angular.js se node.js pe data get krna..

// const express = require('express')
// const app = express();
// const dbconnection = require('dbconnection');

// app.get('./',async(req,res)=>{
//     let data = await dbconnection()
//     let result = data.find().toArray()
//     res.send(result)
// }).listen(3000)

// //postman request a body and get and add it by post method (express.json()) or insert data on database using post method
// app.use(express.json()) //before 4.6

// app.post('./',async(req,res)=>{
//     let data = await dbconnection()
//     let result = data.insert(req.body).toArray()
//     res.send(result)
// }).listen(3000)

// //params (req get by url)
// app.put('./:name',async(req,res)=>{
//     let data = await dbconnection()
//     let result = data.updateOne({name:req.params.name},{$set:req.body}).toArray()
//     res.send(result)
// }).listen(3000)

// app.delete('./:name',async(req,res)=>{
//     let data = await dbconnection()
//     let result = data.deleteOne({name:req.params.name}).toArray()
//     res.send(result)
// }).listen(3000)

// // incase of id we use to import mongodb
// const mongodb = require('mongodb')
// app.delete('./:_id',async(req,res)=>{
//     let data = await dbconnection()
//     let result = data.deleteOne({_id:new mongodb.ObjectId(req.params._id)}).toArray()
//     resp.send(result)
// }).listen(3000)





// // 4) mongoose Schema and model
// //====================================================================
// // const mongooes = require('mongooes')

// // const main = async () =>{
// //     await mongooes.connect("url")
// //     const productsch = new mongooes.Schema({
// //         name:String,
// //         price:Number
// //     });
// //     const productmodel = mongooes.model('tablename',productsch)
// //     let data = new productmodel({name:"m A",price:1200})
// //     let result = await data.save()
// //     console.log(result)

// // }
// // main()

// // crud operations on mongooes

// // mongooes.connect("url")

// // const productsch = new mongooes.Schema({
// //     name:String,
// //     price:Number
// // });

// // const save = async()=>{
// //     const productmodel = mongooes.model('tablename',productsch)
// //     let data = new productmodel({name:"m A",price:1200})
// //     let result = await data.save()
// //     console.log(result)
// // }

// // const update = async()=>{
// //     const productmodel = mongooes.model('tablename',productsch)
// //     let data = await productmodel.updateOne({name:"asghar"},{$set:{price:1234}})
// //     console.log(data)
// // }

// // const deleteindb = async()=>{
// //     const productmodel = mongooes.model('tablename',productsch)
// //     let data = await productmodel.deleteOne({name:"asghar"})
// //     console.log(data)
// // }

// // const findindb = async()=>{
// //     const productmodel = mongooes.model('tablename',productsch)
// //     let data = await productmodel.find({name:"asghar"})
// //     console.log(data)
// // }



// // search API in node with mongodb





