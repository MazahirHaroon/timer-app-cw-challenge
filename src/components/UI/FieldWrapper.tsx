import React from 'react';

interface FieldWrapperProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({ label, required = false, children }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {children}
    </div>
  );
};

export default FieldWrapper;
