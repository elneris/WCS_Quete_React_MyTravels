import React from 'react';
import Travel from './Travel';

const travels = [
  {
    Destination: "Bordeaux",
    Country: "France",
    image: "http://paris-jetequitte.com/wp-content/uploads/2018/06/nouveau-depart-bordeaux-1-800x533.jpg",
    Distance: "10 km"
  },
  {
    Destination: "Kununurra",
    Country: "Australie",
    image: "https://content.knightfrank.com/property/3594600/images/1724c83e-ee90-4992-9ec7-2da363890fd9-73.jpg",
    Distance: "14 293 km"
  },
  {
    Destination: "New York",
    Country: "Etats-Unis",
    image: "https://www.sensationsdumonde.com/img/destination/87/skyline_nyc__empire_state_building__shutterstock_2018_768a.jpg",
    Distance: "5 798 km"
  },
  {
    Destination: "Budapest",
    Country: "Hongrie",
    image: "https://www.budapestenvrac.com/blogimageuploads/meilleure-destination-europeenne-budapest_1.jpg",
    Distance: "1 948 km"
  },
  {
    Destination: "Berlin",
    Country: "Allemagne",
    image: "https://visionapartments.com/paguroidea/dimages/6598/0/0/berlin.jpg",
    Distance: "1 634 km"
  },
];

const Travels = () => (
  <div>
      {travels.map(travel => (
          <Travel Country={travel.Country} image={travel.image} Destination={travel.Destination} Distance = {travel.Distance} />
      ))}
  </div>
);

export default Travels;