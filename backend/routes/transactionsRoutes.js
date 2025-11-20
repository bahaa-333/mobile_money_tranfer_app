import express from 'express';
import { sql } from '../config/db.js';
import { getSentTransactionsByUserId, 
    createTransaction, 
    getTransactionbyUserId, 
    getReceivedTransactionsByUserId, 
    deleteTransactionById, 
    deleteAllTransactionsByUserId, 
    getTransactionSummaryByUserId 
} from '../controllers/transactionController.js';

const router = express.Router();
//transaction routes

//add transaction
router.post("/", createTransaction );

//get all transactions of a user
router.get("/:user_id", getTransactionbyUserId);

//get all sent transactions of a user
router.get("/sent/:user_id", getSentTransactionsByUserId);

//get all received transactions of a user
router.get("/received/:user_id", getReceivedTransactionsByUserId);

//delete a transaction
router.delete("/:id", deleteTransactionById);

//delete all transactions of a user
router.delete("/user/:user_id",deleteAllTransactionsByUserId );

//get transaction summary of a user
//calculating balance (income - expense), total income, total expense
router.get("/summary/:user_id", getTransactionSummaryByUserId);



export default router;