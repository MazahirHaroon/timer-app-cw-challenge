import { useEffect, useState } from 'react';

import { SCREEN_SIZES_MAX_WIDTH } from '../constants';

export const useToasterPosition = () => {
  const [position, setPosition] = useState<'top-right' | 'bottom-center'>('top-right');

  useEffect(() => {
    const updatePosition = () => {
      const isMobile = window.matchMedia(`(${SCREEN_SIZES_MAX_WIDTH.small})`).matches;
      setPosition(isMobile ? 'bottom-center' : 'top-right');
    };
    updatePosition();
    window.addEventListener('resize', updatePosition);

    return () => removeEventListener('resize', updatePosition);
  }, []);

  return position;
};
