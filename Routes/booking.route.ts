import * as bookingControllers from '../Controllers/booking.controller'
import express from 'express'

const bookingRouter = express()

bookingRouter.get("/api/booking", bookingControllers.fetchBookings)
bookingRouter.post("/api/save-booking", bookingControllers.saveBooking)
bookingRouter.put("/api/update-booking", bookingControllers.updateBooking)
bookingRouter.get("/api/booking/:id", bookingControllers.fetchBookingById)
bookingRouter.delete("/api/booking/:id", bookingControllers.DeleteBookingById)

export default bookingRouter