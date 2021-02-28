import React from 'react';
import CitySidebar from '../components/CityShowComps/CitySidebar';
import CityDetail from '../components/CityShowComps/CityDetail';
import CityPosts from '../components/CityShowComps/CityPosts';
import './CityShowPage.css';

class CityShowPage extends React.Component {
  state = {
    cities: []
  }

  componentDidMount() {
    fetch('http://localhost:4000/cities')
      .then((response) => response.json())
      .then((cities) => {
        this.setState({ cities: cities });
      });
  }

  updateSelectedCityIdx = (cityIdx) => {
    this.setState({ selectedCityIdx: cityIdx });
  }

  render() {
    const activeCity = this.state.cities.find((city) => {
      return city._id === this.props.match.params.cityId;
    });

    return (
      <div className="cityShow">
        <div className="cityShow-leftCol">
          <CitySidebar
            cities={this.state.cities} 
            updateSelectedCityIdx={this.updateSelectedCityIdx}
          />
        </div>
        <div className="cityShow-rightCol">
          <CityDetail
            city={activeCity}
          />
          <CityPosts
            cityPosts={activeCity ? activeCity.posts : []}
          />
        </div>
      </div>
    );
  }
}

export default CityShowPage;
