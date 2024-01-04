import { ProjectVerifyStatus } from "@cubik/database";
import { ApiResponseType, apiInstance } from "@cubik/database/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { toast } from "sonner";

type Params = {
    page: number;
    limit: number;
    projectStatus?: ProjectVerifyStatus;
    searchIndustry?: string;
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

const queryFn = async ({ page, limit, projectStatus, searchIndustry }: Params) => {
    const requestUrl = new URL('/api/projects', window.origin);
    requestUrl.searchParams.set('page', page.toString());
    requestUrl.searchParams.set('limit', limit.toString());
    if (projectStatus) {
        requestUrl.searchParams.set('projectStatus', projectStatus);
    }
    if (searchIndustry) {
        requestUrl.searchParams.set('industry', searchIndustry);
    }
    const response = await apiInstance.get(requestUrl.toString());
    const responseData = response.data as ResponseType;
    if (!responseData.success) {
        toast.error(responseData.message);
        throw new Error(responseData.message);
    }
    return responseData.result as Result;
}

/**
 * Custom hook for fetching projects.
 *
 * @param {Params} params - page number, limit, project status, and search industry.
 * @returns {QueryResult} - The result of the query.
 */
const useProjects = ({ page, limit, projectStatus, searchIndustry }: Params) => {
    return useInfiniteQuery({
        queryKey: ['projects', { page, limit, projectStatus, searchIndustry }],
        queryFn: () => queryFn({ page, limit, projectStatus, searchIndustry }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.totalPages === pages.length) {
                return undefined;
            }
            return pages.length + 1;
        }
    })
}

export default useProjects;