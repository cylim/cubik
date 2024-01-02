import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const { searchParams } = req.nextUrl;
    // const projectId = searchParams.get('projectId');
    const slug = searchParams.get('slug');
    const team = await prisma.team.findMany({
        where: {
            // projectId,
            project: {
                slug: slug
            }
        },
        select: {
            user: {
                select: {
                    id: true,
                    username: true,
                    profilePicture: true,

                }
            },
            project: {
                select: {
                    name: true,
                }
            }
        }
    });
    return NextResponse.json(team);
};