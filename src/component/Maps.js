import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Maps() {

  const mapStyles = {
    height: "80vh",
    width: "100%"
  };

  const defaultCenter = {
    lat: 13.736717, lng:100.523186
  }

  const locations = [
    {
      name: "เขตบางรัก",
      location: { 
        lat: 13.7337,
        lng:  100.5268
      },
    },
    {
      name: "เขตบางกอกใหญ่",
      location: { 
        lat: 13.74162,
        lng:  100.47640
      },
    },
  ];

  return (
    <LoadScript
      googleMapsApiKey='your api key'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}>

        {
          locations.map(item => {
            return (
            <Marker key={item.name} position={item.location}/>
            )
          })
       }
       </GoogleMap>
    </LoadScript>
  )
}