import { createSlice } from '@reduxjs/toolkit';

import { Timer } from '@types/timer';

const initialState = {
  list: [] as Timer[],
};

const timerSlice = createSlice({
  name: 'timerLogic',
  initialState,
  reducers: {
    addTimer: (state, action) => {
      const timer = {
        id: crypto.randomUUID(),
        createdAt: Date.now(),
      };
      state.list.push({
        ...action.payload,
        ...timer,
      });
    },
    deleteTimer: (state, action) => {
      state.list = state.list.filter((timer) => timer.id !== action.payload);
    },
    toggleTimer: (state, action) => {
      const timer = state.list.find((timer) => timer.id === action.payload);
      if (timer) {
        timer.isRunning = !timer.isRunning;
      }
    },
    updateTimer: (state, action) => {
      const timer = state.list.find((timer) => timer.id === action.payload);
      if (timer && timer.isRunning) {
        timer.remainingTime -= 1;
        timer.isRunning = timer.remainingTime > 0;
      }
    },
    restartTimer: (state, action) => {
      const timer = state.list.find((timer) => timer.id === action.payload);
      if (timer) {
        timer.remainingTime = timer.duration;
        timer.isRunning = false;
      }
    },
    editTimer: (state, action) => {
      const timer = state.list.find((timer) => timer.id === action.payload.id);
      if (timer) {
        Object.assign(timer, action.payload.updates);
        timer.remainingTime = action.payload.updates.duration || timer.duration;
        timer.isRunning = false;
      }
    },
  },
});

export const { addTimer, deleteTimer, toggleTimer, updateTimer, restartTimer, editTimer } =
  timerSlice.actions;

export default timerSlice.reducer;
