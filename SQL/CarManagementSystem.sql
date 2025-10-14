CREATE DATABASE CarManagementSystem;
<<<<<<< HEAD
USE CarManagementSystem;
=======

USE CarManagementSystem;

>>>>>>> 7b173d28030d046b21f3a85c5439f2e3489a2d88
CREATE TABLE Car (
    Car_id INT IDENTITY(1,1) PRIMARY KEY,
    Car_model VARCHAR(50),
    Manufacturer VARCHAR(50),
    Year INT,
    Color VARCHAR(30),
    Rental_rate DECIMAL(10,2),
    Availability BIT
);

CREATE TABLE Customer (
    Customer_id INT IDENTITY(1,1) PRIMARY KEY,
    First_name VARCHAR(50),
    Last_name VARCHAR(50),
    Email VARCHAR(50),
    Phone_number VARCHAR(20),
    Address VARCHAR(50)
);

CREATE TABLE Booking (
    Booking_id INT IDENTITY(1,1) PRIMARY KEY,
    Car_id INT FOREIGN KEY REFERENCES Car(Car_id),
    Customer_id INT FOREIGN KEY REFERENCES Customer(Customer_id),
    Rental_Start_Date DATE,
    Rent_End_Date DATE,
    Total_Amount MONEY
);

CREATE TABLE Location (
    Location_id INT IDENTITY(1,1) PRIMARY KEY,
    Car_id INT FOREIGN KEY REFERENCES Car(Car_id),
    Location_Name VARCHAR(50),
    Location VARCHAR(50),
    Address VARCHAR(50),
    Contact_Number VARCHAR(20)
);

INSERT INTO Car (Car_model, Manufacturer, Year, Color, Rental_rate, Availability) VALUES
('Corolla', 'Toyota', 2021, 'White', 55.00, 1),
('Civic', 'Honda', 2020, 'Black', 60.00, 1),
('Mustang', 'Ford', 2022, 'Red', 120.00, 0),
('CX-5', 'Mazda', 2023, 'Blue', 80.00, 1),
('Model 3', 'Tesla', 2024, 'Silver', 150.00, 0);

INSERT INTO Customer (First_name, Last_name, Email, Phone_number, Address) VALUES
('John', 'Doe', 'john.doe@email.com', '+254712345678', 'Nairobi'),
('Mary', 'Wanjiru', 'mary.w@email.com', '+254713567890', 'Mombasa'),
('James', 'Otieno', 'james.o@email.com', '+254714678901', 'Kisumu'),
('Alice', 'Njeri', 'alice.n@email.com', '+254715789012', 'Nakuru'),
('David', 'Mwangi', 'david.m@email.com', '+254716890123', 'Eldoret');

INSERT INTO Booking (Car_id, Customer_id, Rental_Start_Date, Rent_End_Date, Total_Amount) VALUES
(1, 1, '2025-09-01', '2025-09-05', 275.00),
(2, 2, '2025-09-10', '2025-09-15', 300.00),
(3, 3, '2025-08-20', '2025-08-25', 600.00),
(4, 4, '2025-09-25', '2025-09-28', 240.00),
(5, 5, '2025-09-05', '2025-09-07', 300.00);

INSERT INTO Location (Car_id, Location_Name, Location, Address, Contact_Number) VALUES
(1, 'Downtown Branch', 'Nairobi', 'Moi Avenue, Nairobi', '+254701111111'),
(2, 'Coast Branch', 'Mombasa', 'Diani Road, Mombasa', '+254702222222'),
(3, 'Lakeside Branch', 'Kisumu', 'Oginga Odinga St, Kisumu', '+254703333333'),
(4, 'Highway Branch', 'Nakuru', 'Kenyatta Ave, Nakuru', '+254704444444'),
(5, 'Uptown Branch', 'Eldoret', 'Uganda Road, Eldoret', '+254705555555');