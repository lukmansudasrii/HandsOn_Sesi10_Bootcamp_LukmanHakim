import { Map } from 'maplibre-gl';
import naturalEarthData from "./data/ne.geojson?url";
import areaData from "./data/area.geojson?url";

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json',
  center: [106.87, -6.27],
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

  // layer vektor titik
  map.addSource('kota', {
  type: "geojson",
  data: naturalEarthData
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

// layer vektor polygon
map.addSource('pulau', {
  type: "geojson",
  data: areaData
})

map.addLayer({
  id: 'area-pulau',
  type: 'fill',
  source: 'pulau',
  paint: {
    "fill-color": 'orange',
    "fill-opacity": 0.6,
    "fill-outline-color": 'black'

  }
});

// layer raster
map.addSource('patrick', {
  type: 'image',
  url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9voz-syNvxLl8OpsgnOtz_7WCNNiPCl5bI7RHgOrJNA&s=10',
  coordinates: [
   [79.16,-0.40], //top left
   [94.18,-1.62],//top right
   [94.65,-14.73], //bottom right
   [72.97,-13.74] //bottom left
  ]
})

map.addLayer({
  id: 'patrick-image',
  type: 'raster',
  source: 'patrick',
})

});