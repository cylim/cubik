/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resend } from 'resend';

import { EmailTemplate } from '../templates/test';

export async function sendEmail(
  to: string,
  data: any,
  notificationType?: string,
) {
  try {
    const resend = new Resend('re_YtBx6r2K_KT4qsZECaAULZyLg5oJL564F');

    const emailReceipt = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [to],
      react: EmailTemplate(data),
      subject: 'test',
      text: 'test email',
    });

    return emailReceipt;
  } catch (error) {
    return error;
  }
}
