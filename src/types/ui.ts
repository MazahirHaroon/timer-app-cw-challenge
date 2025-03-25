import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}
export interface FormErrorType {
  hasError?: boolean;
  errorMessage?: string;
}
