import { NextRequest, NextResponse } from 'next/server';
import { env } from '@/env.mjs';
import axios from 'axios';

import { handleApiRouteError, successHandler } from '@cubik/database/api';
import { logApi } from '@cubik/logger/src';

export const GET = async (req: NextRequest) => {
  try {
    const address = req.nextUrl.searchParams.get('address');
    const nftres = await axios(
      `https://mainnet.helius-rpc.com/?api-key=${env.HELIUS_API_KEY}`,
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
    return NextResponse.json(successHandler(nftlist, 'List of nfts'));
  } catch (error) {
    logApi({
      error,
      message: 'Internal server error',
      req: req as any,
      source: 'apps/web/src/app/api/user/nfts/route.ts',
      statusCode: 500,
    });
    return handleApiRouteError(error);
  }
};
