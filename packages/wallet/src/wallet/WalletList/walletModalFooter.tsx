import { Icon, Text } from '@cubik/ui';

const FooterComponent = ({
  text,
  icon,
}: {
  icon: 'eyeClose' | 'shieldCheck' | 'userSecurity';
  text: string;
}) => {
  return (
    <div className="flex item-start gap-2 space-x-3">
      <div className="min-w-[18px] py-[2px]">
        <Icon
          name={icon}
          strokeWidth={2}
          className="min-w-[18px]"
          stroke="var(--color-fg-primary-subdued)"
          fill="none"
          width={18}
          height={18}
        />
      </div>
      <Text className="l2-light md:l2-light" color="tertiary">
        {text}
      </Text>
    </div>
  );
};

export const CubikWalletModalFooter: React.FC = () => {
  return (
    <div className="flex flex-col px-6 py-1 gap-4">
      <FooterComponent
        text={
          'View only permissions. We will never do anything without your approval.'
        }
        icon={'eyeClose'}
      />
      <FooterComponent
        text={'Open Source and Audited Smart Contracts'}
        icon={'shieldCheck'}
      />
      <FooterComponent text={'Trusted by 1,568 Users'} icon={'userSecurity'} />
    </div>
  );
};
