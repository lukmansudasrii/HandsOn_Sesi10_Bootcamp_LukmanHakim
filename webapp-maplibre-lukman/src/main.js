import { 
  Map, 
  FullscreenControl, 
  GlobeControl, 
  LogoControl} from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {addKotaLayer , addPulauLayer} from './layers/vektor';
import { addPatrickImage } from './layers/raster';
import { addAttribution } from './controls/basicControls';
import { LogoHondaControl } from './controls/customLogoControls';
import { addKotaPopup } from './popups/layerPopups';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = "300px";
document.body.appendChild(mapElement);

const map = new Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/globe.json',
  center: [106.83, -6.19],
  zoom: 2,
  attributionControl: false,
  cooperativeGestures: true
});

map.on('load', () => {
  addKotaLayer(map);
  addPulauLayer(map);
  addPatrickImage(map);
});

map.on("click", "titik-kota", function(event){
  addKotaPopup(map, event);
});

map.doubleClickZoom.disable();

// controls settings
addAttribution(map, "Natural Earth Dataset, Nickelodeon");
map.addControl(new FullscreenControl());
map.addControl(new GlobeControl());
map.addControl(new LogoControl({compact: false}), 'bottom-left');
map.addControl(new LogoHondaControl(), 'top-left');