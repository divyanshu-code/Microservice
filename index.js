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

// RabbitMQ helps in asynchoronus communication like we have different services in their folder for eg users , captains , and rides .   
// now for creating there must be a users . we have to check is user available or not . we get the user data from user through axios i.e is synchronous communications . means now ride totally depends on users if somehow users service fall down then ride service also fall down .

// now we have users data also now create ride and ride has been created now we have to send this ride detail to captain service. so that captain can know the pickup and destination point . since we can not send the ride detail directly to captain so we use rabbitMQ.

// to use RabbitMQ we have to installed one library in all services i.e.  npm i amqplib 
// then get a url from the free website   ( cloudampq )   paste the url inside .env file.

// important step :- we have to connect all service with RabbitMQ .

// RabbitMQ is connected to the ride , user , captain individual . now rabbitMQ is connected to all the services . if any service want or send the data to any services . service will  publishtoqueue i.e. RabbitMQ then RabbitMQ send the data to the services.

// for eg we have create a ride then we have to send the ride detail to  the captain then in ride service will publishtoqueue . then where we want to send the data in this case in captain will recieve that data through the function subscribetoqueue 

// note :- publishtoqueue and subscribetoqueue is function inside rabbit.js . rabbit.js is function which will connect all service with rabbitMQ individual it means this rabbit.js function created in all services.

// Long polling 

// Long polling is a technique where the client sends a request and the server holds the connection open until new data is available or a timeout occurs, thereby reducing the number of empty requests.

