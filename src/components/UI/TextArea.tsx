import React from 'react';

import FieldWrapper from './FieldWrapper';
import ErrorMessage from './ErrorMessage';

import { FormErrorType } from '@constants';

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
  const { hasError = false, errorMessage = '' } = formError;

  return (
    <FieldWrapper label={label} required={required}>
      <textarea
        {...props}
        className={` ${
          required && hasError ? 'border-red-500' : 'border-gray-300'
        } w-full px-4 py-2 border rounded-md focus:outline-2 focus:outline-blue-500`}
      />

      <ErrorMessage hasError={hasError} errorMessage={errorMessage} />

      {children}
    </FieldWrapper>
  );
};

export default TextArea;
