import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { apiInstance, ApiResponseType } from '@cubik/database/api';

type TeamResponse = {
  user: {
    id: string;
    username: string;
    profilePicture: string;
  };
  project: {
    name: string;
  } | null;
}[];

type ResponseType = ApiResponseType & {
  result: TeamResponse;
};

const queryFn = async (slug: string) => {
  const response = await apiInstance.get(`/api/team?slug=${slug}`);
  const responseData = response.data as ResponseType;
  console.log('first', responseData);
  if (!responseData.success) {
    toast.error(responseData.message);
  }
  return responseData.result as TeamResponse;
};

export default function useTeam({ slug }: { slug: string }) {
  return useQuery({
    queryKey: ['team', { slug }],
    queryFn: () => queryFn(slug),
  });
}
