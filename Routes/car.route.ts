import * as carControllers from '../Controllers/car.controller'
import express from 'express'

const carRouter=express()

carRouter.get("/api/car",carControllers.fetchCars)
carRouter.post("/api/save-car",carControllers.saveCar)
export default carRouter