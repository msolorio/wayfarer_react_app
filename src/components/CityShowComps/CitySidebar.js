import { Link } from 'react-router-dom';
import SidebarCard from './SidebarCard';

function CitySidebar(props) {
  function renderCityCards(cities) {
    return cities.map((city, index) => {
      return (
        <Link key={city._id} to={`/cities/${city._id}`}>
          <SidebarCard
            index={index}
            cityName={city.cityName}
          />
        </Link>
      );
    });
  }

  return (
    <aside>
      <ul>
        {renderCityCards(props.cities)}
      </ul>
    </aside>
  );
}

export default CitySidebar;
