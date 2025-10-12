

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

export const updateCarManufacturer=async(req:Request,res:Response)=>{
    try {
        const updatedCarInfo=await carServices.updateCarManufacturer(req.body)
        res.status(200).json({success:true,updatedCarInfo:updatedCarInfo})
    } catch (error:any) {
         res.status(500).json({message:error.message,success:false})
    }
}

export const updateCarColor=async(req:Request,res:Response)=>{
    try {
        const updateCarColor=await carServices.updateCarColor(req.body)
        res.status(200).json({success:true,updatedCarColor:updateCarColor})
    } catch (error:any) {
     res.status(500).json({message:error.message,success:false})
    }
}

export const updateCarRentalRate=async(req:Request,res:Response)=>{
    try {
        const updateCarRentalRate=await carServices.updateCarRentalRate(req.body)
        res.status(200).json({success:true,updatedCarColor:updateCarRentalRate})
    } catch (error:any) {
     res.status(500).json({message:error.message,success:false})
    }
}

export const updateCarAvailability=async(req:Request,res:Response)=>{
    try {
        const updateCarAvailability=await carServices.updateCarAvailability(req.body)
        res.status(200).json({success:true,updatedCarColor:updateCarAvailability})
    } catch (error:any) {
     res.status(500).json({message:error.message,success:false})
    }
}

export const fetchCarById=async(req:Request,res:Response)=>{
    try {
        const fetchCarById=await carServices.fetchCarById(req.params.id)
        res.status(200).json({success:true,updatedCarColor:fetchCarById})
    } catch (error:any) {
     res.status(500).json({message:error.message,success:false})
    }
}

export const DeleteCarById=async(req:Request,res:Response)=>{
    try {
        const DeleteCarById=await carServices.DeleteCarById(req.params.id)
        res.status(200).json({success:true,updatedCarColor:DeleteCarById})
    } catch (error:any) {
     res.status(500).json({message:error.message,success:false})
    }
}









