/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type { Request, Response } from 'express';
import express from 'express';
import Controller from 'interfaces/controller.interface';
import { syncPrice } from 'services/price/syncPrice';
import { tokenPrice } from 'utils/price';

const tokens = ['SOL', 'USDC', 'ETH'];

class TokenController implements Controller {
  public router = express.Router();
  public path = '/price';
  constructor() {
    this.initializeRoutes();
  }
  private initializeRoutes() {
    this.router.get(`${this.path}/all`, this.allTokens);
    this.router.get(`${this.path}/cached`, this.cachedTokenPrice);
  }

  private allTokens = async (req: Request, res: Response) => {
    try {
      const prices = await Promise.all(
        tokens.map(async (token: string) => {
          const data = await tokenPrice(token);
          return { token: token, price: data?.price, name: '', icon: '' };
        }),
      );

      res.status(200).json({ result: prices });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  }

  private cachedTokenPrice = async (_req: Request, res: Response) => {
    try {
      const price = await syncPrice();
      res.status(200).json({ result: price, error: null });
    } catch (error) {
      const e = error as Error;
      console.error(e);
      return res.status(500).json({ error: e, result: [] });
    }
  };
}


export default TokenController;