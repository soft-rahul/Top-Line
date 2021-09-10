/*
! All Subjects Images
*/

import BCA from "../../assets/Subjects/bca-subject.svg";
import BA from "../../assets/Subjects/ba-subject.svg";
import BCOM from "../../assets/Subjects/bcom-subject.svg";


import Card from "../main-components/Card";
import { Link } from "react-router-dom";
import "./CourseItem.css";
function CourseItem(props) {
  return (
    <Card>
      <section className="course-card">
        <div className="course-card__image">
          <img src={BCOM} width="200" height="200" alt="course-icon" />
        </div>
        <div className="course-card__title">
          <h2>{props.title}</h2>
        </div>
        <div className="course-card__button">
          <Link to={props.url}>Select</Link>
        </div>
      </section>
    </Card>
  );
}

export default CourseItem;
