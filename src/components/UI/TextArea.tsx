import React from 'react';

import FieldWrapper from './FieldWrapper';

interface FormErrorType {
  hasError: boolean;
  errorMessage: string;
}

interface TextAreaProps extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  rows: number;
  required?: boolean;
  formError?: FormErrorType;
  children?: React.ReactNode;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  required = false,
  formError = {},
  children = null,
  ...props
}) => {
  const { hasError, errorMessage } = formError;

  return (
    <FieldWrapper label={label} required={required}>
      <textarea
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

export default TextArea;
