import "./Styles/Component.css"
import CardVariants from "../Ui/CardCategory"
import MainLogo from "../Photo/Main-logo-no-text.png"
import NovelesLogo from "../Photo/books.png"
import BookLogo from "../Photo/Noveles.png"
import { Link } from "react-router-dom"

/*-----animation---- */
import BlurText from "../Animation/Text/BluerText";
import AnimatedContent from "../Animation/Componentes/Animated"

/*--------------------------MUI-------------------------------- */
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import SearchIcon from '@mui/icons-material/Search';
import Button from "@mui/material/Button"

/*--------------------------MUI-------------------------------- */




export default function Homer(params) {
  /*-----animation---- */
const handleAnimationComplete = () => {

  console.log('Animation completed!');

};
/*-----animation---- */
    return (
      <AnimatedContent
          distance={50}
          direction
          reverse={true}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.2}
          threshold={0.2}
          delay={0}
        >

            <Container maxWidth="lg"  >
            <div className="Home" style={{width:"100%"}}>

                <div  className="HomeTop" >
                   <div className="HTS1" >

                    {/*-------------Logo section------- */}
                    <div style={{marginBottom:"40px"}}>

                    <img   className="MainLogoHome" src={MainLogo} alt="logo "></img>
                    </div>
                    {/*-------------Logo section------- */}
                     {/*-----Titel Animation ----------*/}
                         < BlurText text="Discaverd Your Next Book !!!"
                           delay={50}
                           animateBy="words"
                           direction="top"
                           onAnimationComplete={handleAnimationComplete}
                           className="text-2xl mb-8"
                           
                           
                           />
                      {/*-----Titel Animation ----------*/}

                      {/* -------------Inputs Sction--- */}
                      <Paper
                           component="form"
                            className="Form"
                           sx={{ p: '7px 7px', display: 'flex', alignItems: 'center', width: "700px"  }}
                               >
                                     
                                      <InputBase
                                      className="Forms"
                                        sx={{ ml: 1, flex: 1 , height:"50px" }}
                                        placeholder="Search Books.... "
                                        inputProps={{ 'aria-label': 'search ' }}
                                      />
                                     
                                      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                                      <IconButton className="BtnSerchHome"  type="submit"      aria-label="search">
                                        <SearchIcon  />
                                      </IconButton>
                        </Paper>

                      {/* -------------Inputs Sction--- */}
                   </div>
                   <div className="HTS2">
                     {/*----------------Book & Noveles---------- */}
                     <div className="Categoures">
                       <div className="Books  Noveles HomeCard">
                         <Container maxWidth="sm" style={{
                        
                            display:"grid" , 
                            gridTemplateColumns:"auto  auto",
                            gridTemplateRows:'auto' , 
                            columnGap:"40px",
                            rowGap:"10px" , 
                            padding:"30px" , 
                            marginTop:"5px"
                         }}>
                     
                           <Link   to={"Books"}>
                                 <CardVariants     Src={BookLogo} Titel={"Books"} />
                           </Link>  

                           <Link to="Noveles" >
                                <CardVariants  Src={NovelesLogo} Titel={"Noveles"}/>
                           </Link>

                        </Container>

                       </div>
                       <div className="NewBooks"  style={{
                                   width:"100%",
                                   display:"flex",
                                   justifyContent:"center",
                                   alignItems:"center",
                                   margin:"20px"                 
                                   }}>
                       
                          <Button variant="contained" 
                           className="BtnAddNewBook" 
                           startIcon ={<LocalLibraryIcon  style={{
                       margin:"2px",
                            fontSize:"30px"
                           }}/>}
                           > Add new Book
                           </Button>
                        
                       </div>
                     </div>
                     {/*----------------Book & Noveles---------- */}
                   </div>
                 </div>
            </div>
            </Container>
     </AnimatedContent>
    )
}