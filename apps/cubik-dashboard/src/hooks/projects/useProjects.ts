import { ProjectVerifyStatus } from "@cubik/database";
import { ApiResponseType, apiInstance } from "@cubik/database/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import { toast } from "sonner";

type Params = {
    page: number;
    limit: number;
    projectStatus?: ProjectVerifyStatus;
    searchIndustry?: string;
    search?: string;
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
    createdAt: Date;
    status: ProjectVerifyStatus;
    projectLink: string;
    email: string;
    owner: {
        id: string;
        username: string;
        profilePicture: string;
        mainWallet: string;
    };
}

type ResponseType = ApiResponseType & {
    result: Result;
};

const queryFn = async ({ page, limit, projectStatus, searchIndustry, search }: Params) => {
    const requestUrl = new URL('/api/projects', window.origin);
    requestUrl.searchParams.set('page', page.toString());
    requestUrl.searchParams.set('limit', limit.toString());
    if (projectStatus) {
        requestUrl.searchParams.set('projectStatus', projectStatus);
    }
    if (searchIndustry) {
        requestUrl.searchParams.set('industry', searchIndustry);
    }
    if (search) {
        requestUrl.searchParams.set('search', search);
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
const useProjects = ({ page, limit, projectStatus, searchIndustry, search }: Params) => {
    return useInfiniteQuery({
        queryKey: ['projects', { page, limit, projectStatus, searchIndustry, search }],
        queryFn: () => queryFn({ page, limit, projectStatus, searchIndustry, search }),
        getNextPageParam: (lastPage, pages) => {
            if (lastPage.totalPages === pages.length) {
                return undefined;
            }
            return pages.length + 1;
        }
    })
}

export default useProjects;