import express from 'express';
import MotorcyclesController from '../Controllers/MotorcycleController';

const motorcyclesController = new MotorcyclesController();

const router = express.Router();

router.post('/', motorcyclesController.create);

export default router;