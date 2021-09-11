/*
! import css
*/

// images for home page ...
import Intro from "./assets/image/what-is-this.svg";
import IntroTwo from "./assets/image/lets-start-exploring.svg";
import HeroOne from "./assets/ui-images/hero-one.png";
import HeroTwo from "./assets/ui-images/hero-two.png";



import Button from "./components/main-components/Button";
import Card from "./components/main-components/Card";
import "./Main.css";

export default function Main() {
  return (
    <main className="global-main">
      <section className="hero-page">
        <div className="hero__content">
          <h1>
            Top <span className="veryspecial">Learn</span>{" "}
          </h1>
          <p>TopLearn is a free educational plateform for college students</p>
        </div>
        <div className="hero__image">
          <img src={HeroOne} alt="" />
        </div>
      </section>
      <div className="global-wrapper">
        <Card>
          <section className=" card__intro">
            <div className="card__image">
              <img src={Intro} width="200" height="200" alt="" />
            </div>
            <div className="card__content">
              <h2>what is TopLearn?</h2>
              <p>
                Top Learn is a free open source learning plateform for collge
                students. Specially designed for Sant gahira guru university's
                colleges and their students. we are students and we face lots of
                problems related to our studies so we are created this plateform
                to solve us problem..
              </p>
            </div>
          </section>
        </Card>
        <Card>
          <section className=" card__intro">
            <div className="card__image">
              <img src={IntroTwo} width="200" height="200" alt="" />
            </div>
            <div className="card__content">
              <h2>Let's start Exploring</h2>
              <p>
                Top Learn provides you a way in which you can learn your subjects in very easy and effective way.
              </p>
            </div>
          </section>
        </Card>
      </div>
      <section className="footer-hero">
        <img src={HeroTwo} alt=""/>
        <Button/>
      </section>

    </main>
  );
}
