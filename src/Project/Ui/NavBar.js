import "./Styles/UI.css";
import MainLogo from "../Photo/Main-logo-no-text.png"
import { Link } from "react-router-dom"

//-----------Mui __---------------------------';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

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
                          <Button className="NavButton">
                             <Link to="/" >
                                   Home
                            </Link>
                            </Button>

                           <Button className="NavButton">
                              <Link  to="Books">
                                  Books
                             </Link>
                            </Button>
                          <Button  className="NavButton"> 
                            <Link  to="Noveles">
                                   Noveles
                             </Link>
                          </Button>
                           
              </ButtonGroup>
            </div>
            <div className="Menu">
               <Button   className="BtnNavbarAdd" variant="contained"  startIcon={<LocalLibraryIcon   />}> new </Button>
            </div>
          </div>
        </div>
    )
}