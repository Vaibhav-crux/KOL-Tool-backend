import { Request, Response } from 'express';
import { createUser } from '../services/userService';

export const signup = async (req: Request, res: Response) => {
  try {
    const { id, email, password, username } = req.body;
    const user = await createUser(id, email, password, username);
    res.status(201).json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: "An unexpected error occurred" });
    }
  }
};
