// Candle.tsx
import '../components/styles/candle.css';

interface CandleProps {
    isLit?: boolean;
    onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  }
  
  export const Candle: React.FC<CandleProps> = ({ isLit = true, onClick }) => {
    return (
        <div className="wrapper">
            <div className="center">
                <div className="candle" onClick={onClick}>
                    {isLit ? (
                        <div className="candle-flame"></div>
                    ) : (
                        <div className="candle-flame-off"></div>
                    )}
                    <div className="candle-wick"></div>
                    <div className="candle-wax"></div>
                    <div className="candle-stand"></div>
                </div>
            </div>
        </div>
    );
};

export default Candle;