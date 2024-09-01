import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import InitRoutes from './routes/InitRoutes.js';

const app = express();

dotenv.config();

const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use('/api/v1', InitRoutes);

app.listen(port, () => {
    console.log('Server listening at http://localhost:${port}');
});