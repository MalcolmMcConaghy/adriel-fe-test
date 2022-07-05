import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import Tooltip from '../tooltip/Tooltip';
import { timeState } from '../../store/atoms';
import './clock.css';

function Clock() {
  const [time, setTime] = useRecoilState(timeState);
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timerId)
    }
  // eslint-disable-next-line
  }, [])

  return (
    <>
      <div 
        className="clock"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div
          className="hour_hand"
          style={{
            transform: `rotateZ(${time.getHours() * 30}deg)`
          }}
        />
        <div
          className="min_hand"
          style={{
            transform: `rotateZ(${time.getMinutes() * 6}deg)`
          }}
        />
        <div
          className="sec_hand"
          style={{
            transform: `rotateZ(${time.getSeconds() * 6}deg)`
          }}
        />
        <span className="twelve">12</span>
        <span className="one">1</span>
        <span className="two">2</span>
        <span className="three">3</span>
        <span className="four">4</span>
        <span className="five">5</span>
        <span className="six">6</span>
        <span className="seven">7</span>
        <span className="eight">8</span>
        <span className="nine">9</span>
        <span className="ten">10</span>
        <span className="eleven">11</span>
      </div>
      <Tooltip 
        isVisible={isHovering}
      />
    </>

  );
}

export default Clock;
