function CityDetail(props) {
  return (
    <main>
      <p>{props.city && props.city.name}</p>
      <img src={props.city && props.city.cityImage} alt=""/>
    </main>
  );
};

export default CityDetail;
