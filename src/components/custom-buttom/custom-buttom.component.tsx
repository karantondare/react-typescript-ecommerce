import React from 'react';

import './custom-buttom.styles.scss';

export const CustomButtom = ({
  children,
  isGoogleSignIn,
  ...otherProps
}: any) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
