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
      .then((citiesData) => {
        this.setState({ cities: citiesData })
      });
  }
  
  render() {
    const activeCity = this.state.cities.find((city) => {
      return city._id === this.props.match.params.cityId;
    });

    return (
      <div className="cityShow">
        <div className="cityShow-leftCol">
          <CitySidebar cities={this.state.cities} />
        </div>
        <div className="cityShow-rightCol">
          {activeCity && <CityDetail city={activeCity} />}
          {activeCity && <CityPosts city={activeCity} />}
        </div>
      </div>
    );
  }
}


export default CityShowPage;
