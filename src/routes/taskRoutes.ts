import { Router } from 'express';
import { createTask } from '../controllers/taskController';
import authMiddleware from '../middlewares/auth';

const router = Router();

router.use(authMiddleware);
router.post('/', createTask);

export default router;