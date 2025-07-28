import { Request, Response } from 'express';
import knex from '../database/connection';
import bcrypt from 'bcryptjs';

export async function register(req: Request, res: Response) {
  const { name, email, password } = req.body;

  try {
    const userExists = await knex('users').where({ email }).first();
    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const [user] = await knex('users').insert({
      name,
      email,
      password: hashedPassword,
    }).returning(['id', 'name', 'email']);

    return res.status(201).json(user);
  } catch (err) {
    return res.status(500).json({ error: 'Registration failed' });
  }
}
