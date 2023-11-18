import * as anchor from '@coral-xyz/anchor';
import axios from 'axios';

export const USDC_TOKEN = new anchor.web3.PublicKey(
  'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
);
export const WRAPPED_SOL = new anchor.web3.PublicKey(
  'So11111111111111111111111111111111111111112',
);

export const fetchPossibleSwapRoute = async (
  inputToken: string,
  amount: number,
) => {
  const response = await axios.get('https://quote-api.jup.ag/v6/quote', {
    params: {
      inputMint: inputToken,
      outputMint: USDC_TOKEN.toString(),
      amount: new anchor.BN(amount * 10 ** 6).toNumber(),
      swapMode: 'ExactOut',
      slippageBps: 50,
      asLegacyTransaction: true,
    },
  });
  const route = response.data;
  return route;
};

export const fetchSolPrice = async () => {
  const apiURL = `https://price.jup.ag/v4/price?ids=${WRAPPED_SOL.toString()}`;
  const response = await axios.get(apiURL);
  const price = response.data.data[WRAPPED_SOL.toString()].price;
  return price;
};

export const txBuilder = async (
  swapRoute: any,
  wallet: anchor.web3.PublicKey,
) => {
  try {
    const transactions = await axios.post('https://quote-api.jup.ag/v6/swap', {
      quoteResponse: swapRoute,
      userPublicKey: wallet.toString(),
      asLegacyTransaction: true,
    });

    const { swapTransaction } = transactions.data;

    const transaction = anchor.web3.Transaction.from(
      Buffer.from(swapTransaction, 'base64'),
    );

    return transaction;
  } catch (err) {
    console.log(err);
    return null;
  }
};
