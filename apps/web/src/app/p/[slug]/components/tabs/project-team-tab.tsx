'use client';

import TabLayout from '@/components/common/tabs/TabLayout';
import useTeam from '@/hooks/useTeam';

import {
  AvatarLabelGroup,
  Button,
  Table,
  TableCell,
  TableRow,
  Text,
} from '@cubik/ui';

export const ProjectTeamTab = ({ slug }: { slug: string }) => {
  const team = useTeam({ slug });
  console.log('team - ', team.data);

  return (
    <TabLayout>
      <div>
        <div className="flex flex-col gap-6 md:flex-row md:gap-20">
          {team.isSuccess && team.data.length > 0 ? (
            <div className="flex flex-col">
              <Text className="h6" color="primary">
                {team.data[0].project?.name} Team
              </Text>
              <Text className="max-w-md p-3" color="secondary">
                These are the Founders, developers, designers and product people
                behind {team.data[0].project?.name}
              </Text>
              <div className="flex flex-row gap-4">
                <Table>
                  {team.data.map((member, idx) => {
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
                          <Button>Tip</Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </Table>
              </div>
            </div>
          ) : (
            <div className="flex flex-col">
              <Text color="primary">Loading...</Text>
            </div>
          )}
        </div>
      </div>
    </TabLayout>
  );
};
