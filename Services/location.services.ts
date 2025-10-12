import * as locationRepositories from '../Repository/location.repository'

export const fetchLocations = async () => {
  const locations = await locationRepositories.fetchLocations()
  return locations
}

export const addLocationInfo = async (locationInfo: any) => {
  const newLocationInfo = await locationRepositories.LocationInfo(locationInfo)
  return newLocationInfo
}

export const updateLocation = async (updateInfo: any) => {
  const updatedLocationInfo = await locationRepositories.updateLocation(updateInfo)
  return updatedLocationInfo
}

export const fetchLocationById = async (id: string) => {
  const locationInfo = await locationRepositories.fetchLocationById(id)
  return locationInfo
}

export const DeleteLocationById = async (id: string) => {
  const deleteLocationById = await locationRepositories.DeleteLocationById(id)
  return deleteLocationById;
}