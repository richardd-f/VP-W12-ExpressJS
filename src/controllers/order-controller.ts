import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../errors/response-error";
import { OrderService } from "../services/order";
import { createOrderSchema, idParamSchema } from "../validations/services-validation";
import { calculateETA } from "../utils/eta-order";


export class OrderController{
    static async createOrder(req: Request, res: Response, next: NextFunction) {
        try {
            const validatedData = createOrderSchema.parse(req.body);
            const order = await OrderService.createOrder(validatedData);
            const etaOrder = calculateETA(order);
            res.status(201).json({
                message: "Order created successfully",
                data: etaOrder,
            });
        } catch (error) {
            next(error);
        }
    }

    static async getAllOrder(req: Request, res: Response, next: NextFunction) {
        try {
            const orders = await OrderService.getAllOrder();
            const etaOrders = orders.map(order => calculateETA(order));
            res.status(200).json({
                message: "Orders retrieved successfully",
                data: etaOrders,
            });
        } catch (error) {
            next(error);
        }
    }

    static async getOrderById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = idParamSchema.parse(req.params);
            const order = await OrderService.getOrderById(Number(id));
            const etaOrder = order ? calculateETA(order) : null;
            if (!order) {
                throw new ResponseError(404, "Order not found");
            }

            res.status(200).json({
                message: "Order retrieved successfully",
                data: etaOrder,
            });
        } catch (error) {
            next(error);
        }
    }
    
    static async getOrderByUserId(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = idParamSchema.parse(req.params);
            const order = await OrderService.getOrderByUserId(Number(id));
            const etaOrders = order ? order.map(o => calculateETA(o)) : null;

            if (!order) {
                throw new ResponseError(404, "Order not found");
            }

            res.status(200).json({
                message: "Order retrieved successfully",
                data: etaOrders,
            });
        } catch (error) {
            next(error);
        }
    }
    
    static async getOrderByRestaurantId(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = idParamSchema.parse(req.params);
            const order = await OrderService.getOrderByRestaurantId(Number(id));
            const etaOrders = order ? order.map(o => calculateETA(o)) : null;

            if (!order) {
                throw new ResponseError(404, "Order not found");
            }

            res.status(200).json({
                message: "Order retrieved successfully",
                data: etaOrders,
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