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
