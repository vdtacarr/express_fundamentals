const express = require("express");

const users=[
    {
        "id":1,name:"vedat acar",place:"İstanbul"
    },
    {
        "id":2,name:"iso",place:"Bursa"
    }
];

const app = express();
const PORT = 5000;

app.get("/users",(req,res,next)=>{

res.send("<h1>Hello Express</h1>");

});


app.listen(PORT,()=>{
    console.log("Server started at" + PORT);
})