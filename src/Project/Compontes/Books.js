import "./Styles/Component.css";
import Selecter from "../Ui/Selecter";
import CardShow from "../Ui/CardShow";
import palestine from "../Photo/palestine.gif";
import axios from "axios";
/*-----animation---- */
import BlurText from "../Animation/Text/BluerText";

/*--------------------------MUI-------------------------------- */
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import Divider from "@mui/joy/Divider";
import { useEffect, useState } from "react";

/*--------------------------MUI-------------------------------- */

export default function Books() {
  document.title = "ßooks Section";

  const images = document.querySelectorAll("img");
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

  /*-------------------api ftech :----------------------------- */
  const [BooksData, SetBooksData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://back-end-v1.vercel.app/api/books`)
      .then((res) => {
        SetBooksData(res.data.data); // <-- المهم هنا
        console.log("The fetching done master mouaiz");
      })
      .catch((err) => console.log(err.message));
  }, []);

  const BooksShow = BooksData.map((book) => (
    <CardShow
      Name={book.title}
      auther={book.author}
      key={book._id}
      src={book.cover}
      id={book._id}
    />
  ));

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
                <div className="TheBooksCardContent">{BooksShow}</div>
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
