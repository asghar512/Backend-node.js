const express = require('express');
const app = express();
const eventsEmitter = require('events')
let EM = new eventsEmitter();
 
let count = 0
EM.on('foo', () => {
  count++;
  console.log('event fire ',count)
});

app.get('/',(req , res)=>{
    res.send("index page >>> ")
    EM.emit('foo');
})
app.listen(5000)


