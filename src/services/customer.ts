import prisma from "../config/prisma";
import { CreateCustomerType } from "../validations/services-validation";

export class CustomerService {
  // CREATE CUSTOMER
  static async createCustomer(data: CreateCustomerType) {
    return await prisma.customer.create({
      data: {
        name: data.name,
        phone: data.phone
      }
    });
  }

  // GET ALL CUSTOMERS
  static async getAllCustomers() {
    return await prisma.customer.findMany({
      include: {
        orders: true
      }
    });
  }

  // GET CUSTOMER BY ID
  static async getCustomerById(id: number) {
    return await prisma.customer.findUnique({
      where: { id },
      include: {
        orders: true
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
