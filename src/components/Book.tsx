// MyBook.tsx
import HTMLFlipBook from 'react-pageflip';
import './styles/book.css';
import React, { useEffect } from 'react';
import useBookDimensions from '../hooks/useBookDimensions';
import useBookSound from '../hooks/useBookSound';
import getBookPages from './BookContent';

export const MyBook: React.FC = () => {
  const { isMobile } = useBookDimensions();
  const { initSoundSequence, handleStateChange } = useBookSound();
  const bookPages = getBookPages();

  useEffect(() => {
    initSoundSequence();
  }, [initSoundSequence]);

  return (
    <HTMLFlipBook 
      width={500} 
      height={!isMobile ? 700 : 800} 
      mobileScrollSupport={true} 
      className='book-container' 
      showPageCorners={true} 
      drawShadow={true} 
      showCover={true}
      autoSize={true} 
      swipeDistance={10} 
      onChangeState={handleStateChange} 
      flippingTime={500} 
      disableFlipByClick={true}
    >
      {bookPages}
    </HTMLFlipBook>
  );
};

export default MyBook;