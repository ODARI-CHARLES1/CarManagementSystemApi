# CarManagementSystemApi

A RESTful API for managing a car rental system, built with Node.js, Express, and TypeScript. It provides endpoints to manage cars, customers, bookings, and locations.

## Features

- Manage car inventory (add, update, delete, view cars)
- Customer management
- Booking system for car rentals
- Location management for pickup/dropoff points
- Database integration with MSSQL

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd CarManagementSystemApi
   ```
2. Install dependencies:

   ```bash
   pnpm install
   ```
3. Set up environment variables:
   Create a `.env` file in the root directory with the following:

   ```
   PORT=5000
   DB_HOST=your-db-host
   DB_USER=your-db-user
   DB_PASSWORD=your-db-password
   DB_NAME=CarMangementSystem
   ```
4. Run the database setup:
   Execute the SQL script in `SQL/CarManagementSystem.sql` to create the database and tables.
5. Start the server:

   ```bash
   npm start
   ```

   Or for development:

   ```bash
   npm run dev
   ```

The server will run on `http://localhost:5000`.

## API Documentation

### Base URL

```
http://localhost:5000/api
```

### Authentication

Currently, no authentication is implemented. All endpoints are public.

### Endpoints

#### Cars

- **GET /api/cars**

  - Description: Retrieve all cars
  - Response: Array of car objects
- **GET /api/cars/:id**

  - Description: Retrieve a specific car by ID
  - Parameters: `id` (string) - Car ID
  - Response: Car object
- **POST /api/cars**

  - Description: Add a new car
  - Body:
    ```json
    {
      "Car_id": "C006",
      "Car_model": "Accord",
      "Manufacturer": "Honda",
      "Year": 2022,
      "Color": "Silver",
      "Rental_rate": 65.00,
      "Availability": true
    }
    ```
  - Response: Created car object
- **PUT /api/cars/:id**

  - Description: Update a car
  - Parameters: `id` (string) - Car ID
  - Body: Partial car object
  - Response: Updated car object
- **DELETE /api/cars/:id**

  - Description: Delete a car
  - Parameters: `id` (string) - Car ID
  - Response: Success message

#### Customers

- **GET /api/customers**

  - Description: Retrieve all customers
  - Response: Array of customer objects
- **GET /api/customers/:id**

  - Description: Retrieve a specific customer by ID
  - Parameters: `id` (string) - Customer ID
  - Response: Customer object
- **POST /api/customers**

  - Description: Add a new customer
  - Body:
    ```json
    {
      "Customer_id": "CU006",
      "First_name": "Alice",
      "Last_name": "Johnson",
      "Email": "alice@example.com",
      "Phone_number": "6789012345",
      "Address": "303 Birch St"
    }
    ```
  - Response: Created customer object
- **PUT /api/customers/:id**

  - Description: Update a customer
  - Parameters: `id` (string) - Customer ID
  - Body: Partial customer object
  - Response: Updated customer object
- **DELETE /api/customers/:id**

  - Description: Delete a customer
  - Parameters: `id` (string) - Customer ID
  - Response: Success message

#### Bookings

- **GET /api/bookings**

  - Description: Retrieve all bookings
  - Response: Array of booking objects
- **GET /api/bookings/:id**

  - Description: Retrieve a specific booking by ID
  - Parameters: `id` (string) - Booking ID
  - Response: Booking object
- **POST /api/bookings**

  - Description: Create a new booking
  - Body:
    ```json
    {
      "Booking_id": "B006",
      "Car_id": "C001",
      "Customer_id": "CU001",
      "Rental_Start_Date": "2025-10-10",
      "Rent_End_Date": "2025-10-15",
      "Total_Amount": 275.00
    }
    ```
  - Response: Created booking object
- **PUT /api/bookings/:id**

  - Description: Update a booking
  - Parameters: `id` (string) - Booking ID
  - Body: Partial booking object
  - Response: Updated booking object
- **DELETE /api/bookings/:id**

  - Description: Delete a booking
  - Parameters: `id` (string) - Booking ID
  - Response: Success message

#### Locations

- **GET /api/locations**

  - Description: Retrieve all locations
  - Response: Array of location objects
- **GET /api/locations/:id**

  - Description: Retrieve a specific location by ID
  - Parameters: `id` (string) - Location ID
  - Response: Location object
- **POST /api/locations**

  - Description: Add a new location
  - Body:
    ```json
    {
      "Location_id": "L006",
      "Car_id": "C001",
      "Location_Name": "Beach Branch",
      "Location": "San Diego",
      "Address": "404 Beach Blvd",
      "Contact_Number": "6789012345"
    }
    ```
  - Response: Created location object
- **PUT /api/locations/:id**

  - Description: Update a location
  - Parameters: `id` (string) - Location ID
  - Body: Partial location object
  - Response: Updated location object
- **DELETE /api/locations/:id**

  - Description: Delete a location
  - Parameters: `id` (string) - Location ID
  - Response: Success message

### Response Formats

All responses are in JSON format. Successful operations return status 200, creations return 201, and errors return appropriate 4xx or 5xx codes.

### Error Handling

Errors are returned in the following format:

```json
{
  "error": "Error message"
}
```

## Database Schema

Refer to `SQL/CarManagementSystem.sql` for the complete database schema including tables for Car, Customer, Booking, and Location.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the ISC License.
