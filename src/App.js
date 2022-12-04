import "./resources/styles.css";
import Header from "./components/Header_Footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venueInfo";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/Header_Footer/Footer";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Element name="featured">
        <Featured />
      </Element>
      <Element name="venueinfo">
        <VenueInfo />
      </Element>
      <Element name="highlights">
        <Highlights />
      </Element>
      <Element name="pricing">
        <Pricing />
      </Element>
      <Element name="location">
        <Location />
      </Element>
      <Footer />
    </div>
  );
};
export default App;
