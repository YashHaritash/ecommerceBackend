import express from 'express';
import {requireSignin,isAdmin} from './../middlewares/authMiddleware.js'
import { createProductController, deleteProductController, getProductController, getSingleProductController, productPhotoController, updateProductController } from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router();

//routes
router.post('/create-product',requireSignin,isAdmin,formidable(),createProductController);

//get products
router.get('/get-product',getProductController);

//single product
router.get('/single-product/:slug',getSingleProductController)

//get photo
router.get('/product-photo/:pid',productPhotoController)

//delete product
router.delete('/delete-product/:pid',deleteProductController)

//update product
router.put('/update-product/:pid',requireSignin,isAdmin,formidable(),updateProductController);

export default router