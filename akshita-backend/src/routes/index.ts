import { Router } from 'express';
import { someControllerFunction } from '../controllers/index';

const router = Router();

// Define your routes here
router.get('/example', someControllerFunction);

export default router;