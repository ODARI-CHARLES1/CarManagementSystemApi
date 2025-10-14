import { config } from "dotenv";
import { getPool } from "../Config/db";
import sql from 'mssql'
config();

//save car info into the the DB
export const CarInfo = async (carInfo: any) => {
  try {
    const {
      Car_id,
      Car_model,
      Manufacturer,
      Year,
      Color,
      Rental_rate,
      Availability,
    } = carInfo;

    const pool = await getPool();
    await pool
      .request()
      .input('carid', sql.VarChar, Car_id)
      .input('carModel', sql.VarChar, Car_model)
      .input('manufacturer', sql.VarChar, Manufacturer) // ✅ fixed spelling
      .input('year', sql.Int, Year)
      .input('color', sql.VarChar, Color)
      .input('rentalRate', sql.Decimal(10, 2), Rental_rate)
      .input('availability', sql.Bit, Availability)
      .query(
        'INSERT INTO Car (Car_id, Car_model, Manufacturer, Year, Color, Rental_rate, Availability) VALUES (@carid, @carModel, @manufacturer, @year, @color, @rentalRate, @availability)'
      );

    const savedCar=await pool.request().input("id",Car_id).query("SELECT * FROM Car WHERE car_id=@id")
    return savedCar.recordset;
  } catch (error) {
    console.error('Failed to save rented car info', error);
    throw error;
  }
};

//update car manufacturer information
export const updateCarManufacturer = async (updateInfo:any) => {
  try {
    const {manufacturer,car_id}=updateInfo
    let exist: boolean = false;
    const pool = await getPool();
    const CarExist = await pool
      .request()
      .input("carId",sql.VarChar, car_id)
      .query("SELECT * FROM Car WHERE car_id=@carId");
    if (CarExist.recordset) {
      exist = true;
    } else {
      exist = false;
    }
    if (!exist) return;
    const updatedCarManufacturerr = await pool
      .request()
      .input("manufacturer",sql.VarChar, manufacturer)
      .input("carId",sql.VarChar, car_id)
      .query("UPDATE Car SET Manufacturer=@manufacturer WHERE car_id=@carId");
    if (!updatedCarManufacturerr) {
      return;
    }
    return updatedCarManufacturerr.recordset;
  } catch (error) {
    console.log("Failed to update car info", error);
    throw error;
  }
};

//update car model
export const updateCarModel = async (updateCarInfo:any) => {
  try {
    const{carModel,car_id}=updateCarInfo
    let exist: boolean = false;
    const pool = await getPool();
    const CarExist = await pool
      .request()
      .input("carId",sql.VarChar, car_id)
      .query("SELECT * FROM Car WHERE car_id=@carId");
    if (CarExist.recordset) {
      exist = true;
    } else {
      exist = false;
    }
    if (!exist) return;
    const updatedCarModel = await pool
      .request()
      .input("carModel", carModel)
      .input("carId", car_id)
      .query("UPDATE Car SET carModel=@carModel WHERE car_id=@carId");
    if (!updatedCarModel) {
      return;
    }
    return updatedCarModel.recordset;
  } catch (error) {
    console.log("Failed to update car info", error);
    throw error;
  }
};

//updature manufactured year.
export const updateCarYear = async (updateInfo:any) => {
  try {
    const {Year,car_id}=updateInfo;
    let exist: boolean = false;
    const pool = await getPool();
    const CarExist = await pool
      .request()
      .input("carId",sql.VarChar, car_id)
      .query("SELECT * FROM Car WHERE car_id=@carId");
    if (CarExist.recordset) {
      exist = true;
    } else {
      exist = false;
    }
    if (!exist) return;
    const updatedYear = await pool
      .request()
      .input("Year",sql.Int, Year)
      .input("carId",sql.VarChar, car_id)
      .query("UPDATE Car SET Year=@Year WHERE car_id=@carId");
    if (!updatedYear) {
      return;
    }
    return updatedYear.recordset;
  } catch (error) {
    console.log("Failed to update car info", error);
    throw error;
  }
};

