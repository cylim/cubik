import * as React from 'react';

interface EmailTemplateProps {
  projectName: string;
}

export const CreateNewProject: React.FC<Readonly<EmailTemplateProps>> = ({
  projectName,
}) => (
  <div>
    <h1>Your project {projectName} was successfully created</h1>
  </div>
);
