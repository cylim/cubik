import { ActivityType } from '@cubik/database';

import { sendEmail } from './sdk';

(async () => {
  const emailReceipt = await sendEmail(
    'me@sayanbiswas.in',
    ActivityType.WELCOME,
    {
      subject: 'Welcome to Cubik',
      text: 'Welcome to Cubik',
      data: {
        firstName: 'Sayan',
      },
    },
  );

  console.log(emailReceipt);
})();
