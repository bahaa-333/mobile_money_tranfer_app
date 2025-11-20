import { sql } from '../config/db.js';

export async function getTransactionbyUserId(req, res) {

        try {
            const {user_id} = req.params;
            const transactions = await sql `SELECT * FROM transactions WHERE sender_user_id = ${user_id} OR receiver_user_id = ${user_id} ORDER BY created_at DESC;`
            res.status(200).json({transactions});
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal server error"});
        }
}

export async function createTransaction(req, res) {

        //user  will provide his id, receiver id, amount, message, and date
        try {
            const{sender_user_id, receiver_user_id, title, amount, total_with_VAT, status, message} = req.body;
            if(!sender_user_id || !receiver_user_id || !title || !amount || !total_with_VAT || !status){
                return res.status(400).json({error: "Missing required fields"});
            }
            const transaction = await sql `INSERT INTO transactions 
            (sender_user_id, receiver_user_id, title, amount, total_with_VAT, status, message)
            VALUES (${sender_user_id}, ${receiver_user_id}, ${title}, ${amount}, ${total_with_VAT}, ${status}, ${message})
            RETURNING amount;`
            res.status(201).json({transaction: transaction[0]});
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal server error"});
        }

}

export async function getSentTransactionsByUserId(req, res) {

        try {
            const {user_id} = req.params;
            const transactions = await sql `SELECT * FROM transactions WHERE sender_user_id = ${user_id} ORDER BY created_at DESC;`
            res.status(200).json({transactions});
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal server error"});
        }
}

export async function getReceivedTransactionsByUserId(req, res) {

        try {
            const {user_id} = req.params;
            const transactions = await sql `SELECT * FROM transactions WHERE receiver_user_id = ${user_id} ORDER BY created_at DESC;`
            res.status(200).json({transactions});
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal server error"});
        }
}

export async function deleteTransactionById(req, res) {

        try {
            const {id} = req.params;
            await sql `DELETE FROM transactions WHERE id = ${id} RETURNING amount;`
            res.status(200).json({message: "Transaction deleted successfully"});
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal server error"});
        }
}

export async function deleteAllTransactionsByUserId(req, res) {

        try {
            const {user_id} = req.params;
            await sql `DELETE FROM transactions WHERE sender_user_id = ${user_id} OR receiver_user_id = ${user_id} RETURNING *;`
            res.status(200).json({message: "All transactions of the user deleted successfully"});
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal server error"});
        }
}

export async function getTransactionSummaryByUserId(req, res) {

    try {
        const {user_id} = req.params;
        const balance = await sql `SELECT COALESCE(SUM(amount),0) as balance FROM transactions WHERE (sender_user_id = ${user_id} OR receiver_user_id = ${user_id}) AND status = 'successful';`
        const income = await sql `SELECT COALESCE(SUM(amount),0) as income FROM transactions WHERE receiver_user_id = ${user_id} AND (amount > 0 AND status = 'successful');`
        const expense = await sql `SELECT COALESCE(SUM(amount),0) as spent FROM transactions WHERE sender_user_id = ${user_id} AND (amount < 0 AND status = 'successful');`
        const transactions = await sql `SELECT * FROM transactions ORDER BY created_at DESC;`
        res.status(200).json({balance: balance[0].balance, income: income[0].income, expense: expense[0].spent});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"});
    }
}