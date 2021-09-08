import PdfImage from '../assets/image/download.svg';
import SyallbusSubjects from './main-components/SyallbusSubjects'
import "./Syallbus.css";
function Syallbus() {
  return(
      <>
      <section className="syallbus-pdf pdf">
          <div className="pdf__picture">
              <img src={PdfImage} alt="pdf-image" width="200" height="200" />
          </div>
          <div className="pdf__button">
            <a href="/" traget="_blank" download="syallbus.pdf" >Download Syallbus</a>
          </div>
      
      </section>
      <SyallbusSubjects subject="Java"/>
      <SyallbusSubjects subject="Operating System"/>
      <SyallbusSubjects subject="Multimedia"/>
      <SyallbusSubjects subject="HTML"/>
      </>
  );
}

export default Syallbus;