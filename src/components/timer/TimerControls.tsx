import React from 'react';

import { PlayPauseTimerButton, RestartTimerButton } from '@ui-components';

interface TimerControlsProps {
  isRunning: boolean;
  remainingTime: number;
  duration: number;
  onToggle: () => void;
  onRestart: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  isRunning,
  remainingTime,
  duration,
  onToggle,
  onRestart,
}) => {
  const isCompleted = remainingTime <= 0;

  if (isCompleted) {
    return <RestartTimerButton onClick={onRestart} />;
  }

  return <PlayPauseTimerButton onClick={onToggle} isRunning={isRunning} />;
};

export default TimerControls;
