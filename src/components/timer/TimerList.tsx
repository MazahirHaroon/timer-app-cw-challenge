import React from 'react';

import { useTimerStore } from '@store/useTimerStore';

import { EmptyState, TimerItem } from 'src/components/timer';

const TimerList: React.FC = () => {
  const { timers } = useTimerStore();

  return (
    <section className="py-10 container space-y-4 min-h-[400px]">
      {timers.length === 0 ? (
        <div className="h-[400px] flex flex-col items-center justify-center text-center">
          <EmptyState />
          <p className="text-gray-500 text-xl font-medium">
            No timers yet. Add one to get started!
          </p>
          <p className="text-gray-400 mt-2">
            Click the "Add Timer" button above to create your first timer.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {timers.map((timer) => (
            <TimerItem key={timer.id} timer={timer} />
          ))}
        </div>
      )}
    </section>
  );
};

export default TimerList;
