import { useCallback } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Slide } from "react-awesome-reveal";

const TimeUntil = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const renderItem = (t, v) => (
    <div className="countdown_item">
      <div className="countdown_time">{t}</div>
      <div className="countdown_tag">{v}</div>
    </div>
  );
  const getTimeUntil = useCallback((deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("Date passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setTime({ days, hours, minutes, seconds });
    }
  }, []);
  useEffect(() => {
    setInterval(() => getTimeUntil("May,5,2026, 01:30:00"), 1000);
  }, [getTimeUntil]);
  return (
    <Slide left delay={500} triggerOnce>
      <div>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event starts in</div>
          <div className="countdown_bottom">
            {renderItem(time.days, "Days")}
            {renderItem(time.hours, "Hs")}
            {renderItem(time.minutes, "Min")}
            {renderItem(time.seconds, "Sec")}
          </div>
        </div>
      </div>
    </Slide>
  );
};
export default TimeUntil;
