import React from 'react';
import CitySidebar from '../components/CityShowComps/CitySidebar';
import CityDetail from '../components/CityShowComps/CityDetail';
import CityPosts from '../components/CityShowComps/CityPosts';
import './CityShowPage.css';

class CityShowPage extends React.Component {
  state = {
    cities: []
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:4000/cities');
    const citiesData = await response.json();
    
    this.setState({ cities: citiesData });
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
