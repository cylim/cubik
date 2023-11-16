import * as React from 'react';

interface EmailTemplateProps {
  projectName: string;
}

export const ProjectStatusRejected: React.FC<Readonly<EmailTemplateProps>> = ({
  projectName,
}) => (
  <div>
    <h1>Your project {projectName} was rejected</h1>
  </div>
);
