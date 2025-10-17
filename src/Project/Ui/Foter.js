import GradientText from "../Animation/Text/GradientText";

/*------------------Mui ------ */
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import "./Styles/UI.css";
/*Icons */
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PalstenLogo from "../Photo/palestine.gif";
/*Icons */
/*------------------Mui ------ */
export default function Foter(params) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        zIndex: "5",
      }}
    >
      <div className="Foter">
        <div className="FoterLogo">
          <GradientText
            colors={["#3B82F6", "#0b6b6b", "#0b6b6b", "#334155", "aquamarine"]}
            animationSpeed={5}
            showBorder={false}
          >
            <h1 className="FoterLogoTitel">BOOK DZ</h1>
          </GradientText>
        </div>

        <div className="FoterImge">
          <img
            alt="Palstin"
            title="Free Palisten ......"
            width="40px"
            className="FoterPalsitenLogo"
            src={PalstenLogo}
          ></img>
        </div>
        <div className="FoterLinks">
          <ButtonGroup
            disableElevation
            variant="text"
            aria-label="Disabled button group"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button className="NavButton">
              <InstagramIcon />
            </Button>

            <Button className="NavButton">
              <FacebookOutlinedIcon />
            </Button>

            <Button className="NavButton">
              <WhatsAppIcon />
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
}
