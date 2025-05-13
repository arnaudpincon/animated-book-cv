// useBookSound.ts --- Custom hook to handle sounds when browsing the book
import { useRef, useCallback, useMemo } from 'react';
import useSound from 'use-sound';
import sound from '../assets/sound.mp3';
import type { StateChangeEvent } from '../types/page';

const PAGE_EVENTS = {
  FOLD_CORNER: 'fold_corner',
  USER_FOLD: 'user_fold',
  FLIPPING: 'flipping',
  READ: 'read'
} as const;

const SOUND_CONFIG = {
  COVER_THRESHOLD: 200, // Threshold to detect if we're turning the cover
  SOUND_SPRITES: {
    page1: [0, 1000] as [number, number],
    page2: [1000, 1000] as [number, number],
    page3: [2000, 1000] as [number, number],
    page4: [3000, 1000] as [number, number],
    cover: [4000, 1000] as [number, number],
  }
};

export const useBookSound = () => {
  const triggerSound = useRef<boolean>(false);
  const soundSequence = useRef<number[]>([1, 2, 3, 4]);
  const currentSoundIndex = useRef<number>(0);
  
  const [play] = useSound(sound, {
    sprite: SOUND_CONFIG.SOUND_SPRITES
  });

  const shuffleArray = useCallback((array: number[]): number[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }, []);

  // Initialize the sound sequence randomly
  const initSoundSequence = useCallback(() => {
    soundSequence.current = shuffleArray(soundSequence.current);
  }, [shuffleArray]);

  const isCoverPage = useCallback((currentPage: number, mouseX: number): boolean => {
    return (currentPage === 1 && mouseX < SOUND_CONFIG.COVER_THRESHOLD) || currentPage === 0;
  }, []);
  
  // Generates a new sound sequence
  const generateNewSoundSequence = useCallback(() => {
    const currentSequence = [...soundSequence.current];
    const lastSound = currentSequence[currentSequence.length - 1];
    const newSequence = shuffleArray([...currentSequence]);
    
    // Avoid new first sound be the last sound of the previous sequence
    if (newSequence[0] === lastSound) {
      [newSequence[0], newSequence[1]] = [newSequence[1], newSequence[0]];
    }
    
    soundSequence.current = newSequence;
  }, [shuffleArray]);
  
  // Plays a sound based on current page and mouse position
  const handleSoundPlay = useCallback((currentPage: number, mouseX: number) => {
    // If COVER
    if (isCoverPage(currentPage, mouseX)) {
      play({ id: 'cover' });
      return;
    }
    
    // If Normal page
    if (currentPage !== 0) {
      const selectedSound = soundSequence.current[currentSoundIndex.current];
      play({ id: 'page' + selectedSound });
      
      // Move to next sound
      currentSoundIndex.current = (currentSoundIndex.current + 1) % soundSequence.current.length;
      
      if (currentSoundIndex.current === 0) {
        generateNewSoundSequence();
      }
    }
  }, [play, isCoverPage, generateNewSoundSequence]);

  //Handles book state changes and triggers appropriate sounds
  const handleStateChange = useCallback((state: StateChangeEvent): void => {

    if (!state || !state.object || !state.object.pages || !state.object.mousePosition) {
      console.warn('Incomplete state event received', state);
      return;
    }

    const { data, object } = state;
    const currentPage = object.pages.currentPageIndex;
    const mouseX = object.mousePosition.x;
    const isUserMove = object.isUserMove;
    
    switch (data) {
      case PAGE_EVENTS.FOLD_CORNER:
        triggerSound.current = false;
        break;
        
      case PAGE_EVENTS.USER_FOLD:
        triggerSound.current = true;
        break;
        
      case PAGE_EVENTS.FLIPPING:
        handleSoundPlay(currentPage, mouseX);
        triggerSound.current = false;
        break;
        
      case PAGE_EVENTS.READ:
        // Only play sound if the user is turning the page
        if (isUserMove && triggerSound.current) {
          handleSoundPlay(currentPage, mouseX);
        }
        break;
    }
  }, [handleSoundPlay]);

  return useMemo(() => ({
    initSoundSequence,
    handleStateChange
  }), [initSoundSequence, handleStateChange]);
};

export default useBookSound;