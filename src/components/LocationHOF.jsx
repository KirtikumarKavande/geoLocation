
const LocationHOF = (BaseContainer) => {
  return function EnhancedGeoLocation(props){
    return(
        <BaseContainer {...props} />
    )
  }
}

export default LocationHOF