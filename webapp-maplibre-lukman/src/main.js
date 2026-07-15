import { Map } from 'maplibre-gl';
const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json',
  center: [106.67, -6.47],
  zoom: 3
});

const data = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "jakarta"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          106.7083661,
          -6.2275841
        ]
      }
    }
  ]
}

map.on('load', () => {
  map.addSource('kota', {
  type: "geojson",
  data: data
});

map.addLayer({
  id: 'titik-kota',
  type: 'circle',
  source: 'kota',
  paint: {
    "circle-radius": 5,
    "circle-color": '#FF0000',
    "circle-stroke-width": 1,
    "circle-stroke-color": 'black'
  }

})

});