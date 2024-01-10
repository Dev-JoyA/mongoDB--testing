import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import {config} from './config/config';
dotenv.config()
 
const app = express()

const port = config.server.port

mongoose.connect(config.mongo.url);
const db = mongoose.connection;
db.on("error", (err)=>console.log(err));
db.once("open", () => {
    console.log("Database connected successfully")
    startServer();
})

const startServer = () => {
    app.listen(port, ()=> {
        console.log(`Server listening on port ${port}`)
    })
}