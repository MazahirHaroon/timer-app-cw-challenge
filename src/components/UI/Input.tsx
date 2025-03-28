import React from 'react';

import { FieldWrapper, ErrorMessage } from '@ui-components';

import { FormErrorType } from '@types/ui';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  formError?: FormErrorType;
  children?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
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
        className={`w-full px-3 py-2 border rounded-md focus:outline-2 focus:outline-blue-500 ${
          type === 'number'
            ? '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
            : `${required && hasError ? 'border-red-500' : 'border-gray-300'}`
        }`}
      />
      {hasError ? <ErrorMessage errorMessage={errorMessage} /> : null}
      {children}
    </FieldWrapper>
  );
};

export default Input;
