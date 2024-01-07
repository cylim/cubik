import { handleApiRouteError, successHandler } from "@cubik/database/api";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { ProjectVerifyStatus, prisma } from "@cubik/database";

export const GET = async (req: NextRequest) => {
    try {
        const { searchParams } = req.nextUrl;
        const page = searchParams.get('page') as unknown as number || 1;
        const limit = searchParams.get('limit') as unknown as number || 10;
        // const scope = searchParams.get('scope');
        const authToken = cookies().get('authToken');
        // const scopeSelected = cookies().get('access-scope');
        const projectStatus = searchParams.get('projectStatus');
        const statuses = Object.values(ProjectVerifyStatus);
        if (projectStatus && statuses.find(status => status === projectStatus) === undefined) {
            throw new Error('Invalid project status');
        }
        const skip = (page - 1) * limit;
        // TODO: uncomment and fetch check if public key exists in super admin vercel edge store
        // if (!authToken?.value) {
        //     return handleApiAuthError();
        // }
        // const user = await IsUserLoginServer(authToken?.value);
        // if (!user) {
        //     return handleApiAuthError();
        // }

        const tx = await prisma.$transaction([
            prisma.project.findMany({
                skip: Number(skip),
                take: Number(limit),
                ...(projectStatus && { where: { status: projectStatus as ProjectVerifyStatus, isDraft: false } }),
                ...(searchParams.get('industry') && {
                    where: {
                        industry: {
                            array_contains: searchParams.get('industry')!,
                        },
                        isDraft: false,
                    }
                }),
                ...(searchParams.get('search') && {
                    where: {
                        name: {
                            search: searchParams.get('search')!,
                        },
                        // isDraft: false,
                        // ...(projectStatus && { status: projectStatus as ProjectVerifyStatus }),
                    },
                }),
                select: {
                    id: true,
                    name: true,
                    shortDescription: true,
                    logo: true,
                    slug: true,
                    status: true,
                    industry: true,
                    createdAt: true,
                    projectLink: true,
                    email: true,
                    slides: true,
                    longDescription: true,
                    team: {
                        select: {
                            user: {
                                select: {
                                    id: true,
                                    username: true,
                                    profilePicture: true,
                                    mainWallet: true,
                                }
                            },
                        }
                    },
                    twitterHandle: true,
                    githubLink: true,
                    isDraft: true,
                    owner: {
                        select: {
                            id: true,
                            username: true,
                            profilePicture: true,
                            mainWallet: true,
                        }
                    },
                },
                orderBy: {
                    createdAt: 'desc',
                }
            }),
            prisma.project.count({
                ...(projectStatus && { where: { status: projectStatus as ProjectVerifyStatus } }),
                ...(searchParams.get('industry') && {
                    where: {
                        industry: {
                            array_contains: searchParams.get('industry')!,
                        }

                    }
                }),
                ...(searchParams.get('search') && {
                    where: {
                        name: {
                            search: searchParams.get('search')!,
                        }
                    },
                }),
                where: {
                    isDraft: false,
                },
            })
        ]);
        // tx[0][0].team
        const totalPages = Math.ceil(tx[1] / limit);

        return NextResponse.json(successHandler({
            projects: tx[0],
            numResults: tx[1],
            totalPages,
        }, 'Successfully fetched projects'));
    } catch (e) {
        const error = e as Error;
        return handleApiRouteError(error);
    }
}