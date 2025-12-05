import express, { Router } from 'express';

export const publicRouter: Router = express.Router();

// Customer
publicRouter.post('customer', ); // Create new customer
publicRouter.get('customer', ); // get all customer info
publicRouter.get('customer/:id', ); // get customer info
publicRouter.delete('customer/:id', ); // delete customer

// Restaurant
publicRouter.post('restaurant', ); // Create new restaurant
publicRouter.get('restaurant', ); // get all restaurant info
publicRouter.get('restaurant/:id', ); // get restaurant info
publicRouter.patch('restaurant/:id', ); // update restaurant info
publicRouter.delete('restaurant/:id', ); // delete restaurant info

// Order
publicRouter.post('order', ); // create new order
publicRouter.get('order', ); // get all order info
publicRouter.get('order/:id', ); // get order info
