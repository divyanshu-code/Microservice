const express = require('express')
const morgan = require('morgan')

const app = express();
app.use(morgan('dev'))


app.get('/stress' , (req , res)=>{

    for(let i =0 ;i<1000000000 ; i++){
         
    }    
    res.send("hello divyanshu")
    
})

app.listen(4001 , ()=>{
    console.log('running 4001');
    
})