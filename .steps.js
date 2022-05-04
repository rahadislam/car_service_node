/***
 * step 1:npm init -y all package install then create index.js fills 
 * step 2:npm i express cors mongodb dotenv 
 * step 3:now 5 command type bulid a basic server 
 * const express = require('express');
const app=express();
const port=process.env.PORT || 5000;

app.get('/',(req,res)=>{
    res.send('welcome genius server!!!!');
})

app.listen(port,()=>{
    console.log('the genius server is running');
})
 * step 4:mongo db connect code and .env fills create environment variable.environment variable must use process.env.variable name ,other program error
 * 
 * step 5:search node momgodb crud oparetion then example crud click and use async funtion 
 * step 6:before client variable cut and use async function ,requird run() function call run().catch(console.dir)
 * **/ 