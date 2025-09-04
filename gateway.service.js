// this file is made to connect two different route and services 

const express = require('express')
const app = express();

const proxy = require('express-http-proxy')

app.use('/stress' , proxy('http://localhost:4001'))           // this is for stress.service.js
app.use('/' , proxy('http://localhost:4002'))                 

// this is for another route  now for connecting both services in single server we have to port the route that has to connect with gateway. in this case "/" route so port the "/" route and then set to public , copy the link and paste on gateway service ( app.use('/' , proxy(' PASTE THE COPY URL FROM PORT ')) ). then also listen gateway service 

app.listen(4000 , ()=>{
    console.log('running gateway');
    
})

