import { config } from "dotenv";
import { getPool } from "../Config/db";
import sql from 'mssql'
config();

//save booking info into the DB
export const BookingInfo = async (bookingInfo: any) => {
  try {
    const {
      Car_id,
      Customer_id,
      Rental_Start_Date,
      Rent_End_Date,
      Total_Amount,
    } = bookingInfo;

    const pool = await getPool();
    await pool
      .request()
      .input('carId', sql.Int, Car_id)
      .input('customerId', sql.Int, Customer_id)
      .input('rentalStartDate', sql.Date, Rental_Start_Date)
      .input('rentEndDate', sql.Date, Rent_End_Date)
      .input('totalAmount', sql.Money, Total_Amount)
      .query(
        'INSERT INTO Booking (Car_id, Customer_id, Rental_Start_Date, Rent_End_Date, Total_Amount) VALUES (@carId, @customerId, @rentalStartDate, @rentEndDate, @totalAmount)'
      );

    const savedBooking = await pool.request().input("id", sql.Int, Car_id).query("SELECT * FROM Booking WHERE Car_id=@id")
    return savedBooking.recordset;
  } catch (error) {
    console.error('Failed to save booking info', error);
    throw error;
  }
};

//update booking information
export const updateBooking = async (updateInfo: any) => {
  try {
    const { Booking_id, Car_id, Customer_id, Rental_Start_Date, Rent_End_Date, Total_Amount } = updateInfo;
    let exist: boolean = false;
    const pool = await getPool();
    const BookingExist = await pool
      .request()
      .input("bookingId", sql.Int, Booking_id)
      .query("SELECT * FROM Booking WHERE Booking_id=@bookingId");
    if (BookingExist.recordset.length > 0) {
      exist = true;
    } else {
      exist = false;
    }
    if (!exist) return;
    const updatedBooking = await pool
      .request()
      .input("carId", sql.Int, Car_id)
      .input("customerId", sql.Int, Customer_id)
      .input("rentalStartDate", sql.Date, Rental_Start_Date)
      .input("rentEndDate", sql.Date, Rent_End_Date)
      .input("totalAmount", sql.Money, Total_Amount)
      .input("bookingId", sql.Int, Booking_id)
      .query("UPDATE Booking SET Car_id=@carId, Customer_id=@customerId, Rental_Start_Date=@rentalStartDate, Rent_End_Date=@rentEndDate, Total_Amount=@totalAmount WHERE Booking_id=@bookingId");
    if (!updatedBooking) {
      return;
    }
    return updatedBooking.recordset;
  } catch (error) {
    console.log("Failed to update booking info", error);
    throw error;
  }
};

//get booking list
export const fetchBookings = async () => {
  try {
    const pool = await getPool()
    const Bookings = await pool.request().query("SELECT * FROM Booking")
    if (!Bookings.recordset) {
      return;
    }
    return Bookings.recordset
  } catch (error) {
    console.log("Failed to fetch bookings")
    throw error
  }
}

//fetch booking by id
export const fetchBookingById = async (id: string) => {
  try {
    const pool = await getPool()
    const bookingById = await pool.request().input("id", sql.Int, parseInt(id)).query("SELECT * FROM Booking WHERE Booking_id=@id")
    if (!bookingById.recordset) return;
    return bookingById.recordset
  } catch (error) {
    console.log("Failed to fetch booking by id", error);
    throw error;
  }
}

//deleting booking by id
export const DeleteBookingById = async (id: string) => {
  try {
    const pool = await getPool();
    const existingBooking = await pool.request()
      .input('id', sql.Int, parseInt(id))
      .query('SELECT * FROM Booking WHERE Booking_id = @id');

    if (existingBooking.recordset.length === 0) {
      return { message: `Booking with ID ${id} does not exist.` };
    }

    await pool.request()
      .input('id', sql.Int, parseInt(id))
      .query('DELETE FROM Booking WHERE Booking_id = @id');

    return { message: `Booking with ID ${id} deleted successfully.` };
  } catch (error) {
    console.error('Failed to delete booking by ID:', error);
    throw error;
  }
};