import { config } from "dotenv";
import { getPool } from "../Config/db";
import sql from 'mssql'
config();

//save customer info into the DB
export const CustomerInfo = async (customerInfo: any) => {
  try {
    const {
      First_name,
      Last_name,
      Email,
      Phone_number,
      Address,
    } = customerInfo;

    const pool = await getPool();
    await pool
      .request()
      .input('firstName', sql.VarChar, First_name)
      .input('lastName', sql.VarChar, Last_name)
      .input('email', sql.VarChar, Email)
      .input('phoneNumber', sql.VarChar, Phone_number)
      .input('address', sql.VarChar, Address)
      .query(
        'INSERT INTO Customer (First_name, Last_name, Email, Phone_number, Address) VALUES (@firstName, @lastName, @email, @phoneNumber, @address)'
      );

    const savedCustomer = await pool.request().input("id", sql.VarChar, Email).query("SELECT * FROM Customer WHERE Email=@id")
    return savedCustomer.recordset;
  } catch (error) {
    console.error('Failed to save customer info', error);
    throw error;
  }
};

//update customer information
export const updateCustomer = async (updateInfo: any) => {
  try {
    const { Customer_id, First_name, Last_name, Email, Phone_number, Address } = updateInfo;
    let exist: boolean = false;
    const pool = await getPool();
    const CustomerExist = await pool
      .request()
      .input("customerId", sql.Int, Customer_id)
      .query("SELECT * FROM Customer WHERE Customer_id=@customerId");
    if (CustomerExist.recordset.length > 0) {
      exist = true;
    } else {
      exist = false;
    }
    if (!exist) return;
    const updatedCustomer = await pool
      .request()
      .input("firstName", sql.VarChar, First_name)
      .input("lastName", sql.VarChar, Last_name)
      .input("email", sql.VarChar, Email)
      .input("phoneNumber", sql.VarChar, Phone_number)
      .input("address", sql.VarChar, Address)
      .input("customerId", sql.Int, Customer_id)
      .query("UPDATE Customer SET First_name=@firstName, Last_name=@lastName, Email=@email, Phone_number=@phoneNumber, Address=@address WHERE Customer_id=@customerId");
    if (!updatedCustomer) {
      return;
    }
    return updatedCustomer.recordset;
  } catch (error) {
    console.log("Failed to update customer info", error);
    throw error;
  }
};

//get customer list
export const fetchCustomers = async () => {
  try {
    const pool = await getPool()
    const Customers = await pool.request().query("SELECT * FROM Customer")
    if (!Customers.recordset) {
      return;
    }
    return Customers.recordset
  } catch (error) {
    console.log("Failed to fetch customers")
    throw error
  }
}

//fetch customer by id
export const fetchCustomerById = async (id: string) => {
  try {
    const pool = await getPool()
    const customerById = await pool.request().input("id", sql.Int, parseInt(id)).query("SELECT * FROM Customer WHERE Customer_id=@id")
    if (!customerById.recordset) return;
    return customerById.recordset
  } catch (error) {
    console.log("Failed to fetch customer by id", error);
    throw error;
  }
}

//deleting customer by id
export const DeleteCustomerById = async (id: string) => {
  try {
    const pool = await getPool();
    const existingCustomer = await pool.request()
      .input('id', sql.Int, parseInt(id))
      .query('SELECT * FROM Customer WHERE Customer_id = @id');

    if (existingCustomer.recordset.length === 0) {
      return { message: `Customer with ID ${id} does not exist.` };
    }

    await pool.request()
      .input('id', sql.Int, parseInt(id))
      .query('DELETE FROM Customer WHERE Customer_id = @id');

    return { message: `Customer with ID ${id} deleted successfully.` };
  } catch (error) {
    console.error('Failed to delete customer by ID:', error);
    throw error;
  }
};