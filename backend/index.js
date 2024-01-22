import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Clothe } from "./models/clothemodel.js";
import clotheRoute from "./routes/clotheRoute.js"
import cors from 'cors';

const  app = express();
app.use(cors());
// app.use(cors({
//     origin:'http://localhost:5555',
//     methods:['GET','POST','DELETE','PUT'],
//     allowedHeaders:['Content-Type']
// }));

app.use(express.json());

app.get('/',(request,response)=>{
    console.log(request);
    return response.status(234).send("Welcome to Fallujah")
})

app.use('/clothes',clotheRoute)


mongoose
.connect(mongoDBURL)
.then(()=>{
    console.log("app connected to db")
    app.listen(PORT,()=>{
        console.log(`connexion avec success on this port : ${PORT}`)
    })
    
})
.catch((error)=>{
    console.log(error);
})