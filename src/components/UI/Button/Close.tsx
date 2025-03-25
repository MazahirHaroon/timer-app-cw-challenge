import React from 'react';
import { X } from 'lucide-react';

import { ButtonProps } from '@types/ui';

const CloseButton: React.FC<ButtonProps> = (props) => {
  const buttonClasses = 'className="p-1 hover:bg-gray-100 rounded-full transition-colors';
  return (
    <button className={buttonClasses} {...props}>
      <X className="w-5 h-5" />
    </button>
  );
};

export default CloseButton;
