import { Request, Response } from 'express';
import knex from '../database/connection';

export async function createTask(req: Request, res: Response) {
  const { title, description } = req.body;
  const user = req.user as any;

  try {
    const task = await knex('tasks').insert({
      title,
      description,
      author: user.id
    }).returning('*');

    return res.status(201).json(task);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to create task' });
  }
}