import PdfImage from "../assets/image/download.svg";
import SyallbusSubjects from "./SyallbusSubjects";
import "./Syallbus.css";
function Syallbus() {
  const bcaFinalYear = {
    subject: [
      {
        math: [
          "Calculus & Geometry",
          "Differential Equation & Fourier Series",
          "Computer System & Architect",
        ],
      },
      "Java",
      "Operating System",
      "Software Engineering",
      "Multimedia Tools & Application",
      "Financial Accountacy",
    ]
  };

  return (
    <>
      <section className="syallbus-pdf pdf">
        <div className="pdf__picture">
          <img src={PdfImage} alt="pdf-image" width="200" height="200" />
        </div>
        <div className="pdf__button">
          <a href="/" traget="_blank" download="BCA-Final-Year__syallbus.pdf">
            Download Syallbus
          </a>
        </div>
      </section>
      <section className="subjects">
        <h2> Math Subjects </h2>
        <SyallbusSubjects url="/coming-soon" subject={bcaFinalYear.subject[0].math[0]} />
        <SyallbusSubjects url="/coming-soon"   subject={bcaFinalYear.subject[0].math[1]} />
        <SyallbusSubjects url="/coming-soon"  subject={bcaFinalYear.subject[0].math[2]} />
        <h2> Main Subjects </h2>
      <SyallbusSubjects url="/learning"  subject={bcaFinalYear.subject[1]} />
      <SyallbusSubjects url="/coming-soon"  subject={bcaFinalYear.subject[2]} />
      <SyallbusSubjects url="/coming-soon"  subject={bcaFinalYear.subject[3]} />
      <SyallbusSubjects url="/coming-soon"  subject={bcaFinalYear.subject[4]} />
      <SyallbusSubjects url="/coming-soon"  subject={bcaFinalYear.subject[5]} />

      </section>
      
    </>
  );
}

export default Syallbus;
