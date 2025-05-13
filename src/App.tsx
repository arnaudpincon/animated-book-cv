// App.tsx
import './App.css';
import './fonts.css';
import { CandleTopView } from './components/CandleTop';
import { MyBook } from './components/Book';
import useCandleSound from './hooks/useCandleSound';

function App() {
  const { isLit, toggleCandle } = useCandleSound();

  return (
    <div className={`container ${isLit ? 'room-lit' : 'room-dark'}`}>
      <CandleTopView 
        isLit={isLit} 
        onClick={toggleCandle} 
      />
      <MyBook />
    </div>
  );
}

export default App;