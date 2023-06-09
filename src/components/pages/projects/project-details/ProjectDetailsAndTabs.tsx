import {
  Avatar,
  Box,
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Skeleton,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { WalletAddress } from '~/components/common/wallet/WalletAdd';
import { ProjectWithRoundDetailsWithOwnerWithTeamType } from '~/types/project';
// import { ProjectDonationSimulator } from './project-interactions/project-donation-simulator/ProjectDonationSimulator';
import {
  ProjectFundingData,
  ProjectOwner,
  ProjectSocials,
} from './project-interactions/ProjectInteractions';
import ProjectDetailsHeader from './ProjectDetailsHeader';
import { ProjectsTabs } from './ProjectTabs';
import {
  Contribution,
  ProjectJoinRound,
  ProjectsModel,
  Round,
  Team,
  UserModel,
} from '@prisma/client';

type MobileDrawerTypes = {
  logo: string;
  projectName: string;
  walletAddress: string;
  isOpen: boolean;
  onClose: () => void;
  setDonationSuccessful: any;
};

const MobileDrawer = ({
  logo,
  projectName,
  walletAddress,
  isOpen,
  onClose,
  setDonationSuccessful,
}: MobileDrawerTypes) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="bottom"
      onClose={onClose}
      variant="cubik"
    >
      <DrawerOverlay />
      <DrawerContent w={{ base: '26rem', md: '30rem' }} mx="auto" pt="0">
        <DrawerCloseButton top="28px" backgroundColor="none" />
        <DrawerHeader p="16px" roundedTop={'16px'} backgroundColor="black">
          <HStack>
            <Avatar src={logo} size="md" />
            <VStack gap="0" align={'start'}>
              <Box as="p" textStyle={'title3'} lineHeight="16px">
                {projectName}
              </Box>
              <WalletAddress walletAddress={walletAddress} size={'sm'} />
            </VStack>
          </HStack>
        </DrawerHeader>
        <DrawerBody mx="auto">
          {/* <ProjectDonationSimulator
            height={80}
            width={120}
            projectDetails={projectDetails}
            setDonationSuccessful={setDonationSuccessful}
          /> */}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

const MobileOnlyViews = ({
  projectDetails,
  isLoading,
  children,
  team,
  contributors,
  funding,
}: {
  isLoading: boolean;
  projectDetails: ProjectsModel;
  team: (Team & {
    user: UserModel;
  })[];
  contributors: number;
  funding: number;

  children?: React.ReactNode;
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [donationSuccessful, setDonationSuccessful] = useState(false);

  return (
    <>
      <VStack gap="32px" w="full" display={{ base: 'flex', lg: 'none' }}>
        <HStack w="full">
          <Skeleton
            isLoaded={!isLoading}
            opacity={isLoading ? 0.6 : 1}
            fadeDuration={3}
            w="full"
          >
            <Button
              w="full"
              fontSize={'16px'}
              onClick={onOpen}
              variant="connect_wallet"
            >
              Donate
            </Button>
          </Skeleton>
          <Skeleton
            isLoaded={!isLoading}
            opacity={isLoading ? 0.6 : 1}
            fadeDuration={3}
            w="full"
          >
            <Button
              w="full"
              h="40px"
              borderRadius={'8px'}
              variant="secondary"
              fontSize="14px"
              pb="8px"
            >
              Visit Project
            </Button>
          </Skeleton>
        </HStack>
        <ProjectSocials isLoading={isLoading} projectDetails={projectDetails} />{' '}
        <ProjectFundingData
          isLoading={isLoading}
          contributors={contributors}
          funding={funding}
        />
        <ProjectOwner isLoading={isLoading} team={team} />
      </VStack>
      {projectDetails && (
        <MobileDrawer
          logo={projectDetails.logo}
          projectName={projectDetails.name}
          walletAddress={projectDetails.owner_publickey}
          isOpen={isOpen}
          onClose={onClose}
          setDonationSuccessful={setDonationSuccessful}
        />
      )}
    </>
  );
};

export const ProjectDetailsAndTabs = ({
  isLoading,
  children,
  roundId,
  projectDetails,
  ownerName,
  team,
  contributors,
  funding,
}: {
  isLoading: boolean;
  children?: React.ReactNode;
  roundId: string;
  projectDetails: ProjectsModel;
  ownerName: string;
  contributors: number;
  funding: number;
  team: (Team & {
    user: UserModel;
  })[];
}) => {
  return (
    <Container
      display={'flex'}
      w="full"
      maxW="50rem"
      flex="3"
      flexDir="column"
      alignItems={{ base: 'end', lg: 'center' }}
      justifyContent="start"
      gap={{ base: '32px', lg: '64px' }}
      p="0"
    >
      <ProjectDetailsHeader
        isLoading={isLoading}
        industry={projectDetails?.industry}
        logo={projectDetails?.logo}
        name={projectDetails.name}
        short_description={projectDetails?.short_description}
      />
      <MobileOnlyViews
        isLoading={isLoading}
        contributors={contributors}
        funding={funding}
        team={team}
        projectDetails={projectDetails}
      >
        {children}
      </MobileOnlyViews>
      <ProjectsTabs
        ownerName={ownerName}
        roundId={roundId}
        projectDetails={projectDetails}
        isLoading={isLoading}
      />
    </Container>
  );
};
