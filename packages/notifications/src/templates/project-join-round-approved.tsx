import * as React from 'react';

interface EmailTemplateProps {
  projectName: string;
}

export const ProjectJoinRoundApproved: React.FC<
  Readonly<EmailTemplateProps>
> = ({ projectName }) => (
  <div>
    <h1>Your project {projectName} was approved for round</h1>
  </div>
);
