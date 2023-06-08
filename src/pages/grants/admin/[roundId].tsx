import {
  Box,
  Container,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
} from '@chakra-ui/react';
import { Round } from '@prisma/client';
import { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import CustomTag from '~/components/common/tags/CustomTag';
import GrantUnderReviewProjects from '~/components/pages/grants/admin/GrantUnderReviewProjects';
import { trpc } from '~/utils/trpc';

const RoundAdmin = ({ roundId }: { roundId: string }) => {
  const [roundData, setRoundData] = useState<Round | undefined>(undefined);
  const [projectsNumberByStatus, setProjectsNumberByStatus] = useState({
    review: 0,
    accepted: 0,
    rejected: 0,
  });

  const { data, isLoading } = trpc.round.findActive.useQuery();

  useEffect(() => {
    const fetchRoundData = async () => {
      if (!isLoading && data) {
        console.log(data, 'This is data');

        const adminRound = data.find((round) => round.id === roundId);
        setRoundData(adminRound);
      }
    };
    fetchRoundData();
  }, [data, roundId]);

  return (
    <>
      <Container maxW="7xl" py="40px">
        {roundData && (
          <HStack w="full" align="start" pb="32px">
            <Box as="p" textStyle="title2" color="neutral.11">
              {roundData.roundName} Grant Round
            </Box>
            <CustomTag>Admin</CustomTag>
          </HStack>
        )}
        <Tabs variant={'cubik'} alignSelf={'start'} w="full">
          <TabList gap={{ base: '0.5rem', md: '1rem' }}>
            <Tab gap="8px" display={'flex'}>
              <Box
                whiteSpace={'nowrap'}
                as="p"
                textStyle={{ base: 'title5', md: 'title4' }}
              >
                Under Review
              </Box>
              <Tag rounded="full" variant="colorful">
                {projectsNumberByStatus.review && projectsNumberByStatus.review}
              </Tag>
            </Tab>
            <Tab gap="8px" display={'flex'}>
              <Box as="p" textStyle={{ base: 'title5', md: 'title4' }}>
                Accepted
              </Box>
              {projectsNumberByStatus.accepted ? (
                <Tag
                  rounded="full"
                  variant="colorful"
                  color="#FFF066"
                  bg="#2D2A14"
                >
                  {projectsNumberByStatus.accepted}
                </Tag>
              ) : (
                ''
              )}
            </Tab>
            <Tab gap="8px" display={'flex'}>
              <Box as="p" textStyle={{ base: 'title5', md: 'title4' }}>
                Rejected
              </Box>
              {projectsNumberByStatus.rejected ? (
                <Tag
                  rounded="full"
                  variant="colorful"
                  color="#FF1F1F"
                  bg="#3b1515"
                >
                  {projectsNumberByStatus.rejected}
                </Tag>
              ) : (
                ''
              )}
            </Tab>
          </TabList>
          <TabPanels p="0">
            <TabPanel>
              <GrantUnderReviewProjects
                setProjectsNumberByStatus={setProjectsNumberByStatus}
                roundId={roundData?.id as string}
              />
            </TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const roundId = context.query.roundId as string;
  console.log(roundId, '---');

  return {
    props: { roundId }, // will be passed to the page component as props
  };
};

export default RoundAdmin;