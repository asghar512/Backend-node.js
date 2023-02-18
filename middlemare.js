// module.exports = middlemare=(req,res,next)=>{
//     console.log("middleware")
//     if(!req.query.age){
//         res.send("No age given")
//     }
//     else if(req.query.age<18){
//         res.send("Age is given but less age")
//     }
//     else if(req.query.age>18){
//         res.send("A welcoome ")
        
//     }
//     else{
//         next();
//     }
    
// }