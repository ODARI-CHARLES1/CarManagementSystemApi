import express from 'express'
import {config} from 'dotenv'
import { getPool } from './Config/db.js'
import { Request,Response } from 'express'
import carRouter from './Routes/car.route.js'
config()
const app=express()
app.use(express.json())
const PORT=process.env.PORT || 5000

app.get("/",(req:Request,res:Response)=>{
    res.status(200).json("Serving running........")
})

app.use("/",carRouter)
app.listen(PORT,()=>console.log(`Server running on http://localhost:${PORT}`))

console.log('testing....')
//Creating a pool...
const pool=getPool()
pool.then(()=>console.log("Database Connected Succesfully"))
.catch(err=>console.log("Failed connect..DB"))