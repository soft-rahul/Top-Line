import './Button.css';
import {Link} from 'react-router-dom';
function Button() {
    return(
        <div className="section-btn">
           <Link to="/course-list">Explore</Link>
        </div>
    )
}

export default Button;