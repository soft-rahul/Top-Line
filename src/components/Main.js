import ImgOne from "../assets/image/what-is-topLine.svg";
import ImgTwo from "../assets/image/lets-start-exploring.svg";

/*
!import main components
*/

import ImageCard from "./main-components/ImageCard";

import "./Main.css";
import Button from "./main-components/Button";

export default function Main() {
  return (
    <main className="global-main">
      <ImageCard img={ImgOne} />
      <ImageCard img={ImgTwo} />
      <Button></Button>
    </main>
  );
}
