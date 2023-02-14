import express from 'express';
import MotorcyclesController from '../Controllers/MotorcyclesController';

const motorcyclesController = new MotorcyclesController();

const router = express.Router();

router.post('/', motorcyclesController.create);

export default router;