import { Link, Links, useParams } from "react-router-dom";
import { ButtonGroup, Button, Container, Divider } from "@mui/material";
import lgoo from "../Photo/CoverNotAvailable.jpg";
/*--------------------------MUI-------------------------------- */
import BasicBreadcrumbs from "../Ui/Breadcrumbs";
/*--------------------------MUI-------------------------------- */
/*Icons */
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Mail from "@mui/icons-material/Mail";
import Dangerous from "@mui/icons-material/Dangerous";

/*Icons */
export function Show(params) {
  const { id } = useParams();
  /*Mail Help */
  const to = "rlqyyn@gmail.com";
  const subject = "   كتاب " + id;
  const body = "السلام عليكم\nاكتب رسالتك هنا";

  const mailto = `mailto:${to}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  /*Mail Help */

  return (
    <div className="SHowPage">
      {/*عرض الكتاب */}
      <Container maxWidth="lg" className="InformationsShow">
        <div className="TheRooteOfBookShow">
          <BasicBreadcrumbs BookName={id} />
        </div>
        <div className="Book">
          <div className="Cover">
            <img alt="dz" className="BookCover" src={lgoo} />
          </div>
          <div className="Info">
            <div className="MainInfo">
              <h3 className="Titel">{id}</h3>
              <h5 className="auther">auther</h5>
            </div>
            <div className="GenralInfo">
              <ul>
                <li>
                  section:{" "}
                  <Link className="Link" to={"/"}>
                    {" "}
                    Langoueges
                  </Link>{" "}
                </li>
                <li>
                  Language : <b className="Link"> Arabic</b>{" "}
                </li>
                <li>
                  year : <b className="Link"> 2000</b>
                </li>
                <li>
                  pages :<b className="Link">200</b>{" "}
                </li>
              </ul>
            </div>
            <div className="DescriptionD">
              <Divider sx={{ width: "100%" }}>Description </Divider>
              <h4>00000000000000000000000000000000000000000</h4>
              <Divider sx={{ width: "100%", margin: "10px 0px " }} />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  fullWidth="80%"
                  className="DwBtn"
                  color="success"
                  variant="contained"
                >
                  Dawnlod
                </Button>
              </div>
            </div>
          </div>

          <div className="Actions">
            <div className="Sher">
              <p>sher this books :</p>
            </div>
            <div className="shmedai">
              <ButtonGroup
                disableElevation
                variant="text"
                aria-label="Disabled button group"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button className="ShmedaiBtn">
                  <InstagramIcon />
                </Button>

                <Button className="ShmedaiBtn">
                  <FacebookOutlinedIcon />
                </Button>

                <Button className="ShmedaiBtn">
                  <WhatsAppIcon />
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <div className="Help">
            <Link to={mailto}>
              <Button color="error" variant="contained">
                <Dangerous />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
      <Container maxWidth="md" className="ShowButtom">
        <div className="PuBuBtn">
          <Link to={"/"}>
            <h3 className="PublishBtn">click here to publish your book!!!</h3>
          </Link>
        </div>

        <Divider style={{ margin: "30px" }}> Countact-US</Divider>
        <div className="DevalopmenFoter">
          <div>
            <Link to="https://www.instagram.com/auza.ebook">
              <InstagramIcon className="C" />
            </Link>
          </div>
          <div>
            <FacebookOutlinedIcon className="C" />
          </div>
          <div>
            <Link to={mailto}>
              <Mail className="C" />
            </Link>
          </div>
        </div>
        <Divider style={{ margin: "30px" }} />

        <div className="ReturenHome">
          <ButtonGroup
            className="GroupReturenHome"
            disableElevation
            variant="text"
            aria-label="Disabled button group"
            style={{ display: "grid" }}
            color="primary"
          >
            <Button className="ShowLinkMain">
              <Link to="/">
                <h3>Home</h3>
              </Link>
            </Button>

            <Button className="ShowLinkMain">
              <Link to="/books">
                <h3>Books</h3>
              </Link>
            </Button>

            <Button className="ShowLinkMain">
              <Link to="/Noveles">
                <h3>Novoles</h3>
              </Link>
            </Button>
          </ButtonGroup>
        </div>
      </Container>
      {/*عرض الكتاب */}
    </div>
  );
}
