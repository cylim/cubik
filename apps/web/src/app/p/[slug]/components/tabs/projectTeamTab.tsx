import TabLayout from '@/components/common/tabs/TabLayout';

import {
  AvatarLabelGroup,
  Button,
  Table,
  TableCell,
  TableRow,
  Text,
} from '@cubik/ui';

const getTeam = async (slug: string) => {
  try {
    const team = await prisma.team.findMany({
      where: {
        project: {
          slug: slug,
        },
      },
      select: {
        user: {
          select: {
            id: true,
            username: true,
            profilePicture: true,
          },
        },
        project: {
          select: {
            name: true,
          },
        },
      },
    });
    return team;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const ProjectTeamTab = async ({ slug }: { slug: string }) => {
  // const team = useTeam({ slug });
  const team = await getTeam(slug);
  if (!team) {
    return <></>;
  }
  return (
    <TabLayout>
      <div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-20">
          <div className="flex flex-col">
            <Text className="h6" color="primary">
              {team[0].project?.name} Team
            </Text>
            <Text className="max-w-md p-3" color="secondary">
              These are the Founders, developers, designers and product people
              behind {team[0].project?.name}
            </Text>
            <div className="flex flex-row gap-4">
              <Table>
                {team.map((member, idx) => {
                  return (
                    <TableRow key={idx}>
                      <TableCell>
                        <AvatarLabelGroup
                          avatarSrc={member.user!.profilePicture}
                          shape="circle"
                          title={`@${member.user!.username}`}
                          size="sm"
                          description="Member"
                        />
                      </TableCell>
                      <TableCell>
                        <Button className="w-full" variant={'primary'}>
                          Tip
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </Table>
            </div>
          </div>
        </div>
      </div>
    </TabLayout>
  );
};
