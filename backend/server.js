import express from 'express';
import dotenv from 'dotenv';
import { sql, initDB } from './config/db.js';
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


app.use("/api/transactions", transactionsRoute);
app.use("/api/users", userRoutes);

initDB().then(() => {
    //only starts after db is inintialized
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});