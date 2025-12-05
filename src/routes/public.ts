import express, { Router } from 'express';
import { CustomerController } from '../controllers/customer-controller';
import { RestaurantController } from '../controllers/restaurant-controller';
import { OrderController } from '../controllers/order-controller';

export const publicRouter: Router = express.Router();

// Customer
publicRouter.post('/customer', CustomerController.createCustomer); // Create new customer
publicRouter.get('/customer', CustomerController.getAllCustomers); // get all customer info
publicRouter.get('/customer/:id', CustomerController.getCustomerById); // get customer info by id
publicRouter.delete('/customer/:id', CustomerController.deleteCustomer); // delete customer

// Restaurant
publicRouter.post('/restaurant', RestaurantController.createRestaurant); // Create new restaurant
publicRouter.get('/restaurant', RestaurantController.getAllRestaurant); // get all restaurant info
publicRouter.get('/restaurant/:id', RestaurantController.getRestaurantById); // get restaurant info by id
publicRouter.patch('/restaurant/:id', RestaurantController.updateRestaurant); // update restaurant info
publicRouter.delete('/restaurant/:id', RestaurantController.deleteRestaurant); // delete restaurant info

// Order
publicRouter.post('/order', OrderController.createOrder); // create new order
publicRouter.get('/order', OrderController.getAllOrder); // get all order info
publicRouter.get('/order/:id', OrderController.getOrderById); // get order info by id
