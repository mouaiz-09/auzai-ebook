import "./Styles/UI.css";
import MainLogo from "../Photo/Main-logo-no-text.png"

//-----------Mui __---------------------------
import Typography from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
//-----------Mui __---------------------------
export default function NavBar(params) {
    return (
        <div   style={{
          width:"100%"
          , display:"flex",
          justifyContent:"center"
          ,alignItems:"center",
          padding:"20px" , 
        
        }} >
          <div className="NavBar">
            <div className="Logo">
                 <img   className="LogoNavBar" src={MainLogo} alt="logo "></img>
            </div>
            <div className="Links">
            <ButtonGroup
                 disableElevation
                 variant="text"
                 aria-label="Disabled button group"
                  style={{display:"flex",
                    justifyContent:"space-between"
                  }}
                 
                >
                          <Button className="NavButton">Home</Button>
                           <Button className="NavButton">Books</Button>
                          <Button className="NavButton">Noveles</Button>
                           
              </ButtonGroup>
            </div>
            <div className="Menu">
               <MenuIcon/>
            </div>
          </div>
        </div>
    )
}