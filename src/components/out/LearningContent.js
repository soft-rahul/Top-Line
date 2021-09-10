
import './LearningContent.css';

function LearningContent() {
  return (
    <section className="learning-section">
      <div className="learning-data">
        <h1>Learn java?</h1>
        <p>
          Java is most popular programming language in the world and its run
          over 2 Billion devices..Thats huge so learn this beautiful language
          and get an awesome job..
        </p>
      </div>
      <div className="learning-videoContent">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UmnCZ7-9yDY"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </section>
  );
}

export default LearningContent;
