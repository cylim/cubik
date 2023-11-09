import * as React from 'react';

interface EmailTemplateProps {
  projectName: string;
}

export const ProjectJoinRound: React.FC<Readonly<EmailTemplateProps>> = ({
  projectName,
}) => (
  <div>
    <h1>Your project {projectName} joined round</h1>
  </div>
);
