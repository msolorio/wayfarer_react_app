function CityDetail(props) {
  return (
    <main>
      <p>{props.city && props.city.cityName}</p>
      <img src={props.city && props.city.imgUrl} alt=""/>
    </main>
  );
};

export default CityDetail;
