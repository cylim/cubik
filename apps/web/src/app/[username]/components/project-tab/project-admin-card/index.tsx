import React from 'react';
import ProjectHeader from '@/app/[username]/components/project-tab/project-admin-card/project-header';
import ProjectAdminGrantsTab from '@/app/[username]/components/project-tab/project-admin-card/tabs/grants';
import ProjectAdminStatsTab from '@/app/[username]/components/project-tab/project-admin-card/tabs/stats';
import ProjectAdminTreasuryTab from '@/app/[username]/components/project-tab/project-admin-card/tabs/treasury';

import {
  AvatarLabelGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@cubik/ui';

export type ProjectProps = {
  id: string;
  name: string;
  slug: string | null;
  shortDescription: string;
  logo: string;
};

interface Props {
  projectId: string;
}

const ProjectAdminCardBody = ({ projectId }: Props) => {
  return (
    <Tabs defaultValue={0} size="sm">
      <div className="border-b border-b-[var(--card-border-secondary)] bg-[var(--card-surface-primary)] pt-[16px]">
        <TabList className="mx-auto max-w-7xl px-[16px] md:px-[32px]">
          <Tab value={0}>Grants</Tab>
          <Tab value={1}>Stats</Tab>
          <Tab value={2}>Treasury</Tab>
          <Tab value={3}>Contributors</Tab>
          <Tab value={4}>Integrations</Tab>
        </TabList>
      </div>
      <Divider />
      <TabPanels>
        <TabPanel value={0}>
          <ProjectAdminGrantsTab />
        </TabPanel>
        <TabPanel value={1}>
          <ProjectAdminStatsTab projectId={projectId} />
        </TabPanel>
        <TabPanel value={2}>
          <ProjectAdminTreasuryTab />
        </TabPanel>
        <TabPanel value={3}> </TabPanel>
        <TabPanel value={4}> </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

const ProjectAdminCard = ({ project }: { project: ProjectProps }) => {
  return (
    <Card size="md">
      <CardHeader>
        <ProjectHeader project={project} isAdmin={true} />
      </CardHeader>
      <CardBody>
        <ProjectAdminCardBody projectId={project.id} />
      </CardBody>
      {/* <CardBody>World</CardBody> */}
      {/* <CardFooter>this is me</CardFooter> */}
    </Card>
  );
};

export default ProjectAdminCard;
