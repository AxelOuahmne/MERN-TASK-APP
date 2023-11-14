import { db } from "./config.js";

import express  from "express";
import  mongoose  from "mongoose";
import taskRouter from "./routes/tasksRoute.js";
import cors from 'cors';


const app = express();
app.use(express.json());
app.use(cors());
app.use('/tasks',taskRouter)

//conect to the database and chose the port
mongoose.connect(db).then(()=>{
    app.listen(5000,()=>{
        console.log("App is running on port 5000")
    })
}).catch(errro=>{
    console.log(errro)
})