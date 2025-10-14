import * as customerRepositories from '../Repository/customer.repository'

export const fetchCustomers = async () => {
  const customers = await customerRepositories.fetchCustomers()
  return customers
}

export const addCustomerInfo = async (customerInfo: any) => {
  const newCustomerInfo = await customerRepositories.CustomerInfo(customerInfo)
  return newCustomerInfo
}

export const updateCustomer = async (updateInfo: any) => {
  const updatedCustomerInfo = await customerRepositories.updateCustomer(updateInfo)
  return updatedCustomerInfo
}

export const fetchCustomerById = async (id: string) => {
  const customerInfo = await customerRepositories.fetchCustomerById(id)
  return customerInfo
}

export const DeleteCustomerById = async (id: string) => {
  const deleteCustomerById = await customerRepositories.DeleteCustomerById(id)
  return deleteCustomerById;
}