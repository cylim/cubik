'use server'

import { IsUserLoginServer } from "@/utils/auth/isUserLoginServer";
import { cookies } from "next/headers";

/**
 * Creates a comment for a project.
 * 
 * @param comment - The comment text.
 * @param projectId - The ID of the project.
 * @returns The created comment.
 * @throws Error if the user is not logged in or if the comment is empty.
 * @throws Error if there is an error creating the comment.
 */
const makeComment = async (comment: string, projectId: string) => {
    const cookieStore = cookies();
    const token = cookieStore.get('authToken');
    const user = token && (await IsUserLoginServer(token.value));
    if (!user) {
        throw new Error('User not logged in');
    }
    if (!comment) {
        throw new Error('Comment cannot be empty');
    }
    try {
        const cmt = await prisma.comments.create({
            data: {
                userId: user.id,
                comment: comment,
                projectId: projectId,
                reactions: {}
            },
            select: {
                project: true
            }
        });
        console.log('cmt - ', cmt);
        return cmt;
    }
    catch (e) {
        console.log('error - ', e);
        throw new Error('Failed to create comment');
    }
}

/**
 * Retrieves comments for a project.
 * 
 * @param {Object} options - The options for retrieving comments.
 * @param {string} options.projectId - The ID of the project.
 * @param {number} [options.page=1] - The page number of the comments.
 * @param {number} [options.limit=10] - The maximum number of comments to retrieve per page.
 * @returns {Promise<Comment[]>} - A promise that resolves to an array of comments.
 */
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

const unusedGetContribs = async ({
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
            isArchive: isArchive,
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

/**
 * Retrieves contributions for a specific project and event.
 * 
 * @param projectSlug - The slug of the project.
 * @param eventId - The ID of the event.
 * @param page - The page number of the results.
 * @param limit - The maximum number of contributions per page.
 * @returns An object containing the contributions data, total count, and total number of pages.
 */
const getContributions = async (
    projectSlug: string,
    eventId: string,
    page: number,
    limit: number
) => {
    const skip = (page - 1) * limit

    const [data, count] = await prisma.$transaction([
        prisma.contribution.findMany({
            where: {
                project: {
                    slug: projectSlug
                },
                eventId: eventId
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
        }),
        prisma.contribution.count({
            where: {
                project: {
                    slug: projectSlug
                },
                eventId: eventId
            }
        })
    ])

    // count the number of pages using the limit and count variables
    const total = Math.ceil(count / limit)
    return { data, count, totalPages: total }
};

/**
 * Retrieves the top earners for a given project and event.
 * 
 * @param projectSlug - The slug of the project.
 * @param eventId - The ID of the event.
 * @returns An array of top earners, sorted by the total USD amount earned.
 */
const getTopEarner = async (projectSlug: string, eventId: string) => {
    const res = await prisma.contribution.findMany({
        where: {
            project: {
                slug: projectSlug
            },
            eventId: eventId
        },
        select: {
            userId: true,
            totalUsdAmount: true,
            id: true,
            user: {
                select: {
                    id: true,
                    username: true,
                    profileNft: true,
                    profilePicture: true,
                    mainWallet: true,
                },
            },
        },
        orderBy: {
            createdAt: 'asc',
        },
    });

    const topEarnerMap = new Map<string, number>();

    res.forEach((item) => {
        const currentAmount = topEarnerMap.get(item.userId) || 0;
        topEarnerMap.set(item.userId, currentAmount + item.totalUsdAmount);
    });

    // Convert the Map to an array and sort it by the amount
    const topEarnerArray = Array.from(topEarnerMap.entries())
        .map(([userId, amount]) => ({ userId, amount }))
        .sort((a, b) => b.amount - a.amount)
        .slice(0, 3);

    return topEarnerArray.map((item) => {
        const earner = res.find((i) => i.userId === item.userId);

        return {
            ...earner,
            totalUsdAmount: item.amount,
        };
    });
};

const getTeam = async (projectSlug: string) => {
    return await prisma.team.findMany({
        where: {
            project: {
                slug: projectSlug
            }
        },
        select: {
            user: {
                select: {
                    id: true,
                    username: true,
                    profilePicture: true,
                }
            }
        }
    });

}


export { makeComment, getComments, getContributions, getTopEarner, getTeam }