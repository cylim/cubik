import * as React from 'react';

interface EmailTemplateProps {
  contributorName: string;
}

export const UserContribution: React.FC<Readonly<EmailTemplateProps>> = ({
  contributorName,
}) => (
  <div>
    <h1>{contributorName} contributed</h1>
  </div>
);
