let userPosition = [];

navigator.geolocation.getCurrentPosition((pos) => {
  let { coords } = pos;
  userPosition.push(coords.latitude);
  userPosition.push(coords.longitude);
  let map = L.map("map").setView([coords.latitude, coords.longitude], 10);
});

// L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 30,
//   attribution:
//     '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// }).addTo(map);

// const marker = L.marker([51.505, -0.09]).addTo(map);

// var circle = L.circle([51.505, -0.11], {
//   color: "red",
//   fillColor: "#f03",
//   fillOpacity: 0.5,
//   radius: 500,
// }).addTo(map);

// marker.bindPopup("<b>Hello world!</b>I am a popup").openPopup();

// const popup = L.popup();

// const markerImg = L.marker([51.505, -0.14]).addTo(map);
// markerImg.bindPopup(
//   '<b>Un gatete!</b><br><img class="cat" src="./assets/pin.png">'
// );

// // Añadir evento

// const onMapClick = (e) => {
//   popup
//     .setLatLng(e.latlng)
//     .setContent("You clicked the map at " + e.latlng.toString())
//     .openOn(map);
// };
// map.on("click", onMapClick);

// let bulbIcon = L.icon({
//   iconUrl: "./assets/pin.png",
//   iconSize: [38, 50], //Tamaño del icono
//   iconAnchor: [22, 95], //
//   popupAnchor: [-3, -76], // Punto de ancla desde donde tendrá origen la imagen
// });

// L.marker([51.51, -0.08], { icon: bulbIcon }).addTo(map);
