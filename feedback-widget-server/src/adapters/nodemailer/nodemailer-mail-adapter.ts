import nodemailer from 'nodemailer';

import { MailAdapter, SendEmailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '066c1d4b4ca9c5',
    pass: '3b05ad63201de7',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ body, subject }: SendEmailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Marcos Botene <marcosjbotene@gmail.com>',
      subject,
      html: body,
    });
  }
}
