// const express = require('express')
// const app = express()
// const con = require('./consql')


// app.get('/',(req,resp)=>{
//     con.query('SELECT * FROM databasename',(err,result)=>{
//         if(err){
//             resp.send(err)
//         }
//         else{
//             resp.send(result)
//         }
//     })
    
// })

// epp.use(express.json())
// app.post('/',(req,resp)=>{

//     con.query('INSERT INTO database SET ?',req.body,(err,result)=>{
//         if(err){
//             resp.send(err)
//         }
//         else{
//             resp.send(result)
//         }
//     })
    
// })

// app.put('/:id',(req,resp)=>{
//     const data = [req.body.name,req.body.password,req.params.id]
//     con.query('UPDATE user SET name = ? , password = ? WHERE id = ?',data,(err,result)=>{
//         if(err){
//             resp.send(err)
//         }
//         else{
//             resp.send(result)
//         }
//     })
    
// })

// app.delete('/:id',(req,resp)=>{
//     con.query('DELETE FROM user WHERE id = '+req.params.id,(err,result)=>{
//         if(err){
//             resp.send(err)
//         }
//         else{
//             resp.send(result)
//         }
//     })
    
// })

// app.listen(5000)


