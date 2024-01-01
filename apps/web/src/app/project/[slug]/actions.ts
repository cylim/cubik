'use server'

import { revalidatePath } from "next/cache";

const makeComment = async (comment: string, userId: string, projectId: string) => {
    if (!userId) {
        throw new Error('User not logged in');
    }
    if (!comment) {
        return;
    }
    const cmt = await prisma.comments.create({
        data: {
            userId: userId,
            comment: comment,
            // @ts-ignore
            projectId: projectId,
            reactions: {}
        }
    })
    revalidatePath("/")
    console.log('cmt - ', cmt);
    return cmt;
}

const getComments = async ({
    projectId,
    page = 1,
    limit = 10
}: {
    projectId: string
    page?: number
    limit?: number
}) => {
    const skip = (page - 1) * limit

    return await prisma.comments.findMany({
        where: {
            projectId: projectId
        },
        skip: skip,
        take: limit,
        select: {
            id: true,
            comment: true,
            createdAt: true,
            user: {
                select: {
                    username: true,
                    profilePicture: true,
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
}

const getContributions = async ({
    slug,
    isArchive = false,
    page = 1,
    limit = 10
}: {
    slug: string
    isArchive?: boolean
    page?: number
    limit?: number
}) => {
    const skip = (page - 1) * limit

    return await prisma.contribution.findMany({
        where: {
            project: {
                slug: slug
            },
            isArchive: isArchive
        },
        skip: skip,
        take: limit,
        select: {
            id: true,
            user: {
                select: {
                    id: true,
                    username: true,
                    mainWallet: true,
                    profilePicture: true,
                }
            },
            totalUsdAmount: true,
            totalAmount: true,
            createdAt: true,
            token: true,
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
}

export { makeComment, getComments, getContributions }