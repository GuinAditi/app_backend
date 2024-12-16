//import the express module
//
const express= require('express');


const mongoose=require('mongoose');
const authRouter=require('./routes/auth');
//define the port number the server will listen on 
const PORT=3000;

//create an instance of an express application
//because it give us the starting point

const app=express();
//mongodb string
const DB="mongodb+srv://aditiguin29:amarbadiesho2024@cluster0.i3vwr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//request,response
//req allows to accress data that user sends
//response:account has ben succefully sent feedback
// app.get("/hello",(req,res)=>{
//     res.send('Hello world');
// }

// );

//middleware - to register routes or to mount routes
app.use(express.json());
app.use(authRouter);

mongoose.connect(DB).then(()=>{
    console.log('MongoDB connected');
});



//start the server and listen on the specified part

app.listen(PORT,"0.0.0.0",function(){
    //Log the number
    console.log(`server is running on port${PORT}`);

})