import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { apiInstance, ApiResponseType } from '@cubik/database/api';

type Result = {
  data: {
    id: string;
    token: string;
    totalAmount: number;
    totalUsdAmount: number;
    createdAt: Date;
    user: {
      id: string;
      username: string;
      mainWallet: string;
      profilePicture: string;
    };
  }[];
  total: number;
  page: number;
};
type ResponseType = ApiResponseType & {
  result: Result;
};

const queryFn = async ({
  eventId,
  slug,
  page,
}: {
  eventId: string;
  slug: string;
  page: number;
}) => {
  const response = await apiInstance.get(
    `/api/contribution/getProjectContributions?project=${slug}&eventId=${eventId}&limit=10&page=${page}`,
  );
  const responseData = response.data as ResponseType;
  if (!responseData.success) {
    toast.error(responseData.message);
  }
  console.log(responseData.result);
  return responseData.result as Result;
};

export default function useProjectContribution({
  eventId,
  slug,
  page,
}: {
  eventId: string | undefined;
  slug: string;
  page: number | undefined;
}) {
  return useQuery({
    queryKey: ['project', 'contribution', { eventId, slug, page }],
    queryFn: () =>
      queryFn({
        eventId: eventId as string,
        slug,
        page: page || 1,
      }),
    enabled: !!eventId,
  });
}
