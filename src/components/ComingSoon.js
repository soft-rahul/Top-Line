
import ComingSoonImage from '../assets/image/coming-soon.webp';

function ComingSoon() {

    return(
        <section className="coming-soon__container">
            <div className="coming-soon__image">
                <img scr={ComingSoonImage} alt="" width="200" height="200"/>
            </div>
            <div className="coming-soon__text">
                <h2>Coming soon...</h2>
            </div>
        </section>
    );


}

export default ComingSoon();