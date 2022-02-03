import React from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const SeeonMap = ({coordinatespair,setModal}) => {
  console.log(
    coordinatespair.coordinatespair[1],
    coordinatespair.coordinatespair[0]
  );

  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiYW1yb2hpdGs3MCIsImEiOiJja3hzazd6YmMxbXE1MnVvZW56eXlhcTN6In0.hzM22cAFsUM0fnzofCTqrQ",
    // center:[coordinatespair.coordinatespair[1],coordinatespair.coordinatespair[0]]
  });
  return (
    <div>
        <a href="#" onClick={()=>{setModal(18)}}>back</a>
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[51.518250335096376, -0.13235092163085938]} />
        </Layer>
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[51.518250335096376, -0.13235092163085938]} />
        </Layer>
      </Map>
    
    </div>
  );
};

export default SeeonMap;
