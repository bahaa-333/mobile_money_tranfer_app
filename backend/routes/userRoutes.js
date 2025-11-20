import express from 'express';
import { sql } from '../config/db.js';
import { addUser, deleteUser, getUser } from '../controllers/userController.js';

const router = express.Router();

//users routes

//add user
router.post("/", addUser);

//retrieve user 
router.get("/:user_id", getUser);

//delete user
router.delete("/:user_id", deleteUser);



export default router;