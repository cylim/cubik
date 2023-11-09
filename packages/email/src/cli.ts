import { ActivityType } from '@cubik/database';

import { sendEmail } from './sdk';

(async () => {
  const emailReceipt = await sendEmail(
    'dev.sahilpabale@gmail.com', // any email address
    ActivityType.WELCOME,
    {
      subject: 'Welcome to Cubik',
      text: 'Welcome to Cubik',
      data: {
        firstName: 'Sahil',
      },
    },
  );

  console.log(emailReceipt);
})();
