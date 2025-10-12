import * as carControllers from '../Controllers/car.controller'
import express from 'express'

const carRouter=express()

carRouter.get("/api/car",carControllers.fetchCars)
carRouter.post("/api/save-car",carControllers.saveCar)
carRouter.put("/api/update-manufacturer",carControllers.updateCarManufacturer)
carRouter.put("/api/update-color",carControllers.updateCarColor)
carRouter.put("/api/update-rental-rate",carControllers.updateCarRentalRate)
carRouter.put("/api/update-availability",carControllers.updateCarAvailability)
carRouter.get("/api/car/:id",carControllers.fetchCarById)
carRouter.delete("/api/car/:id",carControllers.DeleteCarById)

export default carRouter