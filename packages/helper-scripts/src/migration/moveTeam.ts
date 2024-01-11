import { prisma } from '@cubik/database';
import { JsonObject } from '@cubik/database/prisma/client/old/runtime/library';

export const moveTeamData = async () => {
  const users = await prisma.user.findMany();

  for (const user of users) {
    if (user.profileNft !== null) {
      const profileNft = user.profileNft as JsonObject;
      const { collectionName, collectionAddress } = await getAsset(
        profileNft.token as string,
      );
      profileNft.collectionName = collectionName;
      profileNft.collectionAddress = collectionAddress;

      await prisma.user.update({
        where: {
          id: user.id,
        },
        data: {
          profileNft,
        },
      });
    }
  }

  console.log('user profileNft data migration complete.');
};

export const getAsset = async (address: string) => {
  const response = await fetch(process.env.HELIUS_RPC_URL as string, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 'my-id',
      method: 'getAsset',
      params: {
        id: address,
        displayOptions: {
          showUnverifiedCollections: true,
          showCollectionMetadata: true,
          showFungible: false,
          showInscription: false,
        },
      },
    }),
  });
  const { result } = await response.json();
  if (result.grouping[0]) {
    return {
      collectionName: result.grouping[0].collection_metadata.name,
      collectionAddress: result.grouping[0].group_value,
    };
  } else {
    return {
      collectionName: '',
      collectionAddress: '',
    };
  }
};
