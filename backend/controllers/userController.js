import { sql } from '../config/db.js';

export async function addUser(req, res) {
    //user will provide name, email, phone, password
    try {
        const {name, email, phone, password} = req.body;
        if(!name || !email || !phone || !password){
            return res.status(400).json({error: "Missing required fields"});
        }
        const user = await sql `INSERT INTO users 
        (name, email, phone, password)
        VALUES (${name}, ${email}, ${phone}, ${password})
        RETURNING *;`
        res.status(201).json({user: user[0]});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"});
    }
}

export async function getUser(req,res) {

        try {
            const {user_id} = req.params;
            const user = await sql `SELECT * FROM users WHERE id = ${user_id};`
            if(user.length === 0){
                return res.status(404).json({error: "User not found"});
            }
            res.status(200).json({user: user[0]});
        } catch (error) {
            console.log(error);
            res.status(500).json({error: "Internal server error"});
        }
}

export async function deleteUser(req,res) {

    try {
        const {user_id} = req.params; 
        await sql `DELETE FROM users WHERE id = ${user_id};`
        res.status(200).json({message: "User deleted successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"});
    }
}