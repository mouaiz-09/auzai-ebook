import "./Styles/UI.css";
import NotFoundLogoBook from "../Photo/CoverNotAvailable.jpg";
import { Link } from "react-router-dom";

export default function CardShow({
  Name = "bookName",
  src = NotFoundLogoBook,
  auther = "mouaiz",
  LinkShow = `/Show/${Name}`,
}) {
  return (
    <Link to={LinkShow}>
      <div className="CardShow">
        <div className="CardshowContetnt">
          <div className="CardShowImgeCover">
            <img
              className="CardShowImge"
              alt={`this is imge for ${Name} by : ${auther}`}
              src={src}
            />
          </div>

          <div className="CardShowInformation" style={{ textAlign: "center" }}>
            <h4 className="CardShowInformationTitel"> {Name} </h4>
            <h4 className="CardShowInformationAuther">
              {" "}
              <b>by: </b>
              {auther}{" "}
            </h4>
          </div>
        </div>
      </div>
    </Link>
  );
}
