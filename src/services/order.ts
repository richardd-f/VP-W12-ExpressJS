import { Order } from "@prisma/client";
import prisma from "../config/prisma";
import { CreateOrderType } from "../validations/services-validation";

export class OrderService {

  // CREATE ORDER
  static async createOrder(data: CreateOrderType) {
    return await prisma.order.create({
      data: {
        itemAmount: data.itemAmount,
        customer: {
          connect: { id: data.customerId }
        },
        restaurant: {
          connect: { id: data.restaurantId }
        }
      },
      include: {
        customer: true,
        restaurant: true
      }
    });
  }

  // GET ALL ORDERS
  static async getAllOrder() : Promise<Order[]> {
    return await prisma.order.findMany({
      include: {
        customer: true,
        restaurant: true
      }
    });
  }

  // GET ORDER BY ID
  static async getOrderById(id: number) : Promise<Order | null> {
    return await prisma.order.findUnique({
      where: { id },
      include: {
        customer: true,
        restaurant: true
      }
    });
  }

  // DELETE ORDER
  static async deleteOrder(id: number) {
    return await prisma.order.delete({
      where: { id }
    });
  }
}
