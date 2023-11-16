import * as React from 'react';

interface EmailTemplateProps {
  projectName: string;
}

export const ProjectStatusApproved: React.FC<Readonly<EmailTemplateProps>> = ({
  projectName,
}) => (
  <div>
    <h1>Your project {projectName} was approved</h1>
  </div>
);
