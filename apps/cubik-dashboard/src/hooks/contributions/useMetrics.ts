import { useQuery } from '@tanstack/react-query';

import { apiInstance, ApiResponseType } from '@cubik/database/api';

type Data = {
  scope: string;
  enabled?: boolean;
};
interface Metrics {
  contributions: number;
  contributors: number;
  matchingPool: number;
  remaingMatchingPool: number;
}
type ResponseType = ApiResponseType & {
  result: Metrics;
};
const queryFn = async ({ scope }: Data) => {
  const response = await apiInstance.get(
    `/api/contributions/metrics?scope=${scope}`,
  );
  const responseData = response.data as ResponseType;
  console.log('first', responseData.result);
  if (!responseData.success) {
    throw new Error(responseData.message);
  }
  return responseData.result as Metrics;
};

function useMetrics({ scope, enabled }: Data) {
  return useQuery({
    queryKey: ['metrics', { scope }],
    queryFn: () => queryFn({ scope }),
    enabled,
  });
}

export default useMetrics;
