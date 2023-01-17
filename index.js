var express = require("express")
var app = express()
var http = require("http").createServer(app)
var io= require("socket.io")(http)

io.on("connection", socket =>{
    socket.on("disconnect", () => {
      console.log("x disconnect");
    });

    socket.on("OK", (data) => {
      console.log(data.nome);
    });

    socket.on("word", data =>{
        console.log(data);
        socket.emit("result", data)
    })
})

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("index")
})

http.listen(3000)