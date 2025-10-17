import "./Styles/Component.css";
import Selecter from "../Ui/Selecter";
import CardShow from "../Ui/CardShow";
import palestine from "../Photo/palestine.gif";

/*-----animation---- */
import BlurText from "../Animation/Text/BluerText";
import AnimatedContent from "../Animation/Componentes/Animated";

/*--------------------------MUI-------------------------------- */
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import Divider from "@mui/joy/Divider";

/*--------------------------MUI-------------------------------- */

export default function Noveles() {
  document.title="Novoles |Book_Dz"
  return (
    <>
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
        <Container maxWidth="lg" className="Books">
          <div className="BooksTop">
            {/*-------------Logo section-------*/}

            <div style={{ marginBottom: "10px" }}>
              <img
                className="BooksLogoHome"
                width={"10px"}
                src={palestine}
                alt="logo "
              />
            </div>
            {/*-------------Logo section------- */}
            <div className="BooksTitel">
              {/*-----Titel Animation ----------*/}
              <BlurText
                text="Noveles  Section"
                delay={50}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8 "
              />

              <BlurText
                text="Pdf (-.-)"
                delay={50}
                animateBy="words"
                direction="top"
                className="SmallTitelBooks "
              />

              {/*-----Titel Animation ----------*/}
            </div>
            <div className="BooksSerchSection">
              {/* -------------Inputs Sction--- */}
              <Paper
                component="form"
                className="Form"
                sx={{
                  p: "7px 7px",
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <InputBase
                  className="Forms"
                  sx={{ ml: 1, flex: 1, height: "50px" }}
                  placeholder="Search Noveles.... "
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

              {/* -------------Inputs Sction--- */}
            </div>
          </div>

          <hr
            style={{ width: "100%", marginTop: "15px", overflow: "hidden" }}
          />
          <div className="BodyCover" style={{ height: "100%" }}>
            <div className="BooksBody" style={{ height: "100%" }}>
              <div className="BooksShow" sstyle={{ height: "auto" }}>
                <div className="Filter">
                  <div className="FilterOptions">
                    <Selecter Options={["ar ", "en", "fr"]} text="Lange" />
                    <Selecter Options={["Books ", "hestory"]} text="Type" />

                    <Button
                      className="BtnSerchHome"
                      variant="contained"
                      color="success"
                    >
                      {" "}
                      aplay
                    </Button>
                  </div>
                </div>

                <Divider
                  orientation="horizontal"
                  style={{
                    history: "30px",
                  }}
                >
                  Filters
                </Divider>
                <div className="TheBooksCard">
                  <div className="TheBooksCardContent">
                    <CardShow />
                    <CardShow />
                    <CardShow Name="Dz" />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                    <CardShow />
                  </div>
                </div>
              </div>

              <div className="BooksMenu">
                <div className="BooksMenusCo">
                  <ul>
                    <li>
                      {/*icon */}
                      <img
                        alt="islamic"
                        className="ListImge"
                        src="https://cdn-icons-png.flaticon.com/128/1051/1051465.png"
                      />
                      {/*Name */}
                      <p> Islamic</p>
                    </li>
                    <li>
                      {/*icon */}
                      <img
                        alt="islamic"
                        className="ListImge"
                        src="https://cdn-icons-png.flaticon.com/128/1051/1051465.png"
                      />
                      {/*Name */}
                      <p> Islamic</p>
                    </li>
                    <li>
                      {/*icon */}
                      <img
                        alt="islamic"
                        className="ListImge"
                        src="https://cdn-icons-png.flaticon.com/128/1051/1051465.png"
                      />
                      {/*Name */}
                      <p> Islamic</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </AnimatedContent>
    </>
  );
}
