import * as React from 'react';

export const Generic: React.FC<any> = ({ projectName, contributorName }) => (
  <div>
    <h1>
      {contributorName} contributed to {projectName}
    </h1>
  </div>
);
