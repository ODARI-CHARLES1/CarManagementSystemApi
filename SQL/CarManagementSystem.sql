CREATE DATABASE CarMangementSystem;
USE CarMangementSystem;
CREATE TABLE Car (
    Car_id VARCHAR(50) PRIMARY KEY,
    Car_model VARCHAR(50),
    Manufacturer VARCHAR(50),
    Year INT,
    Color VARCHAR(30),
    Rental_rate DECIMAL(10,2),
    Availability BIT
);


CREATE TABLE Customer (
    Customer_id VARCHAR(50) PRIMARY KEY,
    First_name VARCHAR(50),
    Last_name VARCHAR(50),
    Email VARCHAR(50),
    Phone_number VARCHAR(20),
    Address VARCHAR(50)
);


CREATE TABLE Booking (
    Booking_id VARCHAR(50) PRIMARY KEY,
    Car_id VARCHAR(50) FOREIGN KEY REFERENCES Car(Car_id),
    Customer_id VARCHAR(50) FOREIGN KEY REFERENCES Customer(Customer_id),
    Rental_Start_Date DATE,
    Rent_End_Date DATE,
    Total_Amount MONEY
);

CREATE TABLE Location (
    Location_id VARCHAR(50) PRIMARY KEY,
    Car_id VARCHAR(50) FOREIGN KEY REFERENCES Car(Car_id),
    Location_Name VARCHAR(50),
    Location VARCHAR(50),
    Address VARCHAR(50),
    Contact_Number VARCHAR(20)
);



INSERT INTO Car VALUES
('C001', 'Corolla', 'Toyota', 2020, 'White', 55.00, 1),
('C002', 'Civic', 'Honda', 2021, 'Black', 60.00, 1),
('C003', 'Model 3', 'Tesla', 2022, 'Red', 100.00, 1),
('C004', 'Camry', 'Toyota', 2019, 'Blue', 50.00, 1),
('C005', 'Mustang', 'Ford', 2023, 'Yellow', 120.00, 1);


INSERT INTO Booking VALUES
('B001', 'C001', 'CU001', '2025-10-01', '2025-10-05', 220.00),
('B002', 'C002', 'CU002', '2025-09-20', '2025-09-25', 300.00),
('B003', 'C003', 'CU003', '2025-10-03', '2025-10-07', 400.00),
('B004', 'C004', 'CU004', '2025-09-28', '2025-10-02', 200.00),
('B005', 'C005', 'CU005', '2025-10-01', '2025-10-06', 600.00);

INSERT INTO Customer VALUES
('CU001', 'John', 'Doe', 'john@example.com', '1234567890', '123 Main St'),
('CU002', 'Jane', 'Smith', 'jane@example.com', '2345678901', '456 Oak St'),
('CU003', 'Robert', 'Lee', 'robert@example.com', '3456789012', '789 Pine St'),
('CU004', 'Emily', 'Clark', 'emily@example.com', '4567890123', '101 Maple St'),
('CU005', 'Michael', 'Brown', 'michael@example.com', '5678901234', '202 Elm St');


INSERT INTO Location VALUES
('L001', 'C001', 'Downtown Branch', 'New York', '123 Main St', '1234567890'),
('L002', 'C002', 'Airport Branch', 'Los Angeles', '456 Airport Rd', '2345678901'),
('L003', 'C003', 'City Center', 'Chicago', '789 Central Ave', '3456789012'),
('L004', 'C004', 'Suburban Branch', 'Houston', '101 Suburb St', '4567890123'),
('L005', 'C005', 'Harbor Branch', 'Miami', '202 Ocean Dr', '5678901234')


SELECT * from booking;
