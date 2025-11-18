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

export default function Books() {
  document.title = "ßooks Section";
  console.log(document.images);

  const images = document.querySelectorAll("img");

  // Loop through each image and add the attribute
  images.forEach((img) => {
    img.setAttribute("loading", "lazy");
  });

  const Categoures = [
    { Name: "Islamic" },
    { Name: "sciences" },
    { Name: "History" },
    { Name: "Language" },
    { Name: "Human development" },
    { Name: "Technology" },
  ];
  const CategouresShow = Categoures.map((C) => {
    return (
      <li>
        <img
          alt="islamic"
          className="ListImge"
          src="https://cdn-icons-png.flaticon.com/128/1051/1051465.png"
        />

        <p> {C.Name}</p>
      </li>
    );
  });

  return (
    <>
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
              text="ßooks Section"
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
                placeholder="Search ßooks.... "
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

        <hr style={{ width: "100%", marginTop: "15px", overflow: "hidden" }} />
        <div className="BodyCover" style={{ height: "100%", width: "100%" }}>
          <div className="BooksBody" style={{ height: "100%", width: "100%" }}>
            <div
              className="BooksShow"
              style={{ height: "100%", width: "100%" }}
            >
              <Divider orientation="horizontal" style={{ marginTop: "5px" }}>
                {" "}
                Filters
              </Divider>
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
                  marginTop: "5px",
                }}
              >
                All ßooks
              </Divider>
              <div className="TheBooksCard">
                <div className="TheBooksCardContent">
                  <CardShow
                    Name="the prince"
                    auther="mycafile"
                    src="https://www.noor-book.com/publice/covers_cache_webp/2/6/b/8/628dd2af4d6b8931be3c95aedc4e5ed9.png.webp"
                  />
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
              <Divider orientation="horizontal">Categoures</Divider>
              <div className="BooksMenusCo">
                <ul>{CategouresShow}</ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
