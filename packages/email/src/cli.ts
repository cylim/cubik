import { sendEmail } from './sdk';

(async () => {
  const emailReceipt = await sendEmail('sahil@cubik.so', {
    firstName: 'Sahil Pabale',
  });

  console.log(emailReceipt);
})();
