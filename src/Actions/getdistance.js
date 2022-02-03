import { Description } from "@material-ui/icons";
import axios from "axios";

const getgeocodes = async (codes) => {
  const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + codes + ".json?country=us&types=postcode&access_token=pk.eyJ1IjoiYW1yb2hpdGs3MCIsImEiOiJja3hzazd6YmMxbXE1MnVvZW56eXlhcTN6In0.hzM22cAFsUM0fnzofCTqrQ";
  const coordinates = [];
  await axios.get(
    url
  ).then((data) => {
    data.data.features.forEach((element) => {
      coordinates.push([element.geometry.coordinates]);

      // console.log(element.geometry.coordinates[0],element.geometry.coordinates[1])
      // console.log(element.geometry.coordinates[1],element.geometry.coordinates[0])
    });

  });
  return coordinates;
  // // const originc = [];
  // // const destinationc = []
  // // // const originurl="https://api.openrouteservice.org/geocode/search?api_key=5b3ce3597851110001cf6248204d821a147e45a1ab8c790429b91ece&text=";
  // // const originurl = "https://us1.locationiq.com/v1/search.php?key=pk.99c7cb25158c2d4593231a5904bfc019&postalcode=" + origin + "&format=json&country=usa";
  // // await axios.get(
  // //   originurl
  // // )

  // //   .then((data) => {

  // //     originc.push(data.data[0].lon);
  // //     originc.push(data.data[0].lat);



  // //   });
  // // const destinationurl = "https://us1.locationiq.com/v1/search.php?key=pk.99c7cb25158c2d4593231a5904bfc019&postalcode=" + destination + "&format=json&country=usa";
  // // await axios.get(
  // //   destinationurl
  // // )
  // //   //   .then((response) => response.json())
  // //   .then((data) => {



  // //     destinationc.push(data.data[0].lon);
  // //     destinationc.push(data.data[0].lat);
  // //   });


  // return [originc, destinationc];
}
const getdistance = async (geocodes) => {
  const distances = [];
 
  for (let i = 1; i < 4; i++) {
    let distanceurl = "https://api.mapbox.com/directions/v5/mapbox/driving/" + geocodes[0] + ";" + geocodes[i] + "?alternatives=false&geometries=geojson&overview=simplified&steps=false&access_token=pk.eyJ1IjoiYW1yb2hpdGs3MCIsImEiOiJja3hzazd6YmMxbXE1MnVvZW56eXlhcTN6In0.hzM22cAFsUM0fnzofCTqrQ";
    makedistanceapicall(distanceurl, distances, i);
  }


  return distances;

  // const distanceurl = "https://us1.locationiq.com/v1/directions/driving/" + originc + ";" + destinationc + "?key=pk.99c7cb25158c2d4593231a5904bfc019";
  // // const distanceurl =
  // //   "https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248204d821a147e45a1ab8c790429b91ece&start=" +
  // //   originc +
  // //   "&end=" +
  // //   destinationc;

  // const distance = await axios({
  //   method: "get",
  //   url: distanceurl,
  //   // body: { coordinates: [originc, destinationc] },
  //   headers: {
  //     Accept:
  //       "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
  //     "Content-Type": "application/json; charset=utf-8",
  //     // Authorization:
  //     //   "5b3ce3597851110001cf6248204d821a147e45a1ab8c790429b91ece",
  //   },
  // }).then((res) => {
  //   console.log(res)

  //   const distance = (res.data.routes[0].distance) / 1000;

  //   return distance
  // })
  // return distance;
}

const makedistanceapicall = async (distanceurl, distances, index) => {
  await axios({
    method: "get",
    url: distanceurl,
    // body: { coordinates: [originc, destinationc] },
    headers: {
      Accept:
        "application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8",
      "Content-Type": "application/json; charset=utf-8",
      // Authorization:
      //   "5b3ce3597851110001cf6248204d821a147e45a1ab8c790429b91ece",
    },
  }).then((res) => {

    const distance = res.data.routes[0].distance / 1000;

    distances.push(distance);
  })

}
export { getdistance, getgeocodes }