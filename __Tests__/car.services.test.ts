import * as CarRepository from '../Repository/car.repository'
import * as carServices from '../Services/car.services'

jest.mock('../Repository/car.repository');
describe("Service Test Suite", () => {
    afterEach(() => {
        jest.clearAllMocks(); // Clean up all mocks after each test
    });

    describe('fetchCars', () => {
        it('should fetch all cars successfully', async () => {
            const mockCars = [
                { id: '1', manufacturer: 'Toyota', model: 'Camry', year: 2020, color: 'Blue', rentalRate: 50, availability: true },
                { id: '2', manufacturer: 'Honda', model: 'Civic', year: 2019, color: 'Red', rentalRate: 45, availability: false }
            ];

            (CarRepository as any).fetchCars = jest.fn().mockResolvedValue(mockCars);

            const result = await carServices.fetchCars();

            expect(result).toEqual(mockCars);
            expect((CarRepository as any).fetchCars).toHaveBeenCalledTimes(1);
        });

        it('should handle errors when fetching cars', async () => {
            const errorMessage = 'Database error';
            (CarRepository as any).fetchCars = jest.fn().mockRejectedValue(new Error(errorMessage));

            await expect(carServices.fetchCars()).rejects.toThrow(errorMessage);
            expect((CarRepository as any).fetchCars).toHaveBeenCalledTimes(1);
        });
    });
   
});


describe("fetchCarById", () => {
    // A clean state is important for every test.
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should fetch a car by its id", async () => {
        const mockCar = {
            id: '1',
            manufacturer: 'Toyota',
            model: 'Camry',
            year: 2020,
            color: 'Blue',
            rentalRate: 50,
            availability: true
        };

        // Mock the repository to resolve with a single car object.
        (CarRepository as any).fetchCarById = jest.fn().mockResolvedValue(mockCar);

        // Call the service with a single car ID.
        const result = await carServices.fetchCarById('1');

        // Assert that the service returns the mocked car object.
        expect(result).toEqual(mockCar);

        // Assert that the repository method was called exactly once with the correct ID.
        expect((CarRepository as any).fetchCarById).toHaveBeenCalledTimes(1);
        expect((CarRepository as any).fetchCarById).toHaveBeenCalledWith('1');
    });

    it('should handle errors when fetching a car by id', async () => {
        const errorMessage = 'Database error';

        // Mock the repository to reject the promise with an error.
        (CarRepository as any).fetchCarById = jest.fn().mockRejectedValue(new Error(errorMessage));

        // Use `await expect().rejects.toThrow()` to test for async errors.
        await expect(carServices.fetchCarById('1')).rejects.toThrow(errorMessage);

        // Assert that the repository method was called.
        expect((CarRepository as any).fetchCarById).toHaveBeenCalledTimes(1);
        expect((CarRepository as any).fetchCarById).toHaveBeenCalledWith('1');
    });
});
