import React, { useState, useEffect } from 'react';

import { useTimerStore } from '@custom-hooks';
import { validateTimerForm } from '@utils/validation';
import { Timer } from '@types/timer';

import { Input, TextArea, FieldWrapper, PrimaryButton, SecondaryButton } from '@ui-components';
import { ModalWrapper } from '@components/timer';

interface EditTimerModalProps {
  isOpen: boolean;
  onClose: () => void;
  timer: Timer;
}

const EditTimerModal: React.FC<EditTimerModalProps> = ({ isOpen, onClose, timer }) => {
  const [title, setTitle] = useState(timer.title);
  const [description, setDescription] = useState(timer.description);
  const [hours, setHours] = useState(Math.floor(timer.duration / 3600));
  const [minutes, setMinutes] = useState(Math.floor((timer.duration % 3600) / 60));
  const [seconds, setSeconds] = useState(timer.duration % 60);
  const [touched, setTouched] = useState({
    title: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  const { editTimer } = useTimerStore();

  useEffect(() => {
    if (isOpen) {
      setTitle(timer.title);
      setDescription(timer.description);
      setHours(Math.floor(timer.duration / 3600));
      setMinutes(Math.floor((timer.duration % 3600) / 60));
      setSeconds(timer.duration % 60);
      setTouched({
        title: false,
        hours: false,
        minutes: false,
        seconds: false,
      });
    }
  }, [isOpen, timer]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateTimerForm({ title, description, hours, minutes, seconds })) {
      return;
    }

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    editTimer(timer.id, {
      title: title.trim(),
      description: description.trim(),
      duration: totalSeconds,
    });

    onClose();
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
    <ModalWrapper title="Edit Timer" handleClick={handleClose}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label={'Title'}
          type="text"
          name="title"
          value={title}
          placeholder="Enter timer title"
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
          onChange={(e) => setDescription(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter timer description (optional)"
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
          <SecondaryButton
            type="button"
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            Cancel
          </SecondaryButton>
          <PrimaryButton type="submit" disabled={!isTitleValid || !isTimeValid}>
            Save Changes
          </PrimaryButton>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default EditTimerModal;
