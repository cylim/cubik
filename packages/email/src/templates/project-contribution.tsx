import * as React from 'react';

interface EmailTemplateProps {
  projectName: string;
  contributorName: string;
}

export const ProjectContribution: React.FC<Readonly<EmailTemplateProps>> = ({
  projectName,
  contributorName,
}) => (
  <div>
    <h1>
      {contributorName} contributed to {projectName}
    </h1>
  </div>
);
