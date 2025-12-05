import z from "zod";

export const idParamSchema = z.object({
  id: z.string().refine((val) => !isNaN(Number(val)), "ID must be a number"),
});

// Customer Schemas
export const createCustomerSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(1, "Phone is required"),
});
export type CreateCustomerType = z.infer<typeof createCustomerSchema>;

// Order Schemas
export const createOrderSchema = z.object({
  customerId: z.number().int().positive("Customer ID must be a positive integer"),
  restaurantId: z.number().int().positive("Restaurant ID must be a positive integer"),
  itemAmount: z.number().int().positive("Item amount must be a positive integer"),
});
export type CreateOrderType = z.infer<typeof createOrderSchema>;


// Restaurant Schemas
export const createRestaurantSchema = z.object({
  id: z.number().int().positive("ID must be a positive integer").optional(),
  name: z.string().min(1, "Name is required"),
  isOpen: z.boolean("open status must be a boolean").optional(),
  description: z.string().min(1, "description is required"),
});
export const updateRestaurantSchema = createRestaurantSchema.partial();
export type CreateRestaurantType = z.infer<typeof createRestaurantSchema>;
export type UpdateRestaurantType = z.infer<typeof updateRestaurantSchema>;
