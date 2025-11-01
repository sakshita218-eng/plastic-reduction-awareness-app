import { Request, Response } from 'express';

export const getExample = (req: Request, res: Response) => {
    res.status(200).json({ message: 'This is an example response' });
};

// Add more controller functions as needed for your application.