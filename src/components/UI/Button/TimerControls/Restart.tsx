import React from 'react';
import { RotateCcw } from 'lucide-react';
import { ButtonProps } from 'src/types/ui';

const RestartTimerButton: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
      title="Restart Timer"
      {...props}
    >
      <RotateCcw className="w-6 h-6" />
    </button>
  );
};

export default RestartTimerButton;
