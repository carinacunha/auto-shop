import express from 'express';
import CarController from '../Controllers/CarController';

const carController = new CarController();

const router = express.Router();

router.post('/', carController.create);

export default router;