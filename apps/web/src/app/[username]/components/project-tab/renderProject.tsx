'use client';

import React, { useState } from 'react';
import { ProjectAdminCard } from '@/app/[username]/components/project-tab/project-admin-card';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'sonner';

import { Button, EmptyState } from '@cubik/ui';

const RenderUserProjects = ({ projects }) => {
  console.log('user projects', projects);
  if (!projects || projects.length === 0) {
    return (
      <EmptyState
        title="No Project Found"
        description="This user does not have any projects created"
        icon="search"
      />
    );
  }

  return (
    <>
      <Button
        onClick={() => {
          toast.info('hello world');
        }}
      >
        Toast
      </Button>
      <div className="flex min-h-[100vh] w-full flex-col justify-start">
        <AnimatePresence initial={false}>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                opacity: { duration: 0.2 },
                // duration: 3,
                type: 'spring',
                bounce: 0.25,
                duration: 0.45,
              }}
              className="overflow-hidden"
            >
              <ProjectAdminCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default RenderUserProjects;

{
  /*

  const reorderedProjects: typeof projects = [
    ...projects.filter((e) => e.isDraft),
    ...projects.filter((e) => !e.isDraft),
  ];
*/
}
