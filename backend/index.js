const express = require("express");
const app = express();
var cors = require('cors')
const sercureApi = require('./model/secureApi')
app.use(cors());
app.use(express.json());

app.post('/api/v1/auth/registration',sercureApi,(req,res)=>{
    console.log(req.body)
})


app.listen(8000, ()=>{
    console.log('port is runing')
})