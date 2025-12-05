import { Restaurant } from "../../generated/prisma/client";
import prisma from "../config/prisma";
import { CreateRestaurantType, UpdateRestaurantType } from "../validations/services-validation";

export class RestaurantService {

  // CREATE RESTAURANT
  static async createRestaurant(data: CreateRestaurantType) : Promise<Restaurant> {
    return await prisma.restaurant.create({
      data:{
        isOpen: data.isOpen ?? false,
        name: data.name,
        description: data.description,
      }
    });
  }

  // GET ALL RESTAURANTS
  static async getAllRestaurant() : Promise<Restaurant[]> {
    return await prisma.restaurant.findMany({
      include: {
        orders: true
      }
    });
  }

  // GET RESTAURANT BY ID
  static async getRestaurantById(id: number) : Promise<Restaurant | null> {
    return await prisma.restaurant.findUnique({
      where: { id },
      include: {
        orders: true
      }
    });
  }

  // UPDATE RESTAURANT
  static async updateRestaurant(
    id: number,
    data: UpdateRestaurantType
  ) : Promise<Restaurant | null> {
    return await prisma.restaurant.update({
      where: { id },
      data: {
      ...(data.isOpen !== undefined && { isOpen: data.isOpen }),
      ...(data.name !== undefined && { name: data.name }),
      ...(data.description !== undefined && { description: data.description }),
    }
    });
  }

  // DELETE RESTAURANT
  static async deleteRestaurant(id: number) {
    return await prisma.restaurant.delete({
      where: { id }
    });
  }
}
