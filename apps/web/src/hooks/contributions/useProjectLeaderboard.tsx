import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { apiInstance, ApiResponseType } from '@cubik/database/api';

//@change type
type Earner = {
  totalUsdAmount: number;
  userId?: string | undefined;
  id?: string | undefined;
  user?:
    | {
        id: string;
        username: string;
        mainWallet: string;
        profileNft: any;
        profilePicture: string;
      }
    | undefined;
}[];
type Result = {
  earners: Earner;
  currentUserRank: number | null;
  currentUser: {
    userId: string;
    amount: number;
  } | null;
};

type ResponseType = ApiResponseType & {
  result: Result;
};

const queryFn = async ({
  eventId,
  slug,
}: {
  eventId: string;
  slug: string;
}) => {
  const response = await apiInstance.get(
    `/api/contribution/getProjectLeaderboard?project=${slug}&eventId=${eventId}`,
  );
  const responseData = response.data as ResponseType;
  if (!responseData.success) {
    toast.error(responseData.message);
  }
  console.log(responseData.result);
  return responseData.result as Result;
};

export default function useProjectLeaderboard({
  eventId,
  slug,
}: {
  eventId: string | undefined;
  slug: string;
}) {
  return useQuery({
    queryKey: ['project', 'contribution', { eventId, slug }],
    queryFn: () =>
      queryFn({
        eventId: eventId as string,
        slug,
      }),
    enabled: !!eventId,
  });
}
