import express from 'express'
import {requireSignin,isAdmin} from './../middlewares/authMiddleware.js'
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from '../controllers/categoryController.js';

const router = express.Router();

//routes

//create Category
router.post('/create-category',requireSignin,isAdmin,createCategoryController)

//update Category
router.put('/update-category/:id',requireSignin,isAdmin,updateCategoryController)

//getAll Category
router.get('/get-category',categoryController)

//single Category
router.get('/single-category/:slug',singleCategoryController)

//delete Category
router.delete('/delete-category/:id',requireSignin,isAdmin,deleteCategoryController)

export default router