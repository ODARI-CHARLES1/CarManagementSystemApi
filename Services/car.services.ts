import * as carRepositories from '../Repository/car.repository'

export const fetchCars=async()=>{
    const cars=await carRepositories.fetchCars()
    return cars
}

export const addCarInfo=async(carInfo:any)=>{
   const newCarInfo=await carRepositories.CarInfo(carInfo)
   return newCarInfo
}

export const updateCarManufacturer=async(updateInfo:any)=>{
    const updatedCarInfo=await carRepositories.updateCarManufacturer(updateInfo)
    return updatedCarInfo
}
export const updateCarModel=async(updateInfo:any)=>{
    const updatedCarInfo=await carRepositories.updateCarModel(updateInfo)
    return updatedCarInfo
}

export const updateCarYear=async(updateInfo:any)=>{
    const updatedCarInfo=await carRepositories.updateCarYear(updateInfo)
    return updatedCarInfo
}


export const updateCarColor=async(updateInfo:any)=>{
    const updatedCarInfo=await carRepositories.updateCarColor(updateInfo)
    return updatedCarInfo
}

export const updateCarRentalRate=async(updateInfo:any)=>{
    const updatedCarInfo=await carRepositories.updateCarRentalRate(updateInfo)
    return updatedCarInfo
}

export const updateCarAvailability=async(updateInfo:any)=>{
    const updatedCarInfo=await carRepositories.updateCarAvailability(updateInfo)
    return updatedCarInfo
}

export const fetchCarById=async(id:string)=>{
    const updatedCarInfo=await carRepositories.fetchCarById(id)
    return updatedCarInfo
}

export const DeleteCarById=async(id:string)=>{
    const deleteCarById=await carRepositories.DeleteCarById(id)
    return deleteCarById;
}



