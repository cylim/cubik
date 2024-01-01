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

const unused_get_contribs = async ({
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

const getContributions = async (
    project_slug: string,
    event_id: string,
    page: number,
    limit: number
) => {
    const skip = (page - 1) * limit

    const [data, count] = await prisma.$transaction([
        prisma.contribution.findMany({
            where: {
                project: {
                    slug: project_slug
                },
                eventId: event_id
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
                    slug: project_slug
                },
                eventId: event_id
            }
        })
    ])

    // count the number of pages using the limit and count variables
    const total = Math.ceil(count / limit)
    return { data, count, totalPages: total }
};

const getTopEarner = async (project_slug: string, event_id: string) => {
    const res = await prisma.contribution.findMany({
        where: {
            project: {
                slug: project_slug
            },
            eventId: event_id
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


export { makeComment, getComments, getContributions, getTopEarner }