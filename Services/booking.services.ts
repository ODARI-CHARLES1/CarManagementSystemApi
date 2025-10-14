import * as bookingRepositories from '../Repository/booking.repository'

export const fetchBookings = async () => {
  const bookings = await bookingRepositories.fetchBookings()
  return bookings
}

export const addBookingInfo = async (bookingInfo: any) => {
  const newBookingInfo = await bookingRepositories.BookingInfo(bookingInfo)
  return newBookingInfo
}

export const updateBooking = async (updateInfo: any) => {
  const updatedBookingInfo = await bookingRepositories.updateBooking(updateInfo)
  return updatedBookingInfo
}

export const fetchBookingById = async (id: string) => {
  const bookingInfo = await bookingRepositories.fetchBookingById(id)
  return bookingInfo
}

export const DeleteBookingById = async (id: string) => {
  const deleteBookingById = await bookingRepositories.DeleteBookingById(id)
  return deleteBookingById;
}