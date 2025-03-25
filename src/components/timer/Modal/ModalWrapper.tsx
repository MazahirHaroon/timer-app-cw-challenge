import React from 'react';
import { Clock } from 'lucide-react';

import { CloseButton } from '@ui-components';
interface ModalWrapperProps {
  title: string;
  handleClick: () => void;
  children: React.ReactNode;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ title, handleClick, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold">{title}</h2>
          </div>
          <CloseButton onClick={handleClick} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
