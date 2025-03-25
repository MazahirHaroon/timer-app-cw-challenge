import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { timerStore } from '@store';

import { Home } from '@pages';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={timerStore}>
      <Home />
    </Provider>
  </StrictMode>
);
