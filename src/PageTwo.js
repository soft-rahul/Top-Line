import "./PageTwo.css";
import UIImageOne from "./assets/ui-images/pageTwo-ui-second.svg";
import UIImageTWo from "./assets/ui-images/pageTwo-ui-third.svg";

import CourseItem from "./components/out/CourseItem";

function PageTwo() {
  return (
    <section className="course-list">
      <div className="intro">
        <div className="intro__cont">
          <h2> Select Your Course</h2>
          <p>
            Select Your Course and then learn anything , anytiem and anywhere..
          </p>
        </div>
        <div className="intro__image">
          <img src={UIImageTWo} alt="" />
        </div>
      </div>
      <div className="course-wrapper">
        <CourseItem  url="/BCA" title="BCA" />
        <CourseItem url="/coming-soon" title="BA" />
        <CourseItem  url="/coming-soon" title="BCOM" />
        <CourseItem url="/coming-soon" title="BSc(Bio)" />
        <CourseItem url="/coming-soon" title="BSc(Math)" />
        <CourseItem url="/coming-soon" title="BBA" />
      </div>
    </section>
  );
}

export default PageTwo;
