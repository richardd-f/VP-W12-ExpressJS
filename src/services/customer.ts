import { Customer } from "@prisma/client";
import prisma from "../config/prisma";
import { CreateCustomerType, UpdateCustomerType } from "../validations/services-validation";

export class CustomerService {
  // CREATE CUSTOMER
  static async createCustomer(data: CreateCustomerType) : Promise<Customer> {
    return await prisma.customer.create({
      data: {
        name: data.name,
        phone: data.phone
      }
    });
  }

  // GET ALL CUSTOMERS
  static async getAllCustomers() : Promise<Customer[]> {
    return await prisma.customer.findMany({
      include: {
        orders: true
      }
    });
  }

  // GET CUSTOMER BY ID
  static async getCustomerById(id: number) : Promise<Customer | null> {
    return await prisma.customer.findUnique({
      where: { id },
      include: {
        orders: true
      }
    });
  }

  // Update CUSTOMER
  static async updateCustomer(
    id: number,
    data: UpdateCustomerType
  ) : Promise<Customer | null> {
    return await prisma.customer.update({
      where: { id },
      data: {
        ...(data.name !== undefined && { name: data.name }),
        ...(data.phone !== undefined && { phone: data.phone }),
      }
    });
  }

  // DELETE CUSTOMER
  static async deleteCustomer(id: number) {
    return await prisma.customer.delete({
      where: { id }
    });
  }
}
