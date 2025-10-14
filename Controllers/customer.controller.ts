import * as customerServices from '../Services/customer.services'
import { Request, Response } from 'express'

export const fetchCustomers = async (req: Request, res: Response) => {
  try {
    const customers = await customerServices.fetchCustomers()
    res.status(200).json({ success: true, customers: customers })
  } catch (error: any) {
    res.status(500).json({ Message: error.message, success: false })
  }
}

export const saveCustomer = async (req: Request, res: Response) => {
  try {
    const savedCustomerInfo = await customerServices.addCustomerInfo(req.body)
    console.log(req.body)
    res.status(200).json({ success: true, savedCustomerInfo: savedCustomerInfo })
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false })
  }
}

export const updateCustomer = async (req: Request, res: Response) => {
  try {
    const updatedCustomerInfo = await customerServices.updateCustomer(req.body)
    res.status(200).json({ success: true, updatedCustomerInfo: updatedCustomerInfo })
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false })
  }
}

export const fetchCustomerById = async (req: Request, res: Response) => {
  try {
    const fetchCustomerById = await customerServices.fetchCustomerById(req.params.id)
    res.status(200).json({ success: true, customer: fetchCustomerById })
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false })
  }
}

export const DeleteCustomerById = async (req: Request, res: Response) => {
  try {
    const DeleteCustomerById = await customerServices.DeleteCustomerById(req.params.id)
    res.status(200).json({ success: true, message: DeleteCustomerById })
  } catch (error: any) {
    res.status(500).json({ message: error.message, success: false })
  }
}