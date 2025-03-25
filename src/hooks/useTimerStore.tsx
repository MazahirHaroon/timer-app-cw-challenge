import { useDispatch, useSelector } from 'react-redux';

import { Timer } from '@types/timer';
import {
  addTimer,
  deleteTimer,
  toggleTimer,
  updateTimer,
  restartTimer,
  editTimer,
} from '@store-actions/timerStore';

export const useTimerStore = () => {
  const dispatch = useDispatch();
  const timers = useSelector((state: { timer: { list: Timer[] } }) => state.timer.list);

  return {
    timers,
    addTimer: (timer: Omit<Timer, 'id' | 'createdAt'>) => dispatch(addTimer(timer)),
    deleteTimer: (id: string) => dispatch(deleteTimer(id)),
    toggleTimer: (id: string) => dispatch(toggleTimer(id)),
    updateTimer: (id: string, updates: Partial<Timer>) => dispatch(updateTimer(id, updates)),
    restartTimer: (id: string) => dispatch(restartTimer(id)),
    editTimer: (id: string, updates: Partial<Timer>) => dispatch(editTimer({ id, updates })),
  };
};
