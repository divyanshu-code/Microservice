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

// synchronus communications **************************

// the commnications held between the services where one services depend on other services. 
// like  for creating ride in uber clone we need logged in user . so we have to check for loggedin user for this we want user data and token .here we get the data through axios from user which is good but here is one problem that the ride now totally depend on user . if user get stucked then ride also get stucked .


// RabbitMQ *************************

// it is a message broker which is used to connect all different microservices for asynchronous communications.
