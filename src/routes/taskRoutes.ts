import { Router } from 'express';
import { createTask, getTasks } from '../controllers/taskController';
import authMiddleware from '../middlewares/auth';

const router = Router();

router.use(authMiddleware);
router.post('/', createTask);
router.get('/', getTasks);

export default router;