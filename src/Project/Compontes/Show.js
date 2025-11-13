import { Link, useParams } from "react-router-dom";
import { ButtonGroup, Button, Container, Divider } from "@mui/material";
import lgoo from "../Photo/CoverNotAvailable.jpg";
/*--------------------------MUI-------------------------------- */
import BasicBreadcrumbs from "../Ui/Breadcrumbs";
/*--------------------------MUI-------------------------------- */
/*Icons */
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PalstenLogo from "../Photo/palestine.gif";
/*Icons */
export function Show(params) {
  const { id } = useParams();
  return (
    <div className="SHowPage">
      {/*عرض الكتاب */}
      <Container maxWidth="lg" className="InformationsShow">
        <div className="TheRooteOfBookShow">
          <BasicBreadcrumbs  BookName={id}/>
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
                <Button  className="DwBtn" color="success" variant="contained">
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
            <Button color="error"    variant="contained"> Help me!!</Button>
          </div>
        </div>
      </Container>
      {/*عرض الكتاب */}

     
    </div>
  );
}
