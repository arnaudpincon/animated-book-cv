import './App.css'
import './fonts.css';
import { useCallback, useState } from 'react';
import useSound from 'use-sound';
import sound from './assets/sound.mp3';
import { CandleTopView } from './components/CandleTop';
import { MyBook } from './components/Book';

function App() {

  const [isLit, setIsLit] = useState(true);

  const [play] = useSound(sound, {
    sprite: {
        blow: [5000, 500],
        lightOn: [6000, 1000]
      },
  });
    
  const handleCandleClick = useCallback(() => {
    play({ id: isLit ? 'blow' : 'lightOn' });
    setIsLit(prevIsLit => !prevIsLit);
  }, [isLit, play]);

  return (

      <div className={`container ${isLit ? 'room-lit' : 'room-dark'}`}>
        <CandleTopView isLit={isLit} onClick={handleCandleClick} /> <MyBook />
    </div>
  )
}

export default App
