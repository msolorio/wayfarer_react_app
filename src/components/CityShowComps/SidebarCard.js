function CityShowSidebarCard(props) {
  return (
    <li>
      <img src={props.imageUrl} alt=""/>
      <p>{props.cityName}</p>
    </li>
  )
}

export default CityShowSidebarCard;
