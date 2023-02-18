const {MongoClient} = require('mongodb')

const mongoose = require('mongoose')
const express = require('express') 
const app = express()


const url = 'mongodb+srv://asghar:asgharpoonja@cluster0.5x39oik.mongodb.net/test'
const client = new MongoClient(url)
const database = 'ecommerce'

//generate token 
var jwt = require('jsonwebtoken');



// crud operations with node.js 

const getdata = async()=>{
    let result = await client.connect();
    let db= result.db(database)
    let collection = db.collection('users')
    let resp = await collection.find({name:'poonja'}).toArray()
    console.log("response : ",resp)
}
// getdata()

const insertdata = async()=>{
    let result = await client.connect();
    let db= result.db(database)
    let collection = db.collection('users')
    let resp = await collection.insertOne({name:"abc",email:'abc@gmail.com'}).toArray()
    console.log(resp)
}

// insertdata()

const updatedata = async()=>{
    let result = await client.connect();
    let db= result.db(database)
    let collection = db.collection('users')
    let resp = await collection.updateOne({name:'abc'},{$set:{name:'xyz'}}).toArray()
    console.log(resp)
}

// updatedata()

const deletedata = async()=>{
    let result = await client.connect();
    let db= result.db(database)
    let collection = db.collection('users')
    let resp = await collection.deleteOne({email:"asghar@gamil.com"}).toArray() //deleteMany
    console.log(resp)
}

// deletedata()







// const DB = 'mongodb+srv://asghar:asghar@cluster0.qjx6gve.mongodb.net/ecomm?retryWrites=true&w=majority'
// const DB1 = 'mongodb+srv://poonja:asgharpoonja@cluster0.qjx6gve.mongodb.net/ecomm?retryWrites=true&w=majority'
// const DB2= 'mongodb+srv://asghar:asgharpoonja@cluster0.5x39oik.mongodb.net/ecommerce?retryWrites=true&w=majority'
// const database = 'mongodb+srv://asghar:asgharpoonja@cluster0.5x39oik.mongodb.net/ecommerce?retryWrites=true&w=majority'

// const database = 'mongodb+srv://asghar:asgharpoonja@cluster0.5x39oik.mongodb.net/ecommerce?retryWrites=true&w=majority'
// mongoose.set('strictQuery', false);
// mongoose.connect(database, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify:false
// }).then((res) => {
//     console.log(res,`connnection successful`);
// }).catch((err) => console.log(`no connection`));


//==========================================================================
// API's

// app.get('/',async(req,res)=>{
//     let result = await client.connect();
//     let db= result.db(database)
//     let collection = db.collection('users')
//     let resp = await collection.find({}).toArray()
//     res.send(resp)
// })



// app.get('/signup',async(req,res)=>{
//     // res.send("hello and welcome signup page")
//     let result = await client.connect();
//     let db= result.db(database)
//     let collection = db.collection('users')
//     let resp = await collection.insertOne({name:"asghar",email:'asghar@gmail.com'}).toArray()
//     res.send(resp)
//     //console.log(resp)

// })

// app.use(express.json())
// app.post('/about',async(req,res)=>{
//     console.log("resp:",req.body)
//     let result = await client.connect();
//     let db= result.db(database)
//     let collection = db.collection('users')
//     let resp = await collection.insertOne(req.body).toArray()
//     res.send(resp)
// })

// app.put('/contact',async(req,res)=>{
//     let result = await client.connect();
//     let db= result.db(database)
//     let collection = db.collection('users')
//     let resp = await collection.updateOne({name:"atiya"},{$set:req.body}).toArray()
//     res.send("updated!")
//     console.log("name:",req.params.name)
// })

// app.delete('/user/:name',async(req,res)=>{
//     let result = await client.connect();
//     let db= result.db(database)
//     let collection = db.collection('users')
//     let resp = await collection.deleteOne({name:req.params.name}).toArray() //deleteMany
//     console.log(resp)

// })

//app.listen(3000)





// const mongooes = require('mongooes')

// const main = async () =>{
//     await mongooes.connect("mongodb+srv://asghar:asgharpoonja@cluster0.5x39oik.mongodb.net/test")
//     const productsch = new mongooes.Schema({
//         name:String,
//         email:String
//     });
//     const productmodel = mongooes.model('tablename',productsch)
//     let data = new productmodel({name:"m A",email:"mA@gmail.com"})
//     let result = await data.save()
//     console.log(result)

