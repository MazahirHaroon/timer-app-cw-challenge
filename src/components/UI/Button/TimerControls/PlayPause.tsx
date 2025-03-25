import React from 'react';
import { Play, Pause } from 'lucide-react';

import { ButtonProps } from 'src/types/ui';

interface PlayPauseButtonProps extends ButtonProps {
  isRunning: boolean;
}

const PlayPauseTimerButton: React.FC<PlayPauseButtonProps> = ({ isRunning, ...props }) => {
  return (
    <button
      className={`p-3 rounded-full transition-colors ${
        isRunning
          ? 'bg-red-100 text-red-600 hover:bg-red-200'
          : 'bg-green-100 text-green-600 hover:bg-green-200'
      }`}
      title={isRunning ? 'Pause Timer' : 'Start Timer'}
      {...props}
    >
      {isRunning ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
    </button>
  );
};

export default PlayPauseTimerButton;
