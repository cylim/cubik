type UpfrontPayType = {
  token: string;
  amount: GLfloat;
};

export interface OrganizationSponsorFormData {
  name: string;
  totalCommitted: GLfloat;
  upfrontPay: UpfrontPayType[];
  paidToken: string;
  logo: string;
  selfCustody: boolean;
  isSponsorshipPublic: boolean;
}

export interface IndividualSponsorFormData {
  totalCommitted: GLfloat;
  upfrontPay: UpfrontPayType[];
  paidToken: string;
  selfCustody: boolean;
  isSponsorshipPublic: boolean;
}
