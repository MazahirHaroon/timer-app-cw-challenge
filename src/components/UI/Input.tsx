import React from 'react';

interface FormErrorType {
  hasError: boolean;
  errorMessage: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  formError: FormErrorType;
  children: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ label, formError, children, ...props }) => {
  const { hasError, errorMessage } = formError;

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} <span className="text-red-500">*</span>
      </label>

      <input
        {...props}
        className={` ${
          hasError ? 'border-red-500' : 'border-gray-300'
        } w-full px-4 py-2 border rounded-md focus:outline-2 focus:outline-blue-500`}
      />

      {hasError && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}

      {children}
    </div>
  );
};

export default Input;
