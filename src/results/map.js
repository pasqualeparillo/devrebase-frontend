import React from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

function Gmap({ google, mapStyles }) {
  return (
    <Map
      google={google}
      zoom={14}
      zoomControlOptions={{ position: google.maps.ControlPosition.LEFT_TOP }}
      zoomControl={true}
      streetViewControl={false}
      fullscreenControl={false}
      style={{ width: "100%", height: "100%" }}
      initialCenter={{
        lat: 47.608013,
        lng: -122.335167
      }}
      styles={mapStyles}
      disableDefaultUI={true}
    />
  );
}
Gmap.defaultProps = {
  // The style is copy from https://snazzymaps.com/style/2/midnight-commander
  mapStyles: [
    {
      stylers: [
        {
          hue: "#ccf"
        },
        {
          saturation: 100
        }
      ]
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          lightness: 100
        },
        {
          visibility: "simplified"
        }
      ]
    },
    {
      featureType: "road.local",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.highway",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "labels",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },

    {
      featureType: "poi",
      elementType: "labels.text",
      stylers: [
        {
          visibility: "off"
        }
      ]
    }
  ]
};
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_MAPS_API_KEY
})(Gmap);