//update car color
export const updateCarColor = async (updateInfo:any) => {
  try {
    const {CarColor,car_id}=updateInfo
    let exist: boolean = false;
    const pool = await getPool();
    const CarExist = await pool
      .request()
      .input("carId",sql.VarChar, car_id)
      .query("SELECT * FROM Car WHERE car_id=@carId");
    if (CarExist.recordset) {
      exist = true;
    } else {
      exist = false;
    }
    if (!exist) return;
    const updatedCarColor = await pool
      .request()
      .input("CarColor",sql.VarChar, CarColor)
      .input("carId",sql.VarChar, car_id)
      .query("UPDATE Car SET CarColor=@CarColor WHERE car_id=@carId");
    if (!updatedCarColor) {
      return;
    }
    return updatedCarColor.recordset;
  } catch (error) {
    console.log("Failed to update car info", error);
    throw error;
  }
};

//update Rental_Rate
export const updateCarRentalRate = async (
  updateInfo:any
) => {
  try {
    const {car_id,CarRentalRate}=updateInfo
    let exist: boolean = false;
    const pool = await getPool();
    const CarExist = await pool
      .request()
      .input("carId",sql.VarChar, car_id)
      .query("SELECT * FROM Car WHERE car_id=@carId");
    if (CarExist.recordset) {
      exist = true;
    } else {
      exist = false;
    }
    if (!exist) return;
    const updatedCarRentalRate = await pool
      .request()
      .input("CarRentalRate",sql.Decimal, CarRentalRate)
      .input("carId",sql.VarChar, car_id)
      .query("UPDATE Car SET CarRentalRate=@CarRentalRate WHERE car_id=@carId");
    if (!updatedCarRentalRate) {
      return;
    }
    return updatedCarRentalRate.recordset;
  } catch (error) {
    console.log("Failed to update car info", error);
    throw error;
  }
};

//update car Availabitility..
export const updateCarAvailability = async (
  updateInfo:any
) => {
  try {
    const{car_id,CarAvailability}=updateInfo
    let exist: boolean = false;
    const pool = await getPool();
    const CarExist = await pool
      .request()
      .input("carId", car_id)
      .query("SELECT * FROM Car WHERE car_id=@carId");
    if (CarExist.recordset) {
      exist = true;
    } else {
      exist = false;
    }
    if (!exist) return;
    const updatedCarAvailability = await pool
      .request()
      .input("CarAvailability",sql.Bit, CarAvailability)
      .input("carId",sql.VarChar, car_id)
      .query(
        "UPDATE Car SET CarAvailability=@CarAvailability WHERE car_id=@carId"
      );
    if (!updatedCarAvailability) {
      return;
    }
    return updatedCarAvailability.recordset;
  } catch (error) {
    console.log("Failed to update car info", error);
    throw error;
  }
};

//get car list
export const fetchCars=async()=>{
    try {
        const pool=await getPool()
        const Cars=await pool.request().query("SELECT * FROM Car")
        if(!Cars.recordset){
            return ;
        }
        return Cars.recordset
    } catch (error) {
        console.log("Failed to fetch cars")
        throw error
    }
}


//fetch car by id
export const fetchCarById=async(id:string)=>{
    try {
        const pool=await getPool()
        const carById= await pool.request().input("id",sql.VarChar,id).query("SELECT * FROM Car WHERE car_id=@id")
        if(!carById.recordset) return ;
        return carById.recordset
    } catch (error) {
        
    }
}

//deleting car by id 
export const DeleteCarById = async (id: string) => {
  try {
    const pool = await getPool();
    const existingCar = await pool.request()
      .input('id', sql.VarChar, id)
      .query('SELECT * FROM Car WHERE Car_id = @id');

    if (existingCar.recordset.length === 0) {
      return { message: `Car with ID ${id} does not exist.` };
    }

    await pool.request()
      .input('id', sql.VarChar, id)
      .query('DELETE FROM Car WHERE Car_id = @id');

    return { message: `Car with ID ${id} deleted successfully.` };
  } catch (error) {
    console.error('Failed to delete car by ID:', error);
    throw error;
  }
};

