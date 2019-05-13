import React from "react";

const Travel = ({ Destination, Distance, image, Country }) => (
    <figure>
      <img src={image} alt={Destination} />
      <figcaption>
        <blockquote>{Destination}</blockquote>
        <cite>{Country}</cite>
        <p>{Distance}</p>
      </figcaption>
    </figure>
  );
  
export default Travel;