import { ProjectVerifyStatus } from "@cubik/database";
import { ApiResponseType, apiInstance } from "@cubik/database/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { toast } from "sonner";

type Params = {
    page: number;
    limit: number;
    projectStatus?: ProjectVerifyStatus;
}

export interface Result {
    projects: Project[];
    numResults: number;
    totalPages: number;
}

export interface Project {
    id: string;
    name: string;
    shortDescription: string;
    logo: string;
    industry: string[];
    slug: string;
    status: ProjectVerifyStatus;
}

type ResponseType = ApiResponseType & {
    result: Result;
};

const queryFn = async ({ page, limit, projectStatus }: Params) => {
    const response = await apiInstance.get(
        `/api/projects?page=${page}&limit=${limit}&projectStatus=${projectStatus}`
    )
    const responseData = response.data as ResponseType;
    if (!responseData.success) {
        toast.error(responseData.message);
        throw new Error(responseData.message);
    }
    return responseData.result as Result;
}

const useProjects = ({ page, limit, projectStatus }: Params) => {
    return useInfiniteQuery({
        queryKey: ['projects', { page, limit, projectStatus }],
        queryFn: () => queryFn({ page, limit, projectStatus }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.totalPages === pages.length) {
                return undefined;
            }
            return pages.length + 1;
        }
    })
}

export default useProjects;