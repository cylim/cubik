'use client';

import React, { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import ProjectHeader from '@/app/[username]/components/project-tab/project-admin-card/projectHeader';
import ProjectAdminGrantsTab from '@/app/[username]/components/project-tab/project-admin-card/tabs/grants';
import ProjectAdminStatsTab from '@/app/[username]/components/project-tab/project-admin-card/tabs/stats';
import ProjectAdminTreasuryTab from '@/app/[username]/components/project-tab/project-admin-card/tabs/treasury';
import { motion } from 'framer-motion';

import { ProjectVerifyStatus } from '@cubik/database';
import {
  Alert,
  Card,
  CardBody,
  CardHeader,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@cubik/ui';

const AnimatePresence = dynamic(
  () => import('framer-motion').then((e) => e.AnimatePresence),
  { ssr: false },
);
export type ProjectProps = {
  name: string;
  slug: string | null;
  shortDescription: string;
  logo: string;
  id: string;
  status: ProjectVerifyStatus;
};
interface ProjectAdminCardBodyProps {
  projectId: string;
}

const ProjectAdminCardBody = ({ projectId }: ProjectAdminCardBodyProps) => {
  const [activeTab, setActiveTab] = useState(0);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
    }
  }, [activeTab]);

  return (
    <Tabs defaultValue={0} size="sm" setActiveTab={setActiveTab}>
      <div className="h-50 border-b border-b-[var(--card-border-secondary)] bg-[var(--card-surface-primary)] pt-[16px]">
        <TabList className="mx-auto max-w-7xl px-[16px] md:px-[32px]">
          <Tab value={0}>Grants</Tab>
          <Tab value={1}>Stats</Tab>
          <Tab value={2}>Treasury</Tab>
          <Tab value={3}>Contributors</Tab>
          <Tab value={4}>Integrations</Tab>
        </TabList>
      </div>
      <AnimatePresence>
        <motion.div
          layout
          animate={{ height: height }}
          transition={{
            duration: 0.45,
            // spring animation here
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <div ref={ref}>
            <TabPanels>
              <TabPanel value={0}>
                <ProjectAdminGrantsTab projectId={projectId} />
              </TabPanel>
              <TabPanel value={1}>
                <ProjectAdminStatsTab />
              </TabPanel>
              <TabPanel value={2}>
                <ProjectAdminTreasuryTab />
              </TabPanel>
              <TabPanel value={3}> </TabPanel>
              <TabPanel value={4}> </TabPanel>
            </TabPanels>
          </div>
        </motion.div>
      </AnimatePresence>
    </Tabs>
  );
};

const ProjectVerificationWrapper = ({
  children,
  projectVerificationStatus,
}: any) => {
  if (!projectVerificationStatus) {
    return (
      <motion.div
        layout
        className="flex flex-col gap-2 rounded-2xl bg-[var(--color-surface-caution-transparent)] p-2"
      >
        <div className="rounded-lg">{children}</div>
        <Alert
          type="text"
          fill={'yellow'}
          color="yellow"
          content="Your Project Is Under review, you will be notified once it is verified"
          closeIcon={false}
          // button="Contact Team"
          className=""
        />
      </motion.div>
    );
  } else return children;
};

const ProjectAdminCard = ({ project }: { project: ProjectProps }) => {
  const projectIsVerified = true; //project.status === ProjectVerifyStatus.VERIFIED;

  return (
    <ProjectVerificationWrapper projectVerificationStatus={projectIsVerified}>
      <Card size="md">
        <CardHeader>
          <ProjectHeader
            isDraft={false}
            project={project}
            isAdmin={true}
            isVerified={projectIsVerified}
          />
        </CardHeader>
        <CardBody>
          <ProjectAdminCardBody projectId={project.id} />
        </CardBody>
      </Card>
    </ProjectVerificationWrapper>
  );
};

const ProjectProfileCard = ({
  project,
  isDraft,
}: {
  project: ProjectProps;
  isDraft: boolean;
}) => {
  return (
    <Card size="md">
      <CardHeader>
        <ProjectHeader
          isDraft={isDraft}
          project={project}
          isVerified={project.status === 'VERIFIED'}
          isAdmin={false}
        />
      </CardHeader>
    </Card>
  );
};

export { ProjectAdminCard, ProjectProfileCard };
