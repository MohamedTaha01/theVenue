import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SlideDrawer from "./SlideDrawer";
import { useEffect, useState } from "react";

const Header = () => {
  const [drawer, setDrawer] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 5) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          backgroundColor: headerShow ? "#1A1A2E" : "transparent",
          boxShadow: "0px 0px",
        }}
      >
        <Toolbar>
          <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">MUSICAL EVENTS</div>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={() => setDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <SlideDrawer drawer={drawer} setDrawer={setDrawer} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
