/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resend } from 'resend';

import { ActivityType } from '@cubik/database';

import { CreateNewProject } from '../templates/create-new-project';
import { Generic } from '../templates/generic';
import { ProjectBannedInRound } from '../templates/project-ban-in-round';
import { ProjectContribution } from '../templates/project-contribution';
import { ProjectJoinRound } from '../templates/project-join-round';
import { ProjectJoinRoundApproved } from '../templates/project-join-round-approved';
import { ProjectJoinRoundRejected } from '../templates/project-join-round-rejected';
import { ProjectStatusApproved } from '../templates/project-status-approved';
import { ProjectStatusRejected } from '../templates/project-status-rejected';
import { ProofCollected } from '../templates/proof-collected';
import { UserContribution } from '../templates/user-contribution';
import { Welcome } from '../templates/welcome';

/**
 * Represents the properties required to send an email.
 */
interface EmailProps {
  from?: string;
  data: any;
  subject: string;
  text: string;
  reply_to?: string | string[];
}

const sender = 'Cubik <no-reply@mail.cubik.so>'; // sender email address can be updated at runtime

/**
 * Sends an email to the specified recipient with the given email properties.
 * @param to - The email addresses of the recipient.
 * @param notificationType - The type of notification to send.
 * @param props - The email properties.
 * @returns A Promise that resolves to the result of sending the email.
 * @throws An error if the notification type is invalid.
 */
export async function sendEmail(
  to: string | string[],
  notificationType: ActivityType,
  props: EmailProps,
) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailPayload = {
      from: props.from || sender,
      to: to,
      subject: props.subject,
      text: props.text,
      reply_to: props.reply_to || process.env.RESEND_REPLY_TO,
    };

    switch (notificationType) {
      case ActivityType.WELCOME:
        return await resend.emails.send({
          react: Welcome(props.data),
          ...emailPayload,
        });
      case ActivityType.CREATE_NEW_PROJECT:
        return await resend.emails.send({
          react: CreateNewProject(props.data),
          ...emailPayload,
        });
      case ActivityType.PROJECT_STATUS_APPROVED:
        return await resend.emails.send({
          react: ProjectStatusApproved(props.data),
          ...emailPayload,
        });
      case ActivityType.PROJECT_STATUS_REJECTED:
        return await resend.emails.send({
          react: ProjectStatusRejected(props.data),
          ...emailPayload,
        });
      case ActivityType.PROJECT_JOIN_ROUND:
        return await resend.emails.send({
          react: ProjectJoinRound(props.data),
          ...emailPayload,
        });
      case ActivityType.PROJECT_JOIN_ROUND_APPROVED:
        return await resend.emails.send({
          react: ProjectJoinRoundApproved(props.data),
          ...emailPayload,
        });
      case ActivityType.PROJECT_JOIN_ROUND_REJECTED:
        return await resend.emails.send({
          react: ProjectJoinRoundRejected(props.data),
          ...emailPayload,
        });
      case ActivityType.PROOF_COLLECTED:
        return await resend.emails.send({
          react: ProofCollected(props.data),
          ...emailPayload,
        });
      case ActivityType.PROJECT_BAN_IN_ROUND:
        return await resend.emails.send({
          react: ProjectBannedInRound(props.data),
          ...emailPayload,
        });
      case ActivityType.CONTRIBUTION_TO_PROJECT:
        return await resend.emails.send({
          react: ProjectContribution(props.data),
          ...emailPayload,
        });
      case ActivityType.CONTRIBUTION_TO_USER:
        return await resend.emails.send({
          react: UserContribution(props.data),
          ...emailPayload,
        });
      case ActivityType.GENERIC:
        return await resend.emails.send({
          react: Generic(props.data),
          ...emailPayload,
        });
      default:
        throw new Error('Invalid notification type');
    }
  } catch (error) {
    return error;
  }
}
