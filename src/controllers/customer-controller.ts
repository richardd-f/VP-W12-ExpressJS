import { NextFunction, Request, Response } from "express";
import { ResponseError } from "../errors/response-error";
import { CustomerService } from "../services/customer";
import { createCustomerSchema, idParamSchema } from "../validations/services-validation";

export class CustomerController {
    static async createCustomer(req: Request, res: Response, next: NextFunction) {
        try {
            const validatedData = createCustomerSchema.parse(req.body);
            const customer = await CustomerService.createCustomer(validatedData);
            res.status(201).json({
                message: "Customer created successfully",
                data: customer,
            });
        } catch (error) {
            next(error);
        }
    }

    static async getAllCustomers(req: Request, res: Response, next: NextFunction) {
        try {
            const customers = await CustomerService.getAllCustomers();
            res.status(200).json({
                message: "Customers retrieved successfully",
                data: customers,
            });
        } catch (error) {
            next(error);
        }
    }

    static async getCustomerById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = idParamSchema.parse(req.params);
            const customer = await CustomerService.getCustomerById(Number(id));

            if (!customer) {
                throw new ResponseError(404, "Customer not found");
            }

            res.status(200).json({
                message: "Customer retrieved successfully",
                data: customer,
            });
        } catch (error) {
            next(error);
        }
    }

    static async deleteCustomer(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = idParamSchema.parse(req.params);
            await CustomerService.deleteCustomer(Number(id));

            res.status(200).json({
                message: "Customer deleted successfully",
            });
        } catch (error) {
            next(error);
        }
    }
}