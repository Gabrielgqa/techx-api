import { Router } from 'express';
import { createTask, getTasks, updateTask } from '../controllers/taskController';
import authMiddleware from '../middlewares/auth';

const router = Router();

router.use(authMiddleware);
router.post('/', createTask);
router.get('/', getTasks);
router.put('/:id', updateTask);

export default router;