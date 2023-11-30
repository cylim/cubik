import axios from 'axios';

export const sendWebhook = async (
  errorMessage: string,
  errorDescription: string,
) => {
  await axios.post(process.env.DISCORD_WEBHOOK_URL as string, {
    embeds: [
      {
        title: 'Indexer Error',
        fields: [
          {
            name: 'Title',
            value: errorMessage,
          },
          {
            name: 'Description',
            value: errorDescription,
          },
        ],
        color: 16744576,
      },
    ],
  });
};
