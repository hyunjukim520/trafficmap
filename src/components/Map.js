import React, { Component } from "react";
import MapGL, { Marker } from "react-map-gl";
import Pin from "./Pin";

class Map extends Component {
  state = {
    api_url: "https://data.edmonton.ca/resource/87ck-293k.json",
    viewport: {
      width: 1100,
      height: 600,
      latitude: 53.545883,
      longitude: -113.490112,
      zoom: 8
    },
    coords: [
      { latitude: 53.5225, longitude: -113.6242 },
      { latitude: 53.5437, longitude: -113.4947 },
      { latitude: 53.544235, longitude: -113.489876 }
    ],
    data: null
  };

  componentDidMount() {
    const { data, api_url } = this.state;
    if (!data) {
      fetch(api_url, { method: "GET" })
        .then(response => response.json())
        .then(response => this.setState({ data: response }))
        .catch(err => console.log(err));
    }
  }

  render() {
    const { coords, data } = this.state;
    return (
      <MapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {data &&
          data.map((coord, index) => (
            <Marker
              key={`Marker-${index * (Math.random() * 200 + 1)}`}
              latitude={parseFloat(coord.location.latitude)}
              longitude={parseFloat(coord.location.longitude)}
            >
              <Pin />
            </Marker>
          ))}
      </MapGL>
    );
  }
}

export default Map;
