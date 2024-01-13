import { Text } from '@cubik/ui';

export default function NoComments() {
  return (
    <div className="mt-4 box-border flex h-full w-full flex-col items-center justify-center rounded-lg border-[1px] border-solid text-center text-base">
      <div className="flex max-w-[300px] flex-col items-center justify-center gap-[20px]">
        <div className="relative h-[72px] w-[72px]">
          <div className="bg-empty-state-empty-state-icon-blue-fill absolute left-[72px] top-[72px] h-[72px] w-[72px] rounded-[38px] [transform-origin:0_0] [transform:_rotate(180deg)]" />
        </div>
        <div className="flex w-[300px] flex-col items-center justify-center gap-[4px]">
          <Text
            color="primary"
            className="relative self-stretch font-semibold leading-[24px]"
          >
            No Comments yet!
          </Text>
          <Text
            color="primary"
            className="relative self-stretch text-sm leading-[20px]"
          >
            No Comments Yet! The floor is yours - share your thoughts and
            kickstart the conversation.
          </Text>
        </div>
      </div>
    </div>
  );
}
