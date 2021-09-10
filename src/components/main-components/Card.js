


import './Card.css';


function ImageCard(props) {
   
  return (
    <div className="card-wrapper">
      {props.children}
    </div>
  );
}


export default ImageCard;