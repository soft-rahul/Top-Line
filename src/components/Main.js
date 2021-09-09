import ImgOne from "../assets/image/what-is-topLine.svg";
import ImgTwo from "../assets/image/lets-start-exploring.svg";
import heroImage from "../assets/ui-images/ui-one.png";
/*
!import main components
*/

import ImageCard from "./main-components/ImageCard";

import "./Main.css";
import Button from "./main-components/Button";

export default function Main() {
  return (
    <main className="global-main">
      <section className="hero-page">
        <div className="hero-page__content">
          <h1>Top <span className="special">Learn</span> </h1>
          <p>TopLearn is a free educational plateform for college students</p>
        </div>
        <div className="hero-page__image">
          <img src={heroImage} alt="" />
        </div>
        </section>
      <ImageCard img={ImgOne} />
      <ImageCard img={ImgTwo} />
      <Button></Button>
    </main>
  );
}
