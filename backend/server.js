import express from 'express';
import dotenv from 'dotenv';
import { sql } from './config/db.js';
import ratelimiter from './middleware/rateLimiter.js';
import transactionsRoute from './routes/transactionsRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

app.use(ratelimiter);
app.use(express.json());
const PORT = process.env.PORT || 3000;

//testing port
app.get("/", (req, res) => {
    res.send("port is working");
});

//initialize database tables
async function initDB() {
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

app.use("/api/transactions", transactionsRoute);
app.use("/api/users", userRoutes);

initDB().then(() => {
    //only starts after db is inintialized
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});