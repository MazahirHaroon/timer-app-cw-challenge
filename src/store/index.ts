import { configureStore } from '@reduxjs/toolkit';

import timerReducer from './timerStore';

const timerStore = configureStore({
  reducer: {
    timer: timerReducer,
  },
});

export { timerStore };
