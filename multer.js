
// // multer is used to upload a file 
// const express = require('express')
// const app = express()
 
// const multer= require('multer')

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: function (req, file, callback) {
//             callback(null, 'uploads');
//         },
//         filename: function (req, file, callback) {
//             callback(null,file.fieldname+'-'+Date.now()+'.jpg');
//         }
//     })
    
// }).single('user_file')

// app.post('/upload',upload,(req,resp)=>{
//     resp.send("file uploaded !..!... ")

// })
// app.listen(5000)