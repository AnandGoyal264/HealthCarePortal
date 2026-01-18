import express from "express";
import cors from "cors";
import connecttoDB from './config/db.js'
import dotenv from "dotenv";
dotenv.config();

const app=express()
connecttoDB()
app.listen(process.env.port,()=>{
    console.log("port has been initialised")
});
