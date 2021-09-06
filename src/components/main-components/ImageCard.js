
/*
!importing images for card
*/


import './ImageCard.css';


function ImageCard(props) {
    console.table(props);
  return (
    <section className="image-card card">
      <div className="card__image">
        <img src={props.img} width="200" height="200" alt="" />
      </div>
      <div className="card__data">
        <h2>Heading 2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quos aut
          architecto, amet nostrum ab. Possimus, exercitationem! Ipsum in
          expedita eaque, harum commodi dolores? Aut nihil vitae distinctio qui
          inventore repellendus veniam? Quibusdam vero consequatur soluta amet
          unde explicabo reprehenderit nulla, officiis eaque fugit tenetur? Qui,
          iure recusandae ratione animi vero fugit enim, eum natus ad soluta
          similique maxime distinctio ex, quae praesentium perspiciatis
          necessitatibus. Earum alias culpa eum? Minus labore consequatur odit
          tempore iure nam, commodi voluptas saepe itaque!
        </p>
      </div>
    </section>
  );
}


export default ImageCard;