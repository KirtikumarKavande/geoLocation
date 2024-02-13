
const LocationUI = ({location}) => {
  return (
    <div>
      <p>latitude:{location.latitude}</p>
      <p>longitude:{location.longitude}</p>
    </div>
  );
};

export default LocationUI;
