import { Router } from 'express';
import authRoutes from './authRoutes';
import taskRoutes from './taskRoutes';

const routes = Router();

routes.use('/auth', authRoutes);
routes.use('/tasks', taskRoutes);

export default routes;