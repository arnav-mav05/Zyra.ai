import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"

import dns from "dns";
// Change DNS
dns.setServers(["1.1.1.1", "8.8.8.8"]);


dotenv.config();

const app = express()
const port = process.env.PORT || 5000

app.listen(port , ()=>{
    console.log("server started")
    connectDB()
})