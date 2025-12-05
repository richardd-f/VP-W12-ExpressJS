import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../errors/response-error";
import { RestaurantService } from "../services/restaurant";
import { createRestaurantSchema, idParamSchema, updateRestaurantSchema } from "../validations/services-validation";



export class RestaurantController {

    static async createRestaurant(req: Request, res: Response, next: NextFunction) {
        try {
            const validatedData = createRestaurantSchema.parse(req.body);
            const restaurant = await RestaurantService.createRestaurant(validatedData);
            res.status(201).json({
                message: "Restaurant created successfully",
                data: restaurant,
            });
        } catch (error) {
            next(error);
        }
    }

    static async getAllRestaurant(req: Request, res: Response, next: NextFunction) {
        try {
            const restaurants = await RestaurantService.getAllRestaurant();
            res.status(200).json({
                message: "Restaurants retrieved successfully",
                data: restaurants,
            });
        } catch (error) {
            next(error);
        }
    }

    static async getRestaurantById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = idParamSchema.parse(req.params);
            const restaurant = await RestaurantService.getRestaurantById(Number(id));

            if (!restaurant) {
                throw new ResponseError(404, "Restaurant not found");
            }

            res.status(200).json({
                message: "Restaurant retrieved successfully",
                data: restaurant,
            });
        } catch (error) {
            next(error);
        }
    }

    
    static async getClosedRestaurants(req: Request, res: Response, next: NextFunction) {
        try {
            const restaurants = await RestaurantService.getClosedRestaurants();
            res.status(200).json({
                message: "Closed restaurants retrieved successfully",
                data: restaurants,
            });
        } catch (error) {
            next(error);
        }
    }
    
    static async getOpenedRestaurants(req: Request, res: Response, next: NextFunction) {
        try {
            const restaurants = await RestaurantService.getOpenedRestaurants();
            res.status(200).json({
                message: "Opened restaurants retrieved successfully",
                data: restaurants,
            });
        } catch (error) {
            next(error);
        }
    }




    static async updateRestaurant(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = idParamSchema.parse(req.params);
            const validatedData = updateRestaurantSchema.parse(req.body);
            const restaurant = await RestaurantService.updateRestaurant(Number(id), validatedData);

            if (!restaurant) {
                throw new ResponseError(404, "Restaurant not found");
            }

            res.status(200).json({
                message: "Restaurant updated successfully",
                data: restaurant,
            });
        } catch (error) {
            next(error);
        }
    }

    static async deleteRestaurant(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = idParamSchema.parse(req.params);
            await RestaurantService.deleteRestaurant(Number(id));

            res.status(200).json({
                message: "Restaurant deleted successfully",
            });
        } catch (error) {
            next(error);
        }
    }

}