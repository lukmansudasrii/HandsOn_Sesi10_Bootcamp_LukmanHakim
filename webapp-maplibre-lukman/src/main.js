import { Map } from 'maplibre-gl';
import naturalEarthData from "./data/ne.geojson?url";


const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json',
  center: [106.87, -6.27],
  zoom: 8
});

// const data = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {
//         "name": "jakarta"
//       },
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//           106.7083661,
//           -6.2275841
//         ]
//       }
//     }
//   ]
// }

map.on('load', () => {
  map.addSource('kota', {
  type: "geojson",
  data: "https://geoserver.mapid.io/layers_new/get_layer?api_key=c494ce7989904143b75ff83b8efca84e&layer_id=6a33fa79d56af8dd1e0d04ca&project_id=6a2ffbe66684a940bdb0904a"
});

map.addLayer({
  id: 'titik-kota',
  type: 'circle',
  source: 'kota',
  paint: {
    "circle-radius": 5,
    "circle-color": 'yellow',
    "circle-stroke-width": 1,
    "circle-stroke-color": 'black'
  }

})

});