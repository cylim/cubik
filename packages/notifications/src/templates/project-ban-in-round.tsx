import * as React from 'react';

interface EmailTemplateProps {
  projectName: string;
}

export const ProjectBannedInRound: React.FC<Readonly<EmailTemplateProps>> = ({
  projectName,
}) => (
  <div>
    <h1>Your project {projectName} was banned</h1>
  </div>
);
