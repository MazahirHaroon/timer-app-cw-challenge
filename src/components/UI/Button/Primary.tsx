import React from 'react';

import { ButtonProps } from '@types/ui';

const PrimaryButton: React.FC<ButtonProps> = ({ disabled, children, ...props }) => {
  const buttonClasses = `flex items-center gap-1 md:gap-2 px-4 py-2 text-sm font-medium text-white rounded-md transition-colors ${
    disabled ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
  }`;
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default PrimaryButton;
