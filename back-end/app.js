import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDatabase from './config/connectDatabase.js';
import initRoutes from './routes/initRoutes.js';
import userRegistrationRoutes from './routes/userRegistrationRoutes.js';
import userLoginRoutes from './routes/userLoginRoutes.js';
import userChangePassword from './routes/userChangePasswordRoutes.js';
import loggedUserInfoRoutes from './routes/loggedUserInfoRoutes.js';

dotenv.config();

const app = express();

const port = process.env.PORT;

// CORS Policy
app.use(cors());

// JSON
app.use(express.json());

// Database Connection
connectDatabase(process.env.DATABASE_URL).then();

app.use('/api/v1', initRoutes);
app.use('/api/v1', userRegistrationRoutes);
app.use('/api/v1', userLoginRoutes);
app.use('/api/v1', userChangePassword);
app.use('/api/v1', loggedUserInfoRoutes);

app.listen(port, () => {
    console.log('Server listening at http://localhost:${port}');
});