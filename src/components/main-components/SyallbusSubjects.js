import SubjectImage from '../../assets/image/subject.svg';
import {Link} from "react-router-dom";
function SyallbusSubjects(props) {
  return (
    <section className="syallbus-subjects">
      <div className="subject-image">
          <img src={SubjectImage} width="200" height="200" alt="" />
      </div>
      <div className="subject-title">
          <h2>{props.subject}</h2>
      </div>
      <div className="subject-button">
        <div className="button-learn">
          <Link to={props.url}>Learn</Link>
        </div>
        {/* <div className="button-material">
            <Link to="material-section">Material</Link>
        </div> */}
      </div>
    </section>
  );
}

export default SyallbusSubjects;
