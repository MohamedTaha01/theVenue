import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../resources/images/slide1.jpg";
import slide2 from "../../resources/images/slide2.jpg";
import slide3 from "../../resources/images/slide3.jpg";

const Carrousel = () => {
  const settings = {
    dots: false,
    isfinite: true,
    fade: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: `${window.innerHeight}px`,
        width: `${window.innerWidth}px`,
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide1})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide2})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide3})`,
              height: `${window.innerHeight}px`,
            }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
