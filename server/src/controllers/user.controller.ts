import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
  res.json([
    { id: 1, name: "Dinesh Pawar" },
    { id: 2, name: "John Doe" }
  ]);
};
