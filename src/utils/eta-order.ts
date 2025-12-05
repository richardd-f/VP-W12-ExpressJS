import { Order } from "@prisma/client";

export function calculateETA(order: Order){
    const eta = order.itemAmount * 10; // ETA in minutes
    return {
        ...order,
        etaMinutes: eta
    }
}