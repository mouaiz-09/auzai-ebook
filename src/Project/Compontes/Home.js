import "./Styles/Component.css";
import CardVariants from "../Ui/CardCategory";
import MainLogo from "../Photo/Main-logo-no-text.png";
import NovelesLogo from "../Photo/books.png";
import BookLogo from "../Photo/Noveles.png";
import { Link } from "react-router-dom";

/*-----animation---- */
import BlurText from "../Animation/Text/BluerText";
import AnimatedContent from "../Animation/Componentes/Animated";

/*--------------------------MUI-------------------------------- */
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";


/*--------------------------MUI-------------------------------- */

import { ScroolTop } from "../Ui/NavBar";

export default function Homer(params) {
  document.title="Home |Book_Dz"
  /*-----animation---- */
  const handleAnimationComplete = () => {
    console.log("Animation completed!");
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
      <Container maxWidth="lg">
        <div className="Home" style={{ width: "100%" }}>
          <div className="HomeTop">
            <div className="HTS1">
              {/*-------------Logo section------- */}
              <div style={{ marginBottom: "40px" }}>
                <img className="MainLogoHome" src={MainLogo} alt="logo "></img>
              </div>
              {/*-------------Logo section------- */}
              {/*-----Titel Animation ----------*/}
              <BlurText
                text="Discaverd Your Next Book !!!"
                delay={50}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-2xl mb-8  TitelAnimation"
              />
              {/*-----Titel Animation ----------*/}

              {/* -------------Inputs Sction--- */}
              <div style={{ width: "100%" }}>
                <Paper
                  component="form"
                  className="Form"
                  sx={{
                    p: "7px 7px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <InputBase
                    className="Forms"
                    sx={{ ml: 1, flex: 1, height: "50px" }}
                    placeholder="Search Books.... "
                    inputProps={{ "aria-label": "search " }}
                  />

                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                  <IconButton
                    className="BtnSerchHome"
                    type="submit"
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </div>

              {/* -------------Inputs Sction--- */}
            </div>
            <div className="HTS2">
              {/*----------------Book & Noveles---------- */}
              <div className="Categoures">
               
                  <Container maxWidth="sm" className="CategouresC">
                    <Link
                      className="CardCategoryCover"
                      onClick={ScroolTop}
                      to={"Books"}
                    >
                      <CardVariants Src={BookLogo} Titel={"Books"} />
                    </Link>

                    <Link
                      className="CardCategoryCover"
                      onClick={ScroolTop}
                      to="Noveles"
                    >
                      <CardVariants Src={NovelesLogo} Titel={"Noveles"} />
                    </Link>

                    <div
                      className="AboutusHome"
                      style={{
                        width: "90%",

                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: "30px ",
                      }}
                    >
                      <Link className="BtnAboutusHome"  onClick={ScroolTop} to={"/about"}>
                        About -us
                      </Link>
                    </div>
                  </Container>
              
              </div>
              {/*----------------Book & Noveles---------- */}
            </div>
          </div>
        </div>
      </Container>
    </AnimatedContent>
  );
}
