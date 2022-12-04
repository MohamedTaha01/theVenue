import { Button } from "@mui/material";
import Ticket_icon from "../../resources/images/icons/ticket.png";

const MyButton = ({ link, size, style, icon, text }) => {
  return (
    <Button
      href={link}
      variant="contained"
      size={size ? size : "large"}
      style={{
        backgroundColor: '#16213E',
        color: "#FFFF",
        ...style,
      }}
    >
      {icon ? (
        <img src={Ticket_icon} className="iconImage" alt="icon_botton" />
      ) : null}
      {text}
    </Button>
  );
};

export default MyButton;
