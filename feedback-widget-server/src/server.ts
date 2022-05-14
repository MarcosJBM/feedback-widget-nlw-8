import express, { Request, Response } from 'express';
import { prisma } from './prisma';

const app = express();

app.use(express.json());

app.post('/feedbacks', async (request: Request, response: Response) => {
  const { type, comment, screenshot } = request.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  return response.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log('HTTP Server Running!');
});
