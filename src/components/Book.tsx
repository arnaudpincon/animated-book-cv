import HTMLFlipBook from 'react-pageflip';
import './styles/book.css';
import React, { useEffect, useRef, useState } from 'react';
import useSound from 'use-sound';
import sound from '../assets/sound.mp3';
import { Presentation } from './Presentation';
import { Cover } from './Cover';
import TableContent from './TableContent';
import { Experience } from './Experience';
import Skills from './Skills';
import Education from './Education';
import Projects from './Projects';
import Contacts from './Contact';

// Définition des interfaces
interface PageProps {
  number: string;
  title?: string;
  children?: React.ReactNode;
}

interface PageCoverProps {
  number: string;
  children?: React.ReactNode;
}

interface PageChapterProps {
  number: string;
  title?: string;
}

interface StateChangeEvent {
  data: string;
  object: {
    pages: {
      currentPageIndex: number;
    };
    mousePosition: {
      x: number;
      y: number;
    };
    isUserMove: boolean;
  };
}

export const MyBook: React.FC = () => {
  const triggerSound = useRef<boolean>(false);
  const soundSequence = useRef<number[]>([1, 2, 3, 4]);
  const currentSoundIndex = useRef<number>(0);

  // États pour les dimensions du livre
  const [isMobile, setIsMobile] = useState(false);

  const updateDimensions = () => {
    const width = window.innerWidth;
    if (width <= 768) { // Seuil pour mobile
      setIsMobile(true);
    } else if (width <= 1024) { // Seuil pour tablette
      setIsMobile(false);
    } else { // Desktop
      setIsMobile(false);
    }
  };

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  useEffect(() => {
    soundSequence.current = shuffleArray(soundSequence.current);
  }, []);

  const [play] = useSound(sound, {
    sprite: {
      page1: [0, 1000],
      page2: [1000, 1000],
      page3: [2000, 1000],
      page4: [3000, 1000],
      cover: [4000, 1000],
    },
  });

  // Function to shuffle sound
  const shuffleArray = (array: number[]): number[] => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Handle state change and only play sound when state is "flipping"
  const handleStateChange = (state: StateChangeEvent): void => {
    const currentPage = state.object.pages.currentPageIndex;

    if (state.data === "fold_corner") {
      triggerSound.current = false;
    }

    if (state.data === "user_fold") {
      triggerSound.current = true;
    }

    if (state.data === "flipping") {
      if ((currentPage === 1 && state.object.mousePosition.x < 200) || currentPage === 0) {
        play({ id: 'cover' });
      } else if (currentPage !== 0) {
        const selectedSound = soundSequence.current[currentSoundIndex.current];
        play({ id: 'page' + selectedSound });
        currentSoundIndex.current = (currentSoundIndex.current + 1) % soundSequence.current.length;

        if (currentSoundIndex.current === 0) {
          const newSequence = shuffleArray([...soundSequence.current]);

          if (newSequence[0] === soundSequence.current[soundSequence.current.length - 1]) {
            [newSequence[0], newSequence[1]] = [newSequence[1], newSequence[0]];
          }

          soundSequence.current = newSequence;
        }
      }
      triggerSound.current = false;
    }

    if (state.data === "read" && state.object.isUserMove && triggerSound.current) {
      if ((currentPage === 1 && state.object.mousePosition.x > 200) || currentPage === 0) {
        play({ id: 'cover' });
      } else if (currentPage !== 0) {
        const selectedSound = soundSequence.current[currentSoundIndex.current];
        play({ id: 'page' + selectedSound });
        currentSoundIndex.current = (currentSoundIndex.current + 1) % soundSequence.current.length;

        if (currentSoundIndex.current === 0) {
          const newSequence = shuffleArray([...soundSequence.current]);

          if (newSequence[0] === soundSequence.current[soundSequence.current.length - 1]) {
            [newSequence[0], newSequence[1]] = [newSequence[1], newSequence[0]];
          }

          soundSequence.current = newSequence;
        }
      }
    }
  };

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
      <PageCover number="0"><Cover /></PageCover>
      <PageCover number="0"></PageCover>
      <Page number="1" title="Table of Contents"><TableContent /></Page>
      <Page number="2" title="Summary"><Presentation /></Page>
      <Page number="3" title="Summary"><Skills /></Page>
      <Page number="4" title="Summary"><Contacts /></Page>
      <PageChapter number="5" title="Experience"></PageChapter>
      <Page number="6" title="Experience: Oct. 2021 → May 2025"><Experience /></Page>
      <Page number="7" title="Experience: Sep. 2018 → Jan. 2020"><Experience experienceIndex={1} /></Page>
      <Page number="8" title="Experience: Feb. 2016 → Feb. 2017"><Experience experienceIndex={2} /></Page>
      <PageChapter number="9" title="Education"></PageChapter>
      <Page number="10" title="Education"><Education /></Page>
      <Page number="11" title="Education"><Education index1={3} index2={5} /></Page>
      <PageChapter number="12"></PageChapter>
      <PageChapter number="13" title="Projects"></PageChapter>
      <Page number="14" title="Projects"><Projects /></Page>
      <Page number="15" title="Projects"><Projects index1={1} index2={2} /></Page>
      <Page number="16" title="Projects"><Projects index1={2} index2={3} /></Page>
      <Page number="17" title="Projects"><Projects index1={3} index2={4} /></Page>
      <Page number="18" title="Projects"><Projects index1={4} index2={5} /></Page>
      <Page number="19" title="Projects"><Projects index1={5} index2={6} /></Page>
      <Page number="20" title="Projects"><Projects index1={6} index2={7} /></Page>
      <PageCover number="21"></PageCover>
    </HTMLFlipBook>
  );
};

// Pages
/* const PageInvisible = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className="page page-invisible" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
}); */

const PageCover = React.forwardRef<HTMLDivElement, PageCoverProps>((props, ref) => {
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content">
        <h2>{props.children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef<HTMLDivElement, PageProps>((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h2 className="page-header">{props.title}</h2>
        <div className="page-text">{props.children}</div>
        <div className="page-footer">- {props.number} -</div>
      </div>
    </div>
  );
});

const PageChapter = React.forwardRef<HTMLDivElement, PageChapterProps>((props, ref) => {
  return (
    <div className="page" ref={ref}>
      <div className="page-content">
        <h1 className="page-chapter-header">{props.title}</h1>
        <div className="page-footer">- {props.number} -</div>
      </div>
    </div>
  );
});