/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import axios from "axios";
import express from "express";
import type { Request, Response } from "express";
import Controller from "interfaces/controller.interface";
import { apiResponse, errorHandler } from "@cubik/database/api";
import { logApi } from "@cubik/logger";
import logger from "services/logger";

class UserNftController implements Controller {
    public path = "/user";
    public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/nft`, this.getUserNfts);
        logger.debug("UserNftController initialized");
    }

    private getUserNfts = async (req: Request, res: Response) => {
        try {
            const { address } = req.query;
            const nftres = await axios(
                `https://mainnet.helius-rpc.com/?api-key=${process.env.HELIUS_API_KEY}`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: {
                        jsonrpc: '2.0',
                        id: 'my-id',
                        method: 'getAssetsByOwner',
                        params: {
                            ownerAddress: address,
                            page: 1,
                            limit: 1000,
                        },
                    },
                },
            );
            const nftlist = nftres.data.result.items.map((nft: any) => {
                return {
                    image: nft.content.files[0],
                    name: nft.content.metadata.name,
                    token: nft.id,
                };
            });
            return res.json(apiResponse({
                success: true,
                result: nftlist,
                message: 'List of nfts'
            }));
        } catch (error) {
            logApi({
                error,
                message: 'Internal server error',
                req: req as any,
                source: 'apps/web/src/app/api/user/nfts/route.ts',
                statusCode: 500,
            });
            return res.status(500).json(errorHandler(error))
        }
    }
}

export default UserNftController;