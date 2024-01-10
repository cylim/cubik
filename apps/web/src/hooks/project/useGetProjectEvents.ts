import { useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';

import { Prisma } from '@cubik/database';
import { apiInstance, ApiResponseType } from '@cubik/database/api';

type GetProjectEventsByProject = Prisma.ProjectJoinEventGetPayload<{
  select: {
    projectEventStatus: true;
    amount: true;
    event: {
      select: {
        id: true;
        name: true;
        matchedPool: true;
        isPaused: true;
        eventStatus: true;
      };
    };
  };
}>;

type ResponseType = ApiResponseType & {
  result: GetProjectEventsByProject;
};

const queryFn = async (id: string) => {
  const response = await apiInstance.get(
    `/api/project/getProjectEventsByProjectId?project=${id}`,
  );
  const responseData = response.data as ResponseType;
  if (!responseData.success) {
    toast.error(responseData.message);
  }
  return responseData.result as ResponseType;
};

export default function useGetProjectEvents({ id }: { id: string }) {
  return useQuery({
    queryKey: ['project', { id }],
    queryFn: () => queryFn(id),
  });
}
