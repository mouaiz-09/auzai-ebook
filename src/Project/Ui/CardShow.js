import "./Styles/UI.css";
import NotFoundLogoBook from "../Photo/CoverNotAvailable.jpg";

export default function CardShow({ Name = "bookName", src = NotFoundLogoBook, auther = "mouaiz" }) {
  return (
    <div className="CardShow">
      <div className="CardshowContetnt">
        <div className="CardShowImgeCover">
          <img style={{width:"80px "}} alt={`this is imge for ${Name} by : ${auther}`} src={src} />
           
        
        </div>

        <div className="CardShowInformation">
          <h4 className="CardShowInformationTitel"> {Name} </h4>
          <h4 className="CardShowInformationAuther"> {auther} </h4>
        </div>
      </div>
    </div>
  );
}
