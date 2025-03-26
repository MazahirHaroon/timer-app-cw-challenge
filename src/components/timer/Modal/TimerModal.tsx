import React, { useState } from 'react';
// import { toast } from 'sonner';

import { useTimerStore } from '@custom-hooks';
import { validateTimerForm } from '@utils/validation';
import { Timer } from '@types/timer';

import {
  Input,
  TextArea,
  FieldWrapper,
  PrimaryButton,
  SecondaryButton,
  ErrorMessage,
} from '@ui-components';
import { ModalWrapper } from '@components/timer';

interface TimerModalProps {
  onClose: () => void;
  timer?: Timer;
  isEditMode?: boolean;
}

const TimerModal: React.FC<TimerModalProps> = ({ onClose, timer, isEditMode = false }) => {
  const [title, setTitle] = useState(timer?.title || '');
  const [description, setDescription] = useState(timer?.description || '');
  const [hours, setHours] = useState(timer ? Math.floor(timer.duration / 3600) : 0);
  const [minutes, setMinutes] = useState(timer ? Math.floor((timer.duration % 3600) / 60) : 0);
  const [seconds, setSeconds] = useState(timer ? timer.duration % 60 : 0);
  const [touched, setTouched] = useState({
    title: false,
    hours: false,
    minutes: false,
    seconds: false,
  });

  const hasTouchedTimeFields = touched.hours || touched.minutes || touched.seconds;
  const { addTimer, editTimer } = useTimerStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateTimerForm({ title, description, hours, minutes, seconds })) {
      return;
    }

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (isEditMode && timer) {
      editTimer(timer.id, {
        title: title.trim(),
        description: description.trim(),
        duration: totalSeconds,
      });
    } else {
      addTimer({
        title: title.trim(),
        description: description.trim(),
        duration: totalSeconds,
        remainingTime: totalSeconds,
        isRunning: false,
      });
    }

    handleClose();
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
    <ModalWrapper title={isEditMode ? 'Edit Timer' : 'Add New Timer'} handleClick={handleClose}>
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
          {!isTimeValid && hasTouchedTimeFields ? (
            <ErrorMessage errorMessage={'Please set a time greater than 0'} />
          ) : null}
        </FieldWrapper>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <SecondaryButton
            type="button"
            onClick={handleClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
          >
            Cancel
          </SecondaryButton>
          <PrimaryButton type="submit">{isEditMode ? 'Save Changes' : 'Add Timer'}</PrimaryButton>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default TimerModal;
