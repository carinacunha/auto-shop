import express from 'express';
import carsRoutes from './routes/carsRoutes';
import motorcyclesRoutes from './routes/motorcyclesRoutes';

const app = express();

app.use(express.json());

app.use('/cars', carsRoutes);
app.use('/motorcycles', motorcyclesRoutes);

export default app;