import type { Metadata, ResolvingMetadata } from 'next';

interface Props {
  params: { projectId: string; roundId: string };
}

const Apply = ({ params: { projectId, roundId } }: Props) => {
  console.log('roundId', projectId, roundId);
  return <></>;
};

export default Apply;
