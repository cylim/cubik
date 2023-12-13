import React from 'react';

interface Props {
  children: React.JSX.Element;
}
const EventLayout = ({ children }: Props) => {
  return <>{children}</>;
};

export default EventLayout;
