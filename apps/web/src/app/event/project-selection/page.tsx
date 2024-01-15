'use client';

import React, { useState } from 'react';
import FormContainer from '@/app/components/FormContainer';

import { Button, Checkbox, GrantRoundCardFooter, Icon, Text } from '@cubik/ui';

interface IProject {
  id: number;
  name: string;
  matchingPool: number;
  participants?: number;
  contrubution?: number;
}

const projects: IProject[] = [
  { id: 1, name: 'Web3 Grants Round', matchingPool: 500000 },
  { id: 2, name: 'Grants Round 1', matchingPool: 500000, participants: 300 },
  { id: 3, name: 'Grants Round 1', matchingPool: 500000, participants: 300 },
  { id: 4, name: 'Grants Round 1', matchingPool: 500000, participants: 300 },
  { id: 5, name: 'Grants Round 1', matchingPool: 500000, participants: 300 },
  { id: 6, name: 'Grants Round 1', matchingPool: 500000, participants: 300 },
];

const ProjectSelection = () => {
  const [selectedProjects, setSelectedProjects] = useState<any>([]);
  console.log(selectedProjects);
  return (
    <FormContainer
      title="Apply for Grant"
      subtitle="Choose the grant round you want to participate in, you can only participate in one grant round at this time"
      className="max-w-7xl"
    >
      <div className="flex w-full flex-col gap-6">
        {projects.map((project: IProject) => {
          return (
            <div
              key={project.id}
              className="flex w-full flex-col gap-3 rounded-xl border border-[var(--round-card-border)] bg-[var(--round-card-surface)] px-6 py-4"
            >
              <div className="flex w-full justify-between">
                <Text className="b2" color="primary">
                  {project.name}
                </Text>
                <Checkbox
                  // checked={false}
                  onCheckedChange={(e) => {
                    if (e) {
                      setSelectedProjects([...selectedProjects, project.id]);
                    } else {
                      setSelectedProjects(
                        selectedProjects.filter(
                          (id: number) => id !== project.id,
                        ),
                      );
                    }
                  }}
                />
              </div>
              <GrantRoundCardFooter
                matchingPool={project?.matchingPool || 0}
                participants={project.participants || 0}
                contributions={project.participants || 0}
              />
            </div>
          );
        })}
      </div>
      <Button variant="primary" size="xl">
        <div className="flex gap-[10px]">
          Next
          <Icon
            name="chevronRight"
            color="var(--button-primary-text-default)"
            height={20}
            width={20}
          />
        </div>
      </Button>
    </FormContainer>
  );
};

export default ProjectSelection;
