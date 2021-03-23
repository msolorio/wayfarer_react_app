function CityDetail(props) {
  return (
    <div className="city-detail">
      <div>
        <h2>{props.city && props.city.cityName}</h2>
        <h4>{props.city && props.city.country}</h4>
      </div>
      <img src={props.city && props.city.imgUrl} alt=""/>
    </div>
  );
};

export default CityDetail;
