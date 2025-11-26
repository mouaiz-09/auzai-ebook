import { Link, useParams } from "react-router-dom";
import { Button, Container, Divider } from "@mui/material";
import axios from "axios";
import { ScroolTop } from "../Ui/NavBar";
import { useEffect, useState } from "react";
import Dialogs from "../Ui/Dialogs";
/*--------------------------MUI-------------------------------- */
import BasicBreadcrumbs from "../Ui/Breadcrumbs";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Dangerous from "@mui/icons-material/Dangerous";
import ShareRounded from "@mui/icons-material/ShareRounded";

export function Show() {
  const { id } = useParams();
  /*Mail Help */
  const to = "rlqyyn@gmail.com";
  const subject = "   كتاب " + id;
  const body = "السلام عليكم\nاكتب رسالتك هنا";

  const mailto = `mailto:${to}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  /*Mail Help */

  /*------------------------------------------------ */
  const [BookData, ChangBookData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://back-end-v1.vercel.app/api/books/${id}`)
      .then((res) => {
        ChangBookData(res.data);
        console.log("THe fatching done master mouaiz ");
      })
      .catch((err) => console.log(err.message));
    document.title += BookData.title;
  }, [id]);

  const SHerInfo = {
    bookTitle: BookData.title,
    bookUrl: window.location.href,
    bookText: BookData.description,
  };

  /*------------------------------------------------ */

  return (
    <div className="SHowPage">
      {/*عرض الكتاب */}
      <Container maxWidth="lg" className="InformationsShow">
        <div className="TheRooteOfBookShow">
          <BasicBreadcrumbs BookName={[BookData.title]} />
        </div>
        <div className="Book">
          <div className="Cover">
            <img alt="dz" className="BookCover" src={BookData.cover} />
          </div>
          <div className="Info">
            <div className="MainInfo">
              <h3 className="Titel">{BookData.title}</h3>
              <h5 className="auther">{BookData.author}</h5>
            </div>
            <div className="DescriptionD">
              <Divider sx={{ width: "100%" }}>وصف الكتاب </Divider>
              <h4>{BookData.description}</h4>
              <Divider sx={{ width: "100%", margin: "10px 0px " }} />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <a
                  className="DwBtn"
                  href={BookData.pdf}
                  target="_blank"
                  download={BookData.title}
                  rel="noopener noreferrer"
                >
                  تنزيل الكتاب
                </a>
              </div>
            </div>
          </div>

          <div className="Actions">
            <div className="Sher">
              <Link className="Link" to={"/serch?q=" + BookData.category}>
                <b>{BookData.category}</b>
              </Link>
              <Link className="Link" to={"/serch?q=" + BookData.author}>
                <b>{BookData.author}</b>
              </Link>
            </div>
          </div>
          <div className="Help">
            <Link className="HlepBtn" to={mailto}>
              <Button color="error" variant="contained">
                <Dangerous />
              </Button>
            </Link>
            <div className="HlepBtn">
              <Dialogs
                Dz={SHerInfo}
                titel={<ShareRounded />}
                btnName="اغلاق"
              ></Dialogs>
            </div>

            <div className="shmedai">
              <Button className="ShmedaiBtn">
                <InstagramIcon />
              </Button>

              <Button className="ShmedaiBtn">
                <FacebookOutlinedIcon />
              </Button>

              <Button className="ShmedaiBtn">
                <WhatsAppIcon />
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <Container maxWidth="md" className="ShowButtom">
        <div className="PuBuBtn">
          <Link to={"/"}>
            <h3 className="PublishBtn">اضغط هنا لنشر كتابك !!</h3>
          </Link>
        </div>

        <Divider style={{ margin: "30px" }} />

        <div className="ReturenHome">
          <Button onClick={ScroolTop} className="ShowLinkMain">
            <Link onClick={ScroolTop} to="/">
              <h3>Home</h3>
            </Link>
          </Button>

          <Button onClick={ScroolTop} className="ShowLinkMain">
            <Link to="/books">
              <h3>Books</h3>
            </Link>
          </Button>

          <Button onClick={ScroolTop} className="ShowLinkMain">
            <Link to="/Noveles">
              <h3>Novoles</h3>
            </Link>
          </Button>
        </div>
      </Container>
      {/*عرض الكتاب */}
    </div>
  );
}
