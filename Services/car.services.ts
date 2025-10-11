import * as carRepositories from '../Repository/car.repository'

export const fetchCars=async()=>{
    const cars=await carRepositories.fetchCars()
    return cars
}

export const addCarInfo=async(carInfo:any)=>{
   const newCarInfo=await carRepositories.CarInfo(carInfo)
   return newCarInfo
}