import { useState } from 'react';
import { Plus, Clock } from 'lucide-react';
import { Toaster } from 'sonner';

import TimerList from '../components/Timer/TimerList';
import AddTimerModal from '../components/Timer/Modal/AddTimerModal';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6 py-8 md:w-[75%]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Clock className="md:w-8 md:h-8 text-blue-600" />
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Timer App</h1>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center text-sm gap-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors
            md:gap-2 md:px-4 md:py-3 md:text-base md:rounded-xl shadow-md hover:shadow-lg"
          >
            <Plus className="w-5 h-5" />
            Add Timer
          </button>
        </div>

        <TimerList />

        <AddTimerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}

export default Home;
