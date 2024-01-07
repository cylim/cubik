"use server";
import { ProjectVerifyStatus, prisma } from "@cubik/database";

const updateProjectState = async (projectId: string, status: ProjectVerifyStatus) => {
    // TODO: check cookies and verify user is logged in with superuser account
    return await prisma.project.update({
        where: {
            id: projectId,
        },
        data: {
            status,
        },
    });
}

export { updateProjectState }