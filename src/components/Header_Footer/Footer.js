import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer >
      <Fade triggerOnce delay={500}>
        <div className="font_righeous footer_logo_venue">The venue</div>
        <div className="footer_copyright">The venue 2022 rights reserved</div>
      </Fade>
    </footer>
  );
};

export default Footer;
