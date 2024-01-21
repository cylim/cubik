type UpfrontPayType = {
  token: string;
  amount: GLfloat;
};

type TreasuryManagers = {
  username: string;
  id: string;
  mainWallet: string;
};

export interface OrganizationSponsorFormData {
  totalCommitted: GLfloat;
  upfrontPay: UpfrontPayType[];
  name: string;
  logo: string;
  isSponsorshipPublic: boolean;
  wantsSelfCustody: boolean;
  treasuryMangers: TreasuryManagers[];
}

export interface IndividualSponsorFormData {
  totalCommitted: GLfloat;
  upfrontPay: UpfrontPayType[];
  selfCustody: boolean;
  isSponsorshipPublic: boolean;
}
