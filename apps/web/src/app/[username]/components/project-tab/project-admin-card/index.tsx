'use client';

import React, { useEffect, useRef, useState } from 'react';
import ProjectHeader from '@/app/[username]/components/project-tab/project-admin-card/project-header';
import ProjectAdminGrantsTab from '@/app/[username]/components/project-tab/project-admin-card/tabs/grants';
import ProjectAdminStatsTab from '@/app/[username]/components/project-tab/project-admin-card/tabs/stats';
import ProjectAdminTreasuryTab from '@/app/[username]/components/project-tab/project-admin-card/tabs/treasury';
import { AnimatePresence, motion } from 'framer-motion';

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

export type ProjectProps = {
  name: string;
  slug: string | null;
  shortDescription: string;
  logo: string;
};

const ProjectAdminCardBody = () => {
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
      <div className="border-b h-50 border-b-[var(--card-border-secondary)] bg-[var(--card-surface-primary)] pt-[16px]">
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
                <ProjectAdminGrantsTab />
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
  const projectIsVerified = true;
  return (
    <ProjectVerificationWrapper projectVerificationStatus={projectIsVerified}>
      <Card size="md">
        <CardHeader>
          <ProjectHeader
            project={project}
            isAdmin={true}
            isVerified={projectIsVerified}
          />
        </CardHeader>
        <CardBody>
          <ProjectAdminCardBody />
        </CardBody>
      </Card>
    </ProjectVerificationWrapper>
  );
};

const ProjectProfileCard = ({ project }: { project: ProjectProps }) => {
  return (
    <Card size="md">
      <CardHeader>
        <ProjectHeader project={project} isVerified={false} isAdmin={false} />
      </CardHeader>
    </Card>
  );
};

export { ProjectAdminCard, ProjectProfileCard };
