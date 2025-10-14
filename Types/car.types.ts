export interface Car {
  Car_id?: number;
  Car_model: string;
  Manufacturer: string;
  Year: number;
  Color: string;
  Rental_rate: number;
  Availability: boolean;
}

export interface CarUpdateManufacturer {
  manufacturer: string;
  car_id: number;
}

export interface CarUpdateColor {
  CarColor: string;
  car_id: number;
}

export interface CarUpdateRentalRate {
  CarRentalRate: number;
  car_id: number;
}

export interface CarUpdateAvailability {
  CarAvailability: boolean;
  car_id: number;
}