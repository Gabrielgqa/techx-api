import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export default function auth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization;

  if (!authHeader) return res.status(401).json({ error: 'Token missing' });

  const [, token] = authHeader.split(' ');

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!);

    if (typeof decoded === 'object' && decoded?.id && decoded?.name) {
      req.user = {
        id: decoded.id,
        name: decoded.name,
      };
      return next();
    } else {
      return res.status(401).json({ error: 'Invalid token payload' });
    }
  } catch {
    return res.status(401).json({ error: 'Invalid token' });
  }
}