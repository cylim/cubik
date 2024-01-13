export interface OrganizationSponsorFormData {
  name: string;
  totalCommitted: GLfloat;
  upfrontPay: GLfloat;
  paidToken: string;
  logo: string;
  selfCustody: boolean;
  isSponsorshipPublic: boolean;
}

export interface IndividualSponsorFormData {
  totalCommitted: GLfloat;
  upfrontPay: GLfloat;
  paidToken: string;
  selfCustody: boolean;
  isSponsorshipPublic: boolean;
}
