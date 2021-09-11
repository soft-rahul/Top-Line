import SubjectImage from "../../assets/ui-images/subject.svg";
import { Link } from "react-router-dom";
import "./Subject.css";
function Subject(props) {
  return (
    <section className="subject__section">
      <div className="subject__image">
        <img src={SubjectImage} width="200" height="200" alt="" />
      </div>
      <div className="subject__title">
        <h2>{props.subject}</h2>
      </div>
      <div className="button__learn btn">
        <Link to={props.url}>Learn</Link>
      </div>
    </section>
  );
}

export default Subject;
