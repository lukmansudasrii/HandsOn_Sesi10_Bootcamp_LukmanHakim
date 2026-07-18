import {Popup} from 'maplibre-gl';

const popup = new Popup();
  popup.on('open', () => {
    console.log('Popup opened');
  });
  popup.on('close', () => {
    console.log('Popup closed');
  });

export function addKotaPopup(map, event){
    const coordinate = event.lngLat
    const latitude = coordinate.lat.toFixed(2)
    const longitude = coordinate.lng.toFixed(2)

    const properties = event.features[0].properties;
    const cityName = properties.NAME;
    console.log(cityName)

    return popup
      .setLngLat(event.lngLat)
      .setHTML(`
        <div>
        <h3>${cityName}</h3>
          <div> Bujur: ${longitude} </div>
          <div> Lintang: ${latitude} </div>
        </div>
        `)
      .addTo(map);
}