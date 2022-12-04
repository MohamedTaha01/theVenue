import { Zoom } from "react-awesome-reveal";
import MyButton from "../utils/MyButton";

const Pricing = () => {
  const priceState = {
    prices: [100, 150, 200],
    position: ["Balcony", "Medium", "Star"],
    desc: [
      "Justo primis aliquam venenatis integer nisi torquent eros interdum, pharetra felis erat a nascetur dignissim orci dui.",
      "Conubia praesent porttitor bibendum vivamus scelerisque sociosqu. Tristique ante fringilla odio netus fusce neque etiam gravida at.",
      "Morbi penatibus curae nisi molestie eu porttitor sollicitudin litora, mus tempor commodo cubilia nostra scelerisque quisque varius.",
    ],
    linkto: ["http://sales.b", "http://sales.m", "http://sales.s"],
    delay: [500, 0, 500],
  };
  const showBoxes = () =>
    priceState.prices.map((box, index) => {
      const { prices, position, desc, linkto, delay } = priceState;
      return (
        <Zoom triggerOnce
          key={index + position[index]}
          className="pricing_item"
          delay={delay[index]}
        >
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${prices[index]}</span>
              <span>{position[index]}</span>
            </div>
            <div className="pricing_description">{desc[index]}</div>
            <div className="pricing_buttons">
              <MyButton link={linkto[index]} text='Purchase' />
            </div>
          </div>
        </Zoom>
      );
    });
  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;
