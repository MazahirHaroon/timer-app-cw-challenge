import React from 'react';
interface ErrorMessageProps {
  errorMessage: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMessage }) => (
  <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
);
export default ErrorMessage;
