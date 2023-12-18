import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import { env } from '@/env.mjs';
import { utils, web3 } from '@coral-xyz/anchor';

import { verifyMessage } from '@cubik/auth';
import { createToken } from '@cubik/auth/src/admin';
import { AccessScope, AuthPayload } from '@cubik/common-types/src/admin';
import { prisma } from '@cubik/database';

export const POST = async (req: NextRequest) => {
  const { signature, publicKey } = await req.json();
  const headersList = headers();
  const nonce = headersList.get('x-cubik-nonce') as string;

  const hash = nonce + env.SECRET_ADMIN?.slice(0, 10);
  const check = utils.sha256.hash(hash);

  if (!signature || !publicKey || !nonce) {
    return NextResponse.json(
      {
        error: 'Missing params',
      },
      {
        status: 400,
        statusText: 'Missing params',
      },
    );
  }
  try {
    const result = verifyMessage(
      signature,
      new web3.PublicKey(publicKey),
      check,
    );
    if (!result) {
      return NextResponse.json(
        {
          error: 'Verification failed',
        },
        {
          status: 400,
          statusText: 'Verification failed',
        },
      );
    }

    const user = await prisma.user.findFirst({
      where: {
        mainWallet: publicKey,
        isActive: true,
        isArchive: false,
      },
      select: {
        id: true,
        username: true,
        profilePicture: true,
        profileNft: true,
        adminAccess: {
          select: {
            eventId: true,
            event: {
              select: {
                name: true,
                type: true,
              },
            },
          },
        },
      },
    });
    if (user) {
      const accessScope: AccessScope[] = [];

      user?.adminAccess.forEach((e) =>
        accessScope.push({
          event_id: e.eventId as string,
          event_name: e.event?.name as string,
          event_type: e.event?.type || 'ROUND',
        }),
      );

      const session = await createToken({
        mainWallet: publicKey,
        id: user.id,
        profilePicture: user.profilePicture as string,
        username: user.username as string,
        profileNft: user.profileNft as any,
        accessScope: accessScope,
        accessType: 'ADMIN',
      });

      const userSessionPayload: AuthPayload = {
        mainWallet: publicKey,
        id: user.id,
        profilePicture: user.profilePicture as string,
        username: user.username as string,
        profileNft: user.profileNft as any,
        accessScope: accessScope,
        accessType: 'ADMIN',
      };

      const response = NextResponse.json({
        data: result,
        user: userSessionPayload,
        error: null,
      });

      response.cookies.set('authToken', session as string, {
        expires: new Date(Date.now() + 3600000),
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
      });

      return response;
    } else {
      return NextResponse.json({
        error: 'Not a User',
      });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        data: false,
        error: 'Error while making message',
      },
      {
        status: 500,
        statusText: 'Error while making message',
      },
    );
  }
};
