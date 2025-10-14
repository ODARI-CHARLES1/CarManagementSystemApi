import { config } from "dotenv";
import { getPool } from "../Config/db";
import sql from 'mssql'
config();

//save location info into the DB
export const LocationInfo = async (locationInfo: any) => {
  try {
    const {
      Car_id,
      Location_Name,
      Location,
      Address,
      Contact_Number,
    } = locationInfo;

    const pool = await getPool();
    await pool
      .request()
      .input('carId', sql.Int, Car_id)
      .input('locationName', sql.VarChar, Location_Name)
      .input('location', sql.VarChar, Location)
      .input('address', sql.VarChar, Address)
      .input('contactNumber', sql.VarChar, Contact_Number)
      .query(
        'INSERT INTO Location (Car_id, Location_Name, Location, Address, Contact_Number) VALUES (@carId, @locationName, @location, @address, @contactNumber)'
      );

    const savedLocation = await pool.request().input("id", sql.Int, Car_id).query("SELECT * FROM Location WHERE Car_id=@id")
    return savedLocation.recordset;
  } catch (error) {
    console.error('Failed to save location info', error);
    throw error;
  }
};

//update location information
export const updateLocation = async (updateInfo: any) => {
  try {
    const { Location_id, Car_id, Location_Name, Location, Address, Contact_Number } = updateInfo;
    let exist: boolean = false;
    const pool = await getPool();
    const LocationExist = await pool
      .request()
      .input("locationId", sql.Int, Location_id)
      .query("SELECT * FROM Location WHERE Location_id=@locationId");
    if (LocationExist.recordset.length > 0) {
      exist = true;
    } else {
      exist = false;
    }
    if (!exist) return;
    const updatedLocation = await pool
      .request()
      .input("carId", sql.Int, Car_id)
      .input("locationName", sql.VarChar, Location_Name)
      .input("location", sql.VarChar, Location)
      .input("address", sql.VarChar, Address)
      .input("contactNumber", sql.VarChar, Contact_Number)
      .input("locationId", sql.Int, Location_id)
      .query("UPDATE Location SET Car_id=@carId, Location_Name=@locationName, Location=@location, Address=@address, Contact_Number=@contactNumber WHERE Location_id=@locationId");
    if (!updatedLocation) {
      return;
    }
    return updatedLocation.recordset;
  } catch (error) {
    console.log("Failed to update location info", error);
    throw error;
  }
};

//get location list
export const fetchLocations = async () => {
  try {
    const pool = await getPool()
    const Locations = await pool.request().query("SELECT * FROM Location")
    if (!Locations.recordset) {
      return;
    }
    return Locations.recordset
  } catch (error) {
    console.log("Failed to fetch locations")
    throw error
  }
}

//fetch location by id
export const fetchLocationById = async (id: string) => {
  try {
    const pool = await getPool()
    const locationById = await pool.request().input("id", sql.Int, parseInt(id)).query("SELECT * FROM Location WHERE Location_id=@id")
    if (!locationById.recordset) return;
    return locationById.recordset
  } catch (error) {
    console.log("Failed to fetch location by id", error);
    throw error;
  }
}

//deleting location by id
export const DeleteLocationById = async (id: string) => {
  try {
    const pool = await getPool();
    const existingLocation = await pool.request()
      .input('id', sql.Int, parseInt(id))
      .query('SELECT * FROM Location WHERE Location_id = @id');

    if (existingLocation.recordset.length === 0) {
      return { message: `Location with ID ${id} does not exist.` };
    }

    await pool.request()
      .input('id', sql.Int, parseInt(id))
      .query('DELETE FROM Location WHERE Location_id = @id');

    return { message: `Location with ID ${id} deleted successfully.` };
  } catch (error) {
    console.error('Failed to delete location by ID:', error);
    throw error;
  }
};