import express from 'express';
import MotorcyclesController from '../Controllers/MotorcycleController';

const motorcyclesController = new MotorcyclesController();

const router = express.Router();

router.post('/', motorcyclesController.create);
router.get('/', motorcyclesController.getAll);
router.get('/:id', motorcyclesController.getById);

export default router;