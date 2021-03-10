import React, { useState, useEffect } from 'react';
import CitySidebar from '../components/CityShowComps/CitySidebar';
import CityDetail from '../components/CityShowComps/CityDetail';
import CityPosts from '../components/CityShowComps/CityPosts';
import './CityShowPage.css';

function CityShowPage(props) {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/cities')
      .then((response) => response.json())
      .then((cities) => {
        setCities(cities);
      });
  })

  const activeCity = cities.find((city) => {
    return city._id === props.match.params.cityId;
  });

  return (
    <div className="cityShow">
      <div className="cityShow-leftCol">
        <CitySidebar cities={cities} />
      </div>
      <div className="cityShow-rightCol">
        <CityDetail city={activeCity} />
        <CityPosts cityPosts={activeCity ? activeCity.posts : []} />
      </div>
    </div>
  );
}

export default CityShowPage;
