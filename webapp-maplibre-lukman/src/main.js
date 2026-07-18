import { Map, FullscreenControl, GlobeControl, LogoControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {addKotaLayer , addPulauLayer} from './layers/vektor';
import { addPatrickImage } from './layers/raster';
import {addAttribution} from './controls/basicControls';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json',
  center: [106.83, -6.19],
  zoom: 2,
  attributionControl: false
});



map.on('load', () => {
  addKotaLayer(map);
  addPulauLayer(map);
  addPatrickImage(map);


// controls settings
addAttribution(map, "Natural Earth Dataset, Nickelodeon");
map.addControl(new FullscreenControl(), 'top-right');
map.addControl(new GlobeControl(), 'top-left');
map.addControl(new LogoControl({compact: false}), 'bottom-left');
});