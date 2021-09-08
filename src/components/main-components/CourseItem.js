import DemoImage from "../../assets/image/what-is-topLine.svg";
import {Link} from 'react-router-dom';
import './CourseItem.css';
function CourseItem(props) {
    return(
        <section className="course-card">
            <div className="course-card__image">
                <img src={DemoImage} width="200" height="200" alt="course-icon" />
            </div>
            <div className="course-card__title">
                <h2>{props.courseName}</h2>
            </div>
            <div className="course-card__button">
                <Link to="/courses-year" selection={props.selection} >Select</Link>
            </div>
        </section>
    );
}

export default CourseItem;