import { NextFunction, Request, Response } from "express";

export interface InputController {
    req: Request,
    res: Response,
    next: NextFunction
}