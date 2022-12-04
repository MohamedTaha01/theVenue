import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import MyButton from "../utils/MyButton";

const Discount = () => {
  const [count, setCount] = useState(0);
  const end = 48;
  const porcentage = (c) => {
    if (c < end) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      if (count > 0 && count < 48) {
        setCount((prevCount) => prevCount + 1);
      }
    }, 30);
  }, [count]);
  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              porcentage(count);
            }
          }}
        >
          <div className="discount_porcentage">
            <span>{count}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide triggerOnce>
          <div className="discount_description">
            <h3>Purchase ticket before 20th June</h3>
            <p>
              Sagittis laoreet etiam pretium posuere hac vitae, gravida quam
              dictum integer netus facilisi vestibulum, dignissim praesent eget
              scelerisque arcu. Arcu maecenas convallis praesent aenean eros
              ultrices primis volutpat imperdiet tellus, porttitor et neque
              justo integer nibh inceptos ante ad, mus est posuere dictum sed
              hac dignissim mattis congue.
            </p>
            <MyButton
              link="https://www.google.com/"
              size="medium"
              icon={true}
              text="Purchase tickets"
              style={{ backgroundColor: "#16213E" }}
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;
