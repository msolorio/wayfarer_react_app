function CityShowSidebarCard(props) {
  return (
    <li className="sidebar-card">
      <img src={props.imageUrl} alt=""/>
      <p>{props.cityName}</p>
    </li>
  )
}

export default CityShowSidebarCard;
