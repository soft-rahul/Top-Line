import PdfImage from "../../assets/image/download.svg";

import Subject from "./Subject";
import "./Syallbus.css";
function Syallbus(props) {
  return (
    <section className="syllabus__section">
      <section className="syallbus__pdf">
        <div className="pdf__picture">
          <img src={PdfImage} alt="pdf-image" width="200" height="200" />
        </div>
        <div className="pdf__button">
          <a href={props.pdfLink} traget="_blank" download={props.pdfName}>
            Download
          </a>
        </div>
      </section>
      
    </section>
  );
}

export default Syallbus;
