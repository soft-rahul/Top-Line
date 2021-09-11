import BCAIntroImage from "../../assets/Subjects/bca-subject.svg";
import YearComponent from "../main-components/YearComponent";
import "./BCA.css";
function BCA() {
  return (
    <section className="bca">
      <div className="bca__intro">
        <div className="bca__content">
          <h2>What is BCA?</h2>
          <p>
            BCA (Bachelor of Computer Application) is Three year Professional
            Degree Course.
          </p>
        </div>
        <div className="bca__image">
          <img src={BCAIntroImage} alt="" />
        </div>
      </div>
      <div className="video__wrapper">
        <div className="bca__main">
          <div className="video__section">
            <div className="video__top">
              <h2> what is BCA?</h2>
              <p>
                Watch is video to know more about BCA.
              </p>
            </div>
            <div className="video__bottom">
              <iframe
                width="300"
                height="315"
                src="https://www.youtube.com/embed/ZkNCeskcgc0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bca__main">
          <div className="video__section">
            <div className="video__top">
              <h2> JOb after BCA</h2>
              <p>
                If you want to know what are the jobs you can do after BCA.
                please Watch This lovely video by MysirG .
              </p>
            </div>
            <div className="video__bottom">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/gfmPVg5-c8E"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <section className="year__section">
        <YearComponent year="I" url="/bca-first-year" />
        <YearComponent year="II" url="/coming-soon" />
        <YearComponent year="III" url="/coming-soon" />
        
        
    </section>

    </section>
   
  );
}

export default BCA;
