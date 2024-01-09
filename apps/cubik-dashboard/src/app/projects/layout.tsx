import React from 'react';

interface Props {
    children: React.JSX.Element;
}
const ProjectLayout = ({ children }: Props) => {
    return <div>{children}</div>;
};

export default ProjectLayout;