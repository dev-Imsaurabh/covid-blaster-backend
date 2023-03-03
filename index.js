const express = require("express")
const app = express()
const {Server} = require("socket.io")
const cors = require("cors")
const wildcard =require('socketio-wildcard')();

app.use(cors())
require("dotenv").config()

const http = require("http")
let server = http.createServer(app)


app.get('/', (req, res) => {
    res.send("done");
  });
  app.get("/favicon",(req,res)=>{
   return 
  })
  


const io = new Server(server,{
    cors:{
        origin:"https://my-app-rose-six.vercel.app",
        methods:["GET","POST"]
    }
})
io.use(wildcard);


io.on("connection",(socket)=>{
    const THROTTLE_INTERVAL = 1000;

    console.log("User connected :"+socket.id)
    socket.on("send_message",(data)=>{
        const now = Date.now();

    if (now - lastEventTime > THROTTLE_INTERVAL) {
      // process the event normally
      lastEventTime = now;
    } else {
      // throttle the event
      console.log(`Throttling event: ${packet.data}`);
      socket.broadcast.emit("receive_message",data)
    }


    })

})

server.listen(process.env.port||4000,()=>{
    console.log("Server is running")
})