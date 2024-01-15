'use client';

import React, { useState } from 'react';
import { ProjectAdminCard } from '@/app/[username]/components/project-tab/project-admin-card';
import { AnimatePresence, motion } from 'framer-motion';

import { Button, EmptyState, toast } from '@cubik/ui';

const transition = {
  duration: 0.4,
  ease: [0.175, 0.885, 0.32, 0.98],
};
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
          toast.loading('This is a toast', {
            icon: (
              <div className="translate-y-[1px]">
                <motion.div
                  className="animate-spin"
                  initial={{ opacity: 0, rotate: 180 }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                  }}
                  exit={{
                    position: 'absolute',
                    opacity: 0,
                    rotate: -180,
                    transition: {
                      ...transition,
                    },
                  }}
                  transition={{
                    ...transition,
                    delay: 0.2,
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="9"
                      cy="9"
                      r="7"
                      stroke="currentColor"
                      strokeOpacity="0.1"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M16 9C16 5.13401 12.866 2 9 2"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              </div>
            ),
          });
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
