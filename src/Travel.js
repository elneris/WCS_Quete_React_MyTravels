import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
    <figure>
      <img src={photo} alt={destination} />
      <figcaption>
        <blockquote>{destination} {distance}</blockquote>
        <cite>{country}</cite>
      </figcaption>
    </figure>
  );

export default Travel;