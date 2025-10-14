import * as bookingServices from '../Services/booking.services'
import { Request, Response } from 'express'

export const fetchBookings = async (req: Request, res: Response) => {
  try {
    const bookings = await bookingServices.fetchBookings()
    res.status(200).json({ success: true, bookings: bookings })
  } catch (error: any) {
    res.status(500).json({ Message: error.message, success: false })
  }
}

export const saveBooking = async (req: Request, res: Response) => {
  try {
    const savedBookingInfo = await bookingServices.addBookingInfo(req.body)
    console.log(req.body)
    res.status(200).json({ success: true, savedBookingInfo: savedBookingInfo })
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false })
  }
}

export const updateBooking = async (req: Request, res: Response) => {
  try {
    const updatedBookingInfo = await bookingServices.updateBooking(req.body)
    res.status(200).json({ success: true, updatedBookingInfo: updatedBookingInfo })
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false })
  }
}

export const fetchBookingById = async (req: Request, res: Response) => {
  try {
    const fetchBookingById = await bookingServices.fetchBookingById(req.params.id)
    res.status(200).json({ success: true, booking: fetchBookingById })
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false })
  }
}

export const DeleteBookingById = async (req: Request, res: Response) => {
  try {
    const DeleteBookingById = await bookingServices.DeleteBookingById(req.params.id)
    res.status(200).json({ success: true, message: DeleteBookingById })
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false })
  }
}