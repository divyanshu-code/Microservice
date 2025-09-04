// microservice  :- microservice is term that allow us to enhanced performance of individual part . it break down the large server into small parts. for every work there are differnet services.
// it also gives the feature of different codebase. it means we can use a differnet codebase (langauges) in differnet microservices.

// monlithic : the normal server that handles multiple request.

// autocannon :- autocannon is package in npm that allow us to test the server that how it respond in heavy load manaully .

// morganlogger :- it is also npm package that gives the information about route that which route hit on server and how many time it takes to respond.

const express = require('express')
const morgan = require('morgan')

const app = express();
app.use(morgan('dev'))

app.get('/' , (req , res)=>{

    for(let i =0 ;i<1000000000 ; i++){
         
    }    
    res.send("hello divyanshu")
    
})

app.get('/stress' , (req , res)=>{

    for(let i =0 ;i<1000000000 ; i++){
         
    }    
    res.send("hello divyanshu")
    
})

app.listen(4000 , ()=>{
      console.log("running in 4000 port");
      
})

// so we can see the result when we get a multiple request in the server 4000 through autocannon then the server 4000 gets heavy load and it is not able to accept many request . basically it crashed  

// to solve this problem we use microservices where we make a differ differ service for differ route like in this case for "/stress" make stress.service.js and same for    "/" route.

// gateway.service for connecting the both two services in single server.      install ( npm i express-http-proxy )