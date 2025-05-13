// CandleTop.tsx
import './styles/candleTop.css'

interface CandleTopViewProps {
  isLit?: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

export const CandleTopView: React.FC<CandleTopViewProps> = ({ isLit = true, onClick }) => {
  return (
    <div>
      <div className="candle-container" onClick={onClick}>
        <div className="support"></div>
        <div className="candle">
          {isLit ? <div className="flame"></div> : <div className="flame-off"></div>}
          <div className="wax-texture"></div>
        </div>
        <div className="wick"></div>
      </div>
    </div>
  )
}