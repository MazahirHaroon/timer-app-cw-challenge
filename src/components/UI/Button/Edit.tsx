import React from 'react';
import { Pencil } from 'lucide-react';

import { ButtonProps } from 'src/types/ui';

const EditButton: React.FC<ButtonProps> = ({ title = 'Edit', ...props }) => {
  return (
    <button
      className="p-2 rounded-full hover:bg-blue-50 text-blue-500 transition-colors"
      title={title}
      {...props}
    >
      <Pencil className="w-5 h-5" />
    </button>
  );
};

export default EditButton;
