import * as locationServices from '../Services/location.services'
import { Request, Response } from 'express'

export const fetchLocations = async (req: Request, res: Response) => {
  try {
    const locations = await locationServices.fetchLocations()
    res.status(200).json({ success: true, locations: locations })
  } catch (error: any) {
    res.status(500).json({ Message: error.message, success: false })
  }
}

export const saveLocation = async (req: Request, res: Response) => {
  try {
    const savedLocationInfo = await locationServices.addLocationInfo(req.body)
    console.log(req.body)
    res.status(200).json({ success: true, savedLocationInfo: savedLocationInfo })
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false })
  }
}

export const updateLocation = async (req: Request, res: Response) => {
  try {
    const updatedLocationInfo = await locationServices.updateLocation(req.body)
    res.status(200).json({ success: true, updatedLocationInfo: updatedLocationInfo })
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false })
  }
}

export const fetchLocationById = async (req: Request, res: Response) => {
  try {
    const fetchLocationById = await locationServices.fetchLocationById(req.params.id)
    res.status(200).json({ success: true, location: fetchLocationById })
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false })
  }
}

export const DeleteLocationById = async (req: Request, res: Response) => {
  try {
    const DeleteLocationById = await locationServices.DeleteLocationById(req.params.id)
    res.status(200).json({ success: true, message: DeleteLocationById })
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false })
  }
}

