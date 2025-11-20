import {neon} from "@neondatabase/serverless";
import "dotenv/config";

//creates a sql connection
export const sql =neon(process.env.DATABASE_URL);

//initialize database tables
export async function initDB() {
    try {
        await sql`CREATE TABLE IF NOT EXISTS transactions
        (
        id SERIAL PRIMARY KEY,
        sender_user_id VARCHAR(255) NOT NULL,
        receiver_user_id VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        amount DECIMAL(10, 2) NOT NULL,
        total_with_VAT DECIMAL(10, 2) NOT NULL,
        status VARCHAR(50) NOT NULL,
        message VARCHAR(500),
        created_at DATE NOT NULL DEFAULT CURRENT_DATE
        );`;

        await sql`CREATE TABLE IF NOT EXISTS users  
        (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        phone VARCHAR(20) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        balance DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
        created_at DATE NOT NULL DEFAULT CURRENT_DATE
        );`;
        
        console.log("Tables created successfully");
    } catch (error) {
        console.log("Error creating tables:", error);
        process.exit(1); //failure
    }
}