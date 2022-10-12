const express = require("express");
const cors = require("cors");
const app=express();

app.use(cors());
app.use(express.json());
const port=process.env.PORT || 5000;
app.get("/",(req,res)=>{
    res.send("Look Mama !I can do node now...restart this");
})
const users = [
  {
    id: 1,
   name:"Maria Jahan",
   email:"mj@gmail.com"
  },
  {
    userId: 1,
    id: 2,
    name:"kutu mia",
    email:"hm@gmail.com"
  },
  {
   
    id: 3,
   name:"mahba khatun",
   email:"hm2@gmail.com"
  },
  {
   
    id: 4,
    name:"Masud Evan",
    email:"me@gmail.com"
  },
];
app.get("/user",(req,res)=>{
    console.log("query",req.query);
    res.send(users);
})
app.get("/user/:id",(req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user=users.find(u=>u.id==id);
    res.send(user);
})
app.post("/user",(req,res)=>{
    console.log("request",req.body);
    const user=req.body;
    user.id=users.length+1;
    users.push(user);
    res.send(user)
})
app.listen(port,()=>{
    console.log("Listening to port",port);
})
