import React from 'react';

import { FormErrorType } from '../../constant';

const ErrorMessage: React.FC<FormErrorType> = ({ hasError, errorMessage }) =>
  hasError ? <p className="mt-1 text-sm text-red-500">{errorMessage}</p> : '';

export default ErrorMessage;
