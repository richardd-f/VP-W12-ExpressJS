import express, { Router } from 'express';
import { CustomerController } from '../controllers/customer-controller';
import { RestaurantController } from '../controllers/restaurant-controller';
import { OrderController } from '../controllers/order-controller';

export const publicRouter: Router = express.Router();

// Customer
publicRouter.get('/customer', CustomerController.getAllCustomers); // get all customer info
publicRouter.get('/customer/:id', CustomerController.getCustomerById); // get customer info by customer_id

publicRouter.post('/customer', CustomerController.createCustomer); // Create new customer
publicRouter.patch('/customer/:id', CustomerController.updateCustomer ); // update customer info by customer_id
publicRouter.delete('/customer/:id', CustomerController.deleteCustomer); // delete customer


// Restaurant
publicRouter.get('/restaurant', RestaurantController.getAllRestaurant); // get all restaurant info
publicRouter.get('/restaurant/opened', RestaurantController.getOpenedRestaurants); // get restaurant by opened
publicRouter.get('/restaurant/closed', RestaurantController.getClosedRestaurants); // get restaurant by closed
publicRouter.get('/restaurant/:id', RestaurantController.getRestaurantById); // get restaurant info by restaurant_id

publicRouter.post('/restaurant', RestaurantController.createRestaurant); // Create new restaurant
publicRouter.patch('/restaurant/:id', RestaurantController.updateRestaurant); // update restaurant info
publicRouter.delete('/restaurant/:id', RestaurantController.deleteRestaurant); // delete restaurant info


// Order
publicRouter.get('/order', OrderController.getAllOrder); // get all order info
publicRouter.get('/order/:id', OrderController.getOrderById); // get order by order_id
publicRouter.get('/order/user/:id', OrderController.getOrderByUserId); // get order by user_id
publicRouter.get('/order/restaurant/:id', OrderController.getOrderByRestaurantId); // get order by restaurant_id

publicRouter.post('/order', OrderController.createOrder); // create new order