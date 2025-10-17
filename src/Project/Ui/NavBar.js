import "./Styles/UI.css";
import MainLogo from "../Photo/Main-logo-no-text.png";
import { Link } from "react-router-dom";

//-----------Mui __---------------------------';
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
//-----------Mui __---------------------------
export default function NavBar(params) {
  /*------------Menu-----------  */
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  /*------------Menu-----------  */
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div className="NavBar">
        <div className="Logo">
          <img className="LogoNavBar" src={MainLogo} alt="logo "></img>
        </div>
        <div className="Links">
          <ButtonGroup
            disableElevation
            variant="text"
            aria-label="Disabled button group"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button onClick={ScroolTop} className="NavButton">
              <Link to="/">Home</Link>
            </Button>

            <Button onClick={ScroolTop} className="NavButton">
              <Link to="Books">Books</Link>
            </Button>
            <Button onClick={ScroolTop} className="NavButton">
              <Link to="Noveles">Noveles</Link>
            </Button>
          </ButtonGroup>
        </div>
        <div className="Menu">
          {/*-----------Menu Group -------*/}
          <Button
            id="demo-positioned-button"
            aria-controls={open ? "demo-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="BtnNavbarAdd"
            variant="contained"
            startIcon={<LocalLibraryIcon />}
          >
            Menu
          </Button>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            style={{
              marginTop: "50px",
            }}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to={"/"}>Home</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={"/Books"}>Books</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={"/Noveles"}>Noveles</Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to={"/about"}>About-us</Link>
            </MenuItem>
          </Menu>
          {/*-----------Menu Group -------*/}
        </div>
      </div>
    </div>
  );
}

export function ScroolTop(params) {
  window.scrollTo(0, 0);
}
