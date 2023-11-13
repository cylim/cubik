import * as React from 'react';

interface EmailTemplateProps {
  projectName: string;
}

export const ProjectJoinRoundRejected: React.FC<
  Readonly<EmailTemplateProps>
> = ({ projectName }) => (
  <div>
    <h1>Your project {projectName} was rejected from round</h1>
  </div>
);
