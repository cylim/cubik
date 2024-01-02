import { apiInstance } from "@cubik/database/api";
import { useQuery } from "@tanstack/react-query";

type TeamResponse = {
    user: {
        id: string;
        username: string;
        profilePicture: string;
    };
    project: {
        name: string;
    } | null;
}[]

const queryFn = async (slug: string) => {
    const response = await apiInstance.get(`/api/team?slug=${slug}`);
    const responseData = response.data as TeamResponse;
    console.log('first', responseData);
    return responseData;
}

export default function useTeam({ slug }: { slug: string }) {
    return useQuery({
        queryKey: ['team', { slug }],
        queryFn: () => queryFn(slug),
    })
}