import React from 'react';
import { Trash2 } from 'lucide-react';

import { ButtonProps } from 'src/types/ui';

const DeleteButton: React.FC<ButtonProps> = ({ title = 'Delete', ...props }) => {
  return (
    <button
      className="p-2 rounded-full hover:bg-red-50 text-red-500 transition-colors"
      title={title}
      {...props}
    >
      <Trash2 className="w-5 h-5" />
    </button>
  );
};

export default DeleteButton;