// }
// main()

// const url = 'mongodb+srv://asghar:asgharpoonja@cluster0.5x39oik.mongodb.net/test'
// const client = new MongoClient(url)
// const database = 'ecommerce'

// const database = 'mongodb+srv://asghar:asgharpoonja@cluster0.5x39oik.mongodb.net/ecommerce'
// mongoose.set('strictQuery', false);
// mongoose.connect(database, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify:false
// }).then((res) => {
//     console.log(res,`connnection successful`);
// }).catch((err) => console.log(`no connection`));




//====================================================================================
// with the help of mongoose crud operation

// const main = async () =>{
//     mongoose.set('strictQuery', false);
//     await mongoose.connect("mongodb+srv://asghar:asgharpoonja@cluster0.5x39oik.mongodb.net/ecommerce")
//     const productsch = new mongoose.Schema({
//         name:String,

//     });
//     const productmodel = mongoose.model('users',productsch)
//     let data = new productmodel({name:"mAP",email:'map@gmail.com'})
//     let result = await data.save()
//     console.log(result)

// }
// main()

mongoose.connect("mongodb+srv://asghar:asgharpoonja@cluster0.5x39oik.mongodb.net/ecommerce")
mongoose.set('strictQuery', false);

const productsch= new mongoose.Schema({
    name:String,
    email:String
})

const save = async ()=>{
    const productmodel = mongoose.model('users',productsch)
    let data = new productmodel({name:"Abbas",email:'abbas@gmail.com'})
    let result = await data.save()
    console.log(result)

}

//save()



const update = async()=>{
    const productmodel = mongoose.model('users',productsch)
    let data = await productmodel.updateOne({name:"Abbas"},{$set:{name:"abbasalamdar"}})
    console.log(data)
}

//update()

const deleted = async()=>{
    const productmodel = mongoose.model('users',productsch)
    let data = await productmodel.deleteOne({name:"pqr"})
    console.log(data)
}

//deleted()

const find = async()=>{
    const productmodel = mongoose.model('users',productsch)
    let data = await productmodel.find({name:"abc"})
    console.log(data)
}

//find()

//==========================================================================
// making api with mongoose

// app.use(express.json())

// app.post("/create",async(req,res)=>{
//     const productmodel = mongoose.model('users',productsch)
//     let data = new productmodel(req.body)
//     let result = await data.save()
//     console.log(req.body)
//     res.send(req.body)

// })


// app.put("/create/:name",async(req,res)=>{
//     const productmodel = mongoose.model('users',productsch)
//     let data = await productmodel.updateOne({name:req.params.name},{$set:req.body})    
//     res.send("done")
//     console.log(req.body)
//     console.log("asghar",req.params.name)

// })


// app.delete('/create/:name',async (req,res)=>{
//     const productmodel = mongoose.model('users',productsch)
//     let data = await productmodel.deleteOne({name:req.params.name})
//     res.send("Deleted!")
//     console.log(req.params.name)
// })


// app.get('/create',async(req,res)=>{
//     const productmodel = mongoose.model('users',productsch)
//     let data = await productmodel.find({})
//     console.log(data)
//     res.send(data)
// })

//app.listen(3000)


//=====================================================
//generate token
// var token = jwt.sign({ foo: 'bar' }, 'foooohhh');
// console.log("tokens :- ",token)


// const tk = await generateAuth()
// console.log(tk)
// const secretkey = 'fooohhh'

// productsch.methods.generateAuth= async function(){
//     try{
//         let tk = jwt.sign({foo: 'bar'},secretkey)
//         this.tokens = this.tokens.concat({token:token})
//         await this.save()
//         return token
//         console.log('token generate:',tk)

//     }
//     catch(err){
//         console.log(err)
//     }
// }


const bcrypt = require('bcrypt');

// const saltRounds = 10;
// const myPlaintextPassword = 's0/\/\P4$$w0rD';
// const someOtherPlaintextPassword = 'not_bacon';

// let hash = bcrypt.genSalt(saltRounds, function(err, salt) {
//     bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
//         // Store hash in your password DB.
//     })
// });

const hashed = bcrypt.hashSync('asghar', 10);
console.log("hashing :- ",hashed)

const hashing =async()=>{
    let hashed1 = await bcrypt.hash('asghar', 10);
    console.log("hash ho raha : ",hashed1)
}
hashing()

