const express  = require('express')
const bodyParser = require('body-parser')
const socket = require('socket.io')
const cors = require('cors')


const app = new express()
app.use(bodyParser.json())
app.use(cors())

var server = app.listen(5000,()=>{
  console.log("Howdy, I am running at PORT 5000")
})

// Setting up Socket.io

let io =  socket(server);

io.on("connection", function(socket){
  console.log("Socket Connection Established with ID :"+ socket.id)
})


// app.get('/chat', async (req,res) => {
//   let result = await message.find()
//   res.send(result);
// })