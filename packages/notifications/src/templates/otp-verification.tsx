import React from 'react';

export const OTPTemplate = ({ code }: { code: number }) => {
  return (
    <div>
      <p>Hello,</p>
      <p>
        Your one-time password for verifying your email address is&nbsp;
        <strong>{code}</strong>.&nbsp;
      </p>
    </div>
  );
};
