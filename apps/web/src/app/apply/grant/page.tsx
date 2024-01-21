import GrantRoundApplyForm from '@/app/apply/grant/components/grantRoundApplyForm';
import FormContainer from '@/app/components/FormContainer';

interface Props {
  params: { projectId: string; roundId: string };
}

const Apply = ({ params: { projectId, roundId } }: Props) => {
  console.log('projectid', projectId, roundId);
  return (
    <FormContainer
      title="Apply to grant round"
      subtitle="Please fill out the form below to apply to this grant round."
    >
      <GrantRoundApplyForm projectId={projectId} roundId={roundId} />
    </FormContainer>
  );
};

export default Apply;
