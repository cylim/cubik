import * as React from 'react';

interface EmailTemplateProps {
  projectName: string;
}

export const ProofCollected: React.FC<Readonly<EmailTemplateProps>> = ({
  projectName,
}) => (
  <div>
    <h1>Proof collected for {projectName}</h1>
  </div>
);
