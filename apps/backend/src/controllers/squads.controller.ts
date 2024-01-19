/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as anchor from '@coral-xyz/anchor';
import { errorHandler } from '@cubik/database/api';
import * as sqds from '@sqds/multisig';
import type { Request, Response } from 'express';
import express from 'express';
import Controller from 'interfaces/controller.interface';
import logger from 'services/logger';
import z from 'zod';

const RPC_URL = process.env.RPC_URL || 'https://rpc.cubik.so';

const connection = new anchor.web3.Connection(RPC_URL);

const { Multisig, VaultTransaction, Proposal } = sqds.accounts;

class SquadsController implements Controller {
  public path = "/squads";
  public router = express.Router();
  private querySchema = z.object({
    createKey: z.string().min(42).max(100),
  })

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, this.getSquadsTxs);
    logger.debug("SquadsController initialized");
  }

  private getSquadsTxs = async (req: Request, res: Response) => {
    try {
      const parsed = await this.querySchema.safeParseAsync(req.query);
      if (!parsed.success) {
        return res.status(400).json(errorHandler(parsed.error));
      }
      const { createKey } = req.query;

      const [multisigPda] = sqds.getMultisigPda({
        createKey: new anchor.web3.PublicKey(createKey as string),
      });

      const multisigAccount = await Multisig.fromAccountAddress(
        connection,
        multisigPda,
      );

      const getTxsPromise = [];
      const getProposalsPromise = [];
      let allTxs: sqds.generated.VaultTransaction[] = [];
      let allProposals: sqds.generated.Proposal[] = [];

      for (let i = 0; i < Number(multisigAccount.transactionIndex); i++) {
        const [transactionPda] = sqds.getTransactionPda({
          multisigPda,
          index: BigInt(i + 1),
        });

        getTxsPromise.push(
          VaultTransaction.fromAccountAddress(connection, transactionPda),
        );

        const [proposalPda] = sqds.getProposalPda({
          multisigPda,
          transactionIndex: BigInt(i + 1),
        });

        getProposalsPromise.push(
          Proposal.fromAccountAddress(connection, proposalPda),
        );

        allTxs = await Promise.all(getTxsPromise);
        allProposals = await Promise.all(getProposalsPromise);
      }

      res.status(200).json({
        msMembers: multisigAccount.members,
        multisigAccount,
        allTxs,
        allProposals,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error });
    }
  };
}

export default SquadsController;