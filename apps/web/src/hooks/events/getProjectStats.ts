import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { Prisma } from '@cubik/database';
import { apiInstance, ApiResponseType } from '@cubik/database/api';

type Result = {
  estimatedMatch: number;
  communityContributions: number;
  contributors: number;
};
type ResponseType = ApiResponseType & {
  result: Result;
};

const queryFn = async (slug: string, eventId: string) => {
  const response = await apiInstance.get(
    `/api/event/getProjectStats?slug=${slug}&eventId=${eventId}`,
  );
  const responseData = response.data as ResponseType;
  if (!responseData.success) {
    toast.error(responseData.message);
  }
  return responseData.result as Result;
};

export default function useGetProjectStats({
  eventId,
  slug,
}: {
  slug: string;
  eventId: string;
}) {
  return useQuery({
    queryKey: ['project', 'slug', { eventId, slug }],
    queryFn: () => queryFn(slug, eventId),
  });
}
