import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { apiInstance, ApiResponseType } from '@cubik/database/api';

type Result = {
  totalContributions: number;
  totalContributors: number;
  matchGrantAmount: number;
};
type ResponseType = ApiResponseType & {
  result: Result;
};

const queryFn = async (id: string) => {
  const response = await apiInstance.get(
    `/api/project/getProjectStats?project=${id}`,
  );
  const responseData = response.data as ResponseType;
  if (!responseData.success) {
    toast.error(responseData.message);
  }
  console.log(responseData.result);
  return responseData.result as Result;
};

export default function useProjectStats({ id }: { id: string }) {
  return useQuery({
    queryKey: ['project', 'stats', 'charts', { id }],
    queryFn: () => queryFn(id),
  });
}
