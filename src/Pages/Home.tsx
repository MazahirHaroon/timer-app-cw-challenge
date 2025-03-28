import { useState } from 'react';
import { Toaster } from 'sonner';
import { Plus, Clock } from 'lucide-react';

import { PrimaryButton } from '@ui-components';
import { TimerList, TimerModal } from '@components/timer';
import { useToasterPosition } from '@custom-hooks';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const position = useToasterPosition();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Toaster position={position} />
      <div className="container mx-auto px-6 py-8 md:w-[90%]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Clock className="md:w-8 md:h-8 text-blue-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Timer App</h1>
          </div>
          <PrimaryButton onClick={() => setIsModalOpen(true)}>
            <Plus className="w-5 h-5" />
            Add Timer
          </PrimaryButton>
        </div>

        <TimerList />
        {isModalOpen ? <TimerModal onClose={() => setIsModalOpen(false)} /> : null}
      </div>
    </div>
  );
}

export default Home;
