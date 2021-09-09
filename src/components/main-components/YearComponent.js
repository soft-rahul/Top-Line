import {Link} from 'react-router-dom'
function YearComponent(props) {
    return(
        <section className="course-year year">
            <div className="year__text">
                <h2>Year {props.year}</h2>
            </div>
            <div className="year__button">
                <Link to={props.url}>Select</Link>
            </div>
        </section>
    );
}

export default YearComponent;