import { useEffect, useState } from "react";
import LocationUI from "./LocationUI";
import BoldLocationUI from "./BoldLocationUI";
import LocationHOF from "./LocationHOF";

const LocationContainer = () => {
  const [location, setLocation] = useState({ latitude: "", longitude: "" });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coordinates = position.coords;
      setLocation({
        latitude: coordinates.latitude,
        longitude: coordinates.longitude,
      });
    });
  }, [navigator]);

  let NewLOcationComponent = LocationHOF(BoldLocationUI);
  return <NewLOcationComponent location={location} />;
};

export default LocationContainer;
