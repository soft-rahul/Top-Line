import PdfImage from "../../assets/image/download.svg";
import UIImage from "../../assets/ui-images/ui-four.svg";
import PdfOne from "./bca-I-syallbus.pdf";
import Card from "../main-components/Card";
import "./BcaFirstYear.css";
import Subject from "../out/Subject";
function BcaFirstYear() {
  return (
    <section className="bcafirst__section">
      <div className="intro">
        <div className="intro__content">
          <h1>BCA First Year</h1>
          <p>This is your very first interaction with computers.</p>
        </div>
        <div className="intro__image">
          <img src={UIImage} alt="" />
        </div>
      </div>
      <div className="syllabus">
        <Card>
          <div className="download__syllabus">
            <div className="image">
              <img src={PdfImage} width="200" height="200" alt="" />
            </div>
            <div className="button btn">
              <a rel="noreferrer" href={PdfOne} target="_blank" download="bca-first-year.pdf">
                Download Syllabus
              </a>
            </div>
          </div>
        </Card>
        <section className="subjects">
            <div className="subject__wrapper">
                <Card>
                    <Subject url="/coming-soon" subject="Fundamental of IT and OS" ></Subject>
                </Card>
                <Card>
                    <Subject  url="/coming-soon" subject="C - Programming" ></Subject>
                </Card>
                <Card>
                    <Subject url="/coming-soon" subject="PC software & Application" ></Subject>
                </Card>
                <Card>
                    <Subject url="/coming-soon" subject="Programming in Visual Basics" ></Subject>
                </Card>
                <Card>
                    <Subject url="/coming-soon" subject="Communication in English" ></Subject>
                </Card>
                <Card>
                    <Subject url="/coming-soon" subject="Bridge Course" ></Subject>
                </Card>
                <Card>
                    <Subject url="/coming-soon" subject="Discrete Math" ></Subject>
                </Card>
                <Card>
                    <Subject url="/coming-soon" subject="Calculus" ></Subject>
                </Card>
                <Card>
                    <Subject url="/coming-soon" subject="Introductory Electronics" ></Subject>
                </Card>
            </div>
        </section>
      </div>
    </section>
  );
}

export default BcaFirstYear;
