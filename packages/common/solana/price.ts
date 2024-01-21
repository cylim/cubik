import axios from 'axios';

export interface APIPrice {
  id: string;
  mintSymbol: string;
  vsToken: string;
  vsTokenSymbol: string;
  price: number;
}

export const getValidTokenPrice = async (
  baseURL: string,
): Promise<APIPrice[]> => {
  try {
    const apiRes = await axios.get(`${baseURL}/price/cached`);

    return apiRes.data.result;
  } catch (e) {
    console.log(e);
    return [];
  }
};
