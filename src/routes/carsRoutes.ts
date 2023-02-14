import express from 'express';
import CarController from '../Controllers/CarController';

const carController = new CarController();

const router = express.Router();

router.post('/', carController.create);
router.get('/', carController.getAll);
router.get('/:id', carController.getById);

export default router;