import React, { useState } from 'react';

import { useTimerStore } from '@store/useTimerStore';
import { validateTimerForm } from '@utils/validation';

import { Input, TextArea, FieldWrapper } from '@ui-components';
import { ModalWrapper } from '@components/timer';

interface AddTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddTimerModal: React.FC<AddTimerModalProps> = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [touched, setTouched] = useState({
    title: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  const { addTimer } = useTimerStore();

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateTimerForm({ title, description, hours, minutes, seconds })) {
      return;
    }

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    addTimer({
      title: title.trim(),
      description: description.trim(),
      duration: totalSeconds,
      remainingTime: totalSeconds,
      isRunning: false,
    });

    onClose();
    setTitle('');
    setDescription('');
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setTouched({
      title: false,
      hours: false,
      minutes: false,
      seconds: false,
    });
  };

  const handleClose = () => {
    onClose();
    setTouched({
      title: false,
      hours: false,
      minutes: false,
      seconds: false,
    });
  };

  const isTimeValid = hours > 0 || minutes > 0 || seconds > 0;
  const isTitleValid = title.trim().length > 0 && title.length <= 50;

  return (
    <ModalWrapper title="Add New Timer" handleClick={handleClose}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label={'Title'}
          type="text"
          name="title"
          value={title}
          placeholder="Enter timer title"
          required={true}
          maxLength={50}
          formError={{
            hasError: touched.title && !isTitleValid,
            errorMessage: 'Title is required and must be under 50 characters',
          }}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => setTouched({ ...touched, title: true })}
        >
          <p className="mt-1 text-sm text-gray-500">{title.length}/50 characters</p>
        </Input>

        <TextArea
          label="Description"
          value={description}
          name="description"
          rows={3}
          placeholder="Enter timer description (optional)"
          onChange={(e) => setDescription(e.target.value)}
        />

        <FieldWrapper label="Duration" required>
          <div className="grid grid-cols-3 gap-4">
            <Input
              label="Hours"
              name="hours"
              type="number"
              min="0"
              max="23"
              value={hours}
              onChange={(e) => setHours(Math.min(23, parseInt(e.target.value) || 0))}
              onBlur={() => setTouched({ ...touched, hours: true })}
            />

            <Input
              label="Minutes"
              name="minutes"
              type="number"
              min="0"
              max="59"
              value={minutes}
              onChange={(e) => setMinutes(Math.min(59, parseInt(e.target.value) || 0))}
              onBlur={() => setTouched({ ...touched, minutes: true })}
            />

            <Input
              label="Seconds"
              name="seconds"
              type="number"
              min="0"
              max="59"
              value={seconds}
              onChange={(e) => setSeconds(Math.min(59, parseInt(e.target.value) || 0))}
              onBlur={() => setTouched({ ...touched, seconds: true })}
            />
          </div>
        </FieldWrapper>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`px-4 py-2 text-sm font-medium text-white rounded-md transition-colors ${
              isTitleValid && isTimeValid
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-blue-400 cursor-not-allowed'
            }`}
            disabled={!isTitleValid || !isTimeValid}
          >
            Add Timer
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default AddTimerModal;
