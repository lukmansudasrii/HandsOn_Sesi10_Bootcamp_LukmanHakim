import { Map } from 'maplibre-gl';
import {addKotaLayer , addPulauLayer} from './layers/vektor';
import { addPatrickImage } from './layers/raster';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json',
  center: [106.83, -6.19],
  zoom: 3
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
  addKotaLayer(map);
  addPulauLayer(map);
  addPatrickImage(map);
});