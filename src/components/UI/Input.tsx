import React from 'react';

import FieldWrapper from './FieldWrapper';

interface FormErrorType {
  hasError: boolean;
  errorMessage: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  formError?: FormErrorType;
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  required = false,
  formError = {},
  children,
  ...props
}) => {
  const { hasError = false, errorMessage = '' } = formError;

  return (
    <FieldWrapper label={label} required={required}>
      <input
        {...props}
        className={` ${
          required && hasError ? 'border-red-500' : 'border-gray-300'
        } w-full px-4 py-2 border rounded-md focus:outline-2 focus:outline-blue-500`}
      />

      {hasError && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}

      {children}
    </FieldWrapper>
  );
};

export default Input;
