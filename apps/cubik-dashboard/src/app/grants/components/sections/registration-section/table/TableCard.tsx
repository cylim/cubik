import React from 'react';

import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@cubik/ui';

// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@cubik/ui';

// import { PendingTable } from './tables/PendingTable';

export const TableCard = () => {
  return (
    <>
      <div className="px-3 md:px-0">
        <div className="w-full rounded-md bg-neutral-800">
          <div className=" border-b border-[var(--color-neutral-800)] p-5">
            <p className="text-2xl font-semibold text-white">Projects</p>
          </div>
          <div className="flex h-20 justify-start gap-4 px-10 py-5 md:gap-20">
            <div className="flex flex-col items-start justify-start gap-3 font-normal text-[var(--color-neutral-600)]">
              <p className="text-xl font-semibold ">
                <span className="text-3xl font-extrabold text-white">29</span>
                /50
              </p>
              <p className="text-xs">Projects Participating</p>
            </div>
            <div className="text-surface-neutral-600 flex flex-col items-start justify-start gap-3 font-normal">
              <p className="text-xl font-semibold ">
                <span className="text-3xl font-extrabold text-white">129</span>
              </p>
              <p className="text-xs">Projects Applied</p>
            </div>
            <div className="text-surface-neutral-600 flex flex-col items-start justify-start gap-3 font-normal">
              <p className="text-xl font-semibold ">
                <span className="text-3xl font-extrabold text-white">
                  12 hrs
                </span>
              </p>
              <p className="text-xs">Till registration closes</p>
            </div>
          </div>
          <div>
            {/* <Tabs defaultValue="pending" className="my-6">
              <TabsList className="w-full overflow-x-auto whitespace-nowrap bg-neutral-800">
                <div className="border-b-surface-neutral-800 w-full max-w-7xl border-b px-10">
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="rejected">Rejected</TabsTrigger>
                  <TabsTrigger value="accepted">Accepted</TabsTrigger>
                </div>
              </TabsList>
              <div className="mx-auto w-full max-w-7xl ">
                <TabsContent value="pending">
                  <PendingTable />
                </TabsContent>
                <TabsContent value="rejected">
                  Change your password here.
                </TabsContent>
                <TabsContent value="accepted">
                  Change your password here.
                </TabsContent>
              </div>
            </Tabs> */}

            <Tabs size="sm" className="my-6" defaultValue={0}>
              <TabList className="w-full overflow-x-auto whitespace-nowrap border-b border-[var(--color-neutral-800)]">
                <div className=" mx-auto flex w-full max-w-7xl justify-start gap-4 pl-2">
                  <Tab value={0}>Pending</Tab>
                  <Tab value={1}>Rejected</Tab>
                  <Tab value={2}>Accepted</Tab>
                </div>
              </TabList>
              <TabPanels className="mx-auto w-full max-w-7xl">
                <TabPanel value={0}>
                  Make changes to your account here.
                </TabPanel>
                <TabPanel value={1}>
                  Make changes to your account here.
                </TabPanel>
                <TabPanel value={2}>
                  Make changes to your account here.
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};
