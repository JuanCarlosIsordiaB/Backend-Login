import express from 'express';
import dotenv from 'dotenv';
import conectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
app.use(express.json()); //Proccess JSON data

dotenv.config();

conectDB();

//Routing

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo desde el puerto: ${PORT}`);
});