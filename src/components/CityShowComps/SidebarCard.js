function CityShowSidebarCard(props) {
  function handleCardClick() {
    props.updateSelectedCityIdx(props.index);
  }

  return (
    <li onClick={handleCardClick}>
      <img src={props.imageUrl} alt=""/>
      <p>{props.cityName}</p>
    </li>
  )
}

export default CityShowSidebarCard;
