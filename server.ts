import express from 'express'
import {config} from 'dotenv'
import { getPool } from './Config/db.js'
config()
const app=express()
app.use(express.json())
const PORT=process.env.PORT || 5000

app.get("/",(req,res)=>{
    res.status(200).json("Serving running........")
})

app.listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`))

//Creating a pool...
const pool=getPool()
pool.then(()=>console.log("Database Connected Succesfully"))
.catch(err=>console.log("Failed connect..DB"))