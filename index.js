const express = require("express")
const app = express()
const {Server} = require("socket.io")
const cors = require("cors")
app.use(cors())
require("dotenv").config()

const http = require("http")
let server = http.createServer(app)

const io = new Server(server,{
    cors:{
        origin:"https://my-app-rose-six.vercel.app",
        methods:["GET","POST"]
    }
})

io.on("connection",(socket)=>{

    console.log("User connected :"+socket.id)
    socket.on("send_message",(data)=>{

        socket.broadcast.emit("receive_message",data)

    })

})

server.listen(process.env.port,()=>{
    console.log("Server is running")
})