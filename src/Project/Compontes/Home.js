import "./Styles/Component.css"
import CardVariants from "../Ui/CardCategory"
import MainLogo from "../Photo/Main-logo-no-text.png"
import NovelesLogo from "../Photo/books.png"
import BookLogo from "../Photo/Noveles.png"

/*-----animation---- */
import BlurText from "../Animation/Text/BluerText";
import AnimatedContent from "../Animation/Componentes/Animated"

/*--------------------------MUI-------------------------------- */
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
/*--------------------------MUI-------------------------------- */




export default function Homer(params) {
  /*-----animation---- */
const handleAnimationComplete = () => {

  console.log('Animation completed!');

};
/*-----animation---- */
    return (
      <AnimatedContent
          distance={150}
          direction=""
          reverse={true}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1.5}
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
                       <div className="Books HomeCard">
                         <Container maxWidth="sm" style={{
                        
                            display:"grid" , 
                            gridTemplateColumns:"auto  auto",
                            gridTemplateRows:'auto' , 
                            columnGap:"40px",
                            rowGap:"10px" , 
                            padding:"30px" , 
                            marginTop:"5px"
                         }}>

                           <CardVariants     Src={BookLogo} Titel={"Books"} />
                           <CardVariants  Src={NovelesLogo} Titel={"Noveles"}/>
                           </Container>

                       </div>
                       <div className="Noveles  HomeCard"></div>
                     </div>
                     {/*----------------Book & Noveles---------- */}
                   </div>
                 </div>
            </div>
            </Container>
     </AnimatedContent>
    )
}