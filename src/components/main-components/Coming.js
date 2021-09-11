import workImage from '../../assets/ui-images/ui-six.svg';
import "./Coming.css";

export default function Coming() {
    return(
        <section className="coming__soon">
            <div className="coming__soon-wrapper">

         
            <div className="image">
                <img src={workImage} alt="" />
            </div>
            <div className="content">
                <h2>Coming  Soon...</h2>
                <p>We are working hard to provide you best learning material . so please wait some time.</p>
            </div>
            </div>
        </section>
    )
}