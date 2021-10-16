//leaflet
var map = L.map('map').setView([Math.floor(Math.random() * -30)+ 20, (Math.random() * 90)+ 30,], 6);

L.tileLayer('maps/map2017/{z}/{x}/{y}.png', {
  maxZoom: 7,
  minZoom: 3,
  continuousWorld: false,
  controls: true,
  noWrap: true
}).addTo(map);
