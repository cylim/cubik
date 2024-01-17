'use client';

import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { Button, EmptyState, Spinner, toast } from '@cubik/ui';

import { ProjectAdminCard } from './project-admin-card';

const RenderUserProjects = ({ projects }) => {
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
