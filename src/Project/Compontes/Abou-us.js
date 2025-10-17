/*-----animation---- */
import BlurText from "../Animation/Text/BluerText";
import AnimatedContent from "../Animation/Componentes/Animated";
import Logo from "../Photo/Main-logo-no-text.png";
import GradientText from "../Animation/Text/GradientText";
import "./Styles/Component.css";
/*--------------------------MUI-------------------------------- */
import Container from "@mui/material/Container";
import Divider from "@mui/joy/Divider";

/*---------------------------ICONS----------------------------*/
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Link } from "react-router-dom";

export default function About(params) {
  document.title ="About-us |Book_Dz"
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
        <Container maxWidth="lg" className="About">
          <div className="About">
            <div className="AboutTop">
              <BlurText
                text="About-us"
                delay={50}
                stepDuration={1}
                animateBy="words"
                direction="top"
                className="text-2xl mb-8  TitelAnimation"
              />
            </div>

            <div className="AboutBody">
              <div className="AboutLogo">
                <div className="AboutLogoCover">
                  <img
                    alt="BookDz Logo"
                    src={Logo}
                    loading="lazy"
                    className="AboutLogoImge"
                  />
                </div>
              </div>
              <div className="AboutTextContent">
                <div className="AboutTextContentTitel">
                  <GradientText
                    colors={["#3B82F6", "#0b6b6b", "rgb(6, 209, 175)"]}
                    animationSpeed={4}
                    showBorder={false}
                    className="AboutBrandNameAnimation"
                  >
                    <h1 className="AboutBrandName">Book Dz</h1>
                  </GradientText>
                  <p className="TextAfterLogo">
                    discover Your Next Book Pdf (-.-)
                  </p>
                </div>
                <div className="AboutTextContentP">
                  <Divider
                    orientation="horizontal"
                    style={{
                      marginTop: "5px",
                      color: "#141e2c",
                    }}
                  >
                    📖 Introduction
                  </Divider>
                  <p className="AboutP">
                    <b>Book DZ</b> is a digital Algerian library that brings
                    together book lovers in one place! Our goal is to make it
                    easier for you to find and enjoy the books you love —
                    simply, quickly, and for free. 📖 Right now, you can browse
                    and download books in various fields, and in upcoming
                    updates, we’ll be adding the ability to buy books and pay
                    directly through the website.{" "}
                    <b>
                      {" "}
                      We believe reading should be accessible to everyone, in a
                      modern and engaging way that fits the new generation of
                      readers.{" "}
                    </b>
                  </p>
                  <div className="AboutVision">
                    <Divider
                      orientation="horizontal"
                      style={{
                        marginTop: "5px",
                        color: "#141e2c",
                      }}
                    >
                      🌟 Our Vision
                    </Divider>

                    <p>
                      At <b>Book DZ</b>, we aim to become the leading digital
                      library in Algeria and the Arab world, building an active
                      community of readers who share knowledge and discover new
                      ideas every day. Our vision is to make reading an
                      enjoyable and easy experience for everyone wherever they
                      are.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="AboutDevalopmen">
              <div className="DevalopmenTop">
                <Link className="LinkForDevmoper"> For Devlopers ?</Link>
              </div>

              <Divider style={{ margin: "30px" }}> Countact-US</Divider>
              <div className="DevalopmenFoter">
                <div>
                  <Link>
                    <InstagramIcon className="C" />
                  </Link>
                </div>
                <div>
                  <FacebookOutlinedIcon className="C" />
                </div>
                <div>
                  <WhatsAppIcon className="C" />
                </div>
              </div>
            </div>
          </div>

          <div className="CountactUS"></div>
        </Container>
      </AnimatedContent>
    </>
  );
}
