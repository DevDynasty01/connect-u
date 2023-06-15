const cors= require('cors')
const express = require('express')
const promisePool = require('./PromisePool.js').promisePool

const PORT=8080
const app= express()
const corsOptions = {
    origin:['http://localhost:3000'], optionSuccessStatus:200}

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({extended:true}));


    app.get('/UsersDB', cors(corsOptions), async(req,res)=>{
       
        const [result]= await promisePool.query('SELECT * FROM UsersDB')
        const body= result[0]
        res.send(body)
    })
    
    app.listen(PORT, ()=> {
        console.log(`Express web API running on port: ${PORT}.`)
    });
    

