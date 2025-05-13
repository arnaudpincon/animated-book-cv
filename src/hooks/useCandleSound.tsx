// Custom hook to manage candle state and sounds
import { useCallback, useState } from 'react';
import useSound from 'use-sound';
import sound from '../assets/sound.mp3';

const CANDLE_SOUNDS = {
  BLOW: 'blow',
  LIGHT_ON: 'lightOn'
};

const SOUND_SPRITES = {
  [CANDLE_SOUNDS.BLOW]: [5000, 500] as [number, number],
  [CANDLE_SOUNDS.LIGHT_ON]: [6000, 1000] as [number, number],
};

export const useCandleSound = () => {
  const [isLit, setIsLit] = useState(true);
  
  const [play] = useSound(sound, {
    sprite: SOUND_SPRITES
  });
  
  const toggleCandle = useCallback(() => {
    play({ id: isLit ? CANDLE_SOUNDS.BLOW : CANDLE_SOUNDS.LIGHT_ON });
    setIsLit(prevIsLit => !prevIsLit);
  }, [isLit, play]);
  
  return {
    isLit,
    toggleCandle
  };
};

export default useCandleSound;