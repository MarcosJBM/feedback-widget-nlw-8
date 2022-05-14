import express, { Request, Response } from 'express';
import { prisma } from './prisma';
import nodemailer from 'nodemailer';

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '066c1d4b4ca9c5',
    pass: '3b05ad63201de7',
  },
});

app.post('/feedbacks', async (request: Request, response: Response) => {
  const { type, comment, screenshot } = request.body;

  const feedback = await prisma.feedback.create({
    data: {
      type,
      comment,
      screenshot,
    },
  });

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Marcos Botene <marcosjbotene@gmail.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
      `<p>Tipo do feedback: ${type}</p>`,
      `<p>Comentário: ${comment}</p>`,
      `</div>`,
    ].join('\n'),
  });

  return response.status(201).json({ data: feedback });
});

app.listen(3333, () => {
  console.log('HTTP Server Running!');
});
