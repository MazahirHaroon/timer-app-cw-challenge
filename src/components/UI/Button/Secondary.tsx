import React from 'react';

import { ButtonProps } from '@types/ui';

const PrimaryButton: React.FC<ButtonProps> = ({ disabled, children, ...props }) => {
  const buttonClasses = `px-4 py-2 text-sm font-medium text-gray-700 rounded-md transition-colors ${
    disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-gray-100 hover:bg-gray-200'
  }`;
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
