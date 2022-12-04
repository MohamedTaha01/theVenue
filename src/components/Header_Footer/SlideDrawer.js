import { Drawer, List, ListItem } from "@mui/material";
import { scroller } from "react-scroll";

const SlideDrawer = ({ drawer, setDrawer }) => {
  const links = [
    { where: "featured", to: "To top" },
    { where: "venueinfo", to: "Venue Info" },
    { where: "highlights", to: "Highlights" },
    { where: "pricing", to: "Pricing" },
    { where: "location", to: "Location" },
  ];
  const scrollToElement = (Element) => {
    scroller.scrollTo(Element, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -150,
    });
    setDrawer(false);
  };
  const renderItems = (item, index) => (
    <ListItem
      button
      onClick={() => scrollToElement(item.where)}
      key={index + item.where}
    >
      {item.to}
    </ListItem>
  );
  return (
    <Drawer anchor="right" open={drawer} onClose={() => setDrawer(false)}>
      <List
        sx={{
          width: 400,
          height: `${window.innerHeight}px`,
          backgroundColor: "#1A1A2E",
          color: "white",
        }}
      >
        {links.map((item) => renderItems(item))}
      </List>
    </Drawer>
  );
};

export default SlideDrawer;
