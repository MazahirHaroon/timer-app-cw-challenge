import { configureStore } from '@reduxjs/toolkit';

import { timerSlice } from './timerStore';

const timerStore = configureStore({
  reducer: timerSlice.reducer,
});

export { timerStore };
