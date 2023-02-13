import express from 'express';
import carsRoutes from './routes/carsRoutes';

const app = express();

app.use(express.json());

app.use('/cars', carsRoutes);

export default app;