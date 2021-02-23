import { Link } from 'react-router-dom';
import SidebarCard from './SidebarCard';

function CitySidebar(props) {
  function renderCityCards(cities) {
    return cities.map((city, index) => {
      return (
        <Link to={`/cities/${index}`}>
          <SidebarCard
            index={index}
            cityName={city.cityName}
            updateSelectedCityIdx={props.updateSelectedCityIdx}
          />
        </Link>
      );
    });
  }

  return (
    <aside>
      {renderCityCards(props.cities)}
    </aside>
  );
}

export default CitySidebar;
