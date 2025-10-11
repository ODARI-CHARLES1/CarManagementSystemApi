

import * as carServices from '../Services/car.services'
import {Request,Response} from 'express'
export const fetchCars=async(req:Request,res:Response)=>{
    try {
        const cars=await carServices.fetchCars()
        res.status(200).json({success:true,cars:cars})
    } catch (error:any) {
        res.status(500).json({Message:error.message,success:false})
    }
}

export const saveCar=async(req:Request,res:Response)=>{
    try {
        const savedCarInfo=await carServices.addCarInfo(req.body)
        console.log(req.body)
        res.status(200).json({success:true,savedCarInfo:savedCarInfo})
    } catch (error:any) {
        res.status(500).json({message:error.message,success:false})
    }
}