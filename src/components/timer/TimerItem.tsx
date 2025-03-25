import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

import { useTimerStore } from '@custom-hooks';
import { Timer } from '@types/timer';
import { formatTime } from '@utils/time';
import { TimerAudio } from '@utils/audio';

import { EditTimerModal, TimerControls, TimerProgress } from '@components/timer';
import { DeleteButton, EditButton, RestartTimerButton } from '@ui-components';

interface TimerItemProps {
  timer: Timer;
}

const TimerItem: React.FC<TimerItemProps> = ({ timer }) => {
  const { toggleTimer, deleteTimer, updateTimer, restartTimer } = useTimerStore();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(timer.remainingTime);

  const timerAudio = TimerAudio.getInstance();

  const intervalRef = useRef<number | null>(null);
  const hasEndedRef = useRef(false);

  useEffect(() => {
    setCurrentTime(timer.remainingTime);
  }, [timer.remainingTime]);

  useEffect(() => {
    if (timer.isRunning) {
      intervalRef.current = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev <= 1 && !hasEndedRef.current) {
            hasEndedRef.current = true;
            timerAudio.play().catch(console.error);
            toast.success(`Timer "${timer.title}" has ended!`, {
              duration: 5000,
              action: {
                label: 'Dismiss',
                onClick: timerAudio.stop.bind(timerAudio),
              },
            });
          }
          return Math.max(prev - 1, 0);
        });
      }, 1000);
    }

    return () => clearInterval(intervalRef.current!);
  }, [timer.isRunning, timer.id, timer.remainingTime, timer.title, timerAudio]);

  const handleRestart = () => {
    hasEndedRef.current = false;
    restartTimer(timer.id);
  };

  const handleDelete = () => {
    timerAudio.stop();
    deleteTimer(timer.id);
  };

  const handleToggle = () => {
    if (currentTime <= 0) {
      hasEndedRef.current = false;
      restartTimer(timer.id);
      setCurrentTime(timer.duration);
    } else {
      updateTimer(timer.id, { remainingTime: currentTime, isRunning: !timer.isRunning });
    }
    toggleTimer(timer.id);
  };

  return (
    <>
      <div className="relative bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-102 overflow-hidden">
        <div className="absolute inset-0 w-full h-full -z-10 opacity-5">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" />
            <path d="M50 20V50L70 70" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        <div className="relative">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{timer.title}</h3>
              <p className="text-gray-600 mt-1">{timer.description}</p>
            </div>
            <div className="flex gap-2">
              <EditButton onClick={() => setIsEditModalOpen(true)} title="Edit Timer" />
              <RestartTimerButton onClick={handleRestart} />
              <DeleteButton onClick={handleDelete} title="Delete Timer" />
            </div>
          </div>
          <div className="flex flex-col items-center mt-6">
            <div className="text-4xl font-mono font-bold text-gray-800 mb-4">
              {formatTime(currentTime)}
            </div>

            <TimerProgress progress={(timer.remainingTime / timer.duration) * 100} />

            <TimerControls
              isRunning={timer.isRunning}
              remainingTime={currentTime}
              duration={timer.duration}
              onToggle={handleToggle}
              onRestart={handleRestart}
            />
          </div>
        </div>
      </div>

      <EditTimerModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        timer={timer}
      />
    </>
  );
};

export default TimerItem;
