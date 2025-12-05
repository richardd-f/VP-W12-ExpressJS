import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../errors/response-error";
import { OrderService } from "../services/order";
import { createOrderSchema, idParamSchema } from "../validations/services-validation";


export class OrderController{
    static async createOrder(req: Request, res: Response, next: NextFunction) {
        try {
            const validatedData = createOrderSchema.parse(req.body);
            const order = await OrderService.createOrder(validatedData);
            res.status(201).json({
                message: "Order created successfully",
                data: order,
            });
        } catch (error) {
            next(error);
        }
    }

    static async getAllOrder(req: Request, res: Response, next: NextFunction) {
        try {
            const orders = await OrderService.getAllOrder();
            res.status(200).json({
                message: "Orders retrieved successfully",
                data: orders,
            });
        } catch (error) {
            next(error);
        }
    }

    static async getOrderById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = idParamSchema.parse(req.params);
            const order = await OrderService.getOrderById(Number(id));

            if (!order) {
                throw new ResponseError(404, "Order not found");
            }

            res.status(200).json({
                message: "Order retrieved successfully",
                data: order,
            });
        } catch (error) {
            next(error);
        }
    }
    
    static async getOrderByUserId(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = idParamSchema.parse(req.params);
            const order = await OrderService.getOrderByUserId(Number(id));

            if (!order) {
                throw new ResponseError(404, "Order not found");
            }

            res.status(200).json({
                message: "Order retrieved successfully",
                data: order,
            });
        } catch (error) {
            next(error);
        }
    }
    
    static async getOrderByRestaurantId(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = idParamSchema.parse(req.params);
            const order = await OrderService.getOrderByRestaurantId(Number(id));

            if (!order) {
                throw new ResponseError(404, "Order not found");
            }

            res.status(200).json({
                message: "Order retrieved successfully",
                data: order,
            });
        } catch (error) {
            next(error);
        }
    }



    static async deleteOrder(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = idParamSchema.parse(req.params);
            await OrderService.deleteOrder(Number(id));

            res.status(200).json({
                message: "Order deleted successfully",
            });
        } catch (error) {
            next(error);
        }
    }
}