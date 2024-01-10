import { EventStatus } from '@cubik/common-types';
import { EventStatus as EventStatusTable } from '@cubik/database';
import dayjs from '@cubik/dayjs';

export const calculateEventStatus = (
  event: EventStatusTable[],
): EventStatus => {
  const registrationTimings = event.find((e) => e.status === 'REGISTRATION');
  const votingTimings = event.find((e) => e.status === 'VOTING');
  const currentTime = dayjs.utc().unix();

  if (currentTime < dayjs.utc(registrationTimings?.startTime).unix()) {
    return 'BEFORE_REGISTRATION';
  }

  if (
    currentTime < dayjs.utc(registrationTimings?.endTime).unix() &&
    currentTime > dayjs.utc(registrationTimings?.startTime).unix()
  ) {
    return 'REGISTRATION';
  }

  if (
    currentTime > dayjs.utc(registrationTimings?.endTime).unix() &&
    currentTime < dayjs.utc(votingTimings?.startTime).unix()
  ) {
    return 'REGISTRATION_ENDED';
  }

  if (
    currentTime > dayjs.utc(votingTimings?.startTime).unix() &&
    currentTime < dayjs.utc(votingTimings?.endTime).unix()
  ) {
    return 'VOTING';
  }
  if (currentTime > dayjs.utc(votingTimings?.endTime).unix()) {
    return 'ENDED';
  }

  return 'ENDED';
};
