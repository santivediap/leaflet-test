// Ejercicio 1

const createMap = (arr) => {
  var map = L.map("map").setView(arr, 13);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 30,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  
  const marker = L.marker(arr).addTo(map);
};

// Ejercicio 2

var map = L.map("map").setView([33.85934829711914, -118.2799301147461], 13);
let markersLayer = L.layerGroup({interactive: true});

const createLAMap = (arr, vehicles) => {
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 30,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  map.ad;
  vehicles.forEach((ele) => {
    let marker = L.marker([ele.lat, ele.long])
    marker.on("click", function(event) {
      marker.bindPopup(`Id del vehículo: ${ele.id}`).openPopup();
    })
    marker.addTo(markersLayer);
  });
  markersLayer.addTo(map);
};

async function vehiclesCoords() {
  let LACoords = [33.85934829711914, -118.2799301147461];

  let search = await fetch(
    "https://api.metro.net/LACMTA/vehicle_positions/all?geojson=false"
  );
  let data_search = await search.json();
  let vehicles = data_search
    .filter((val) => val.current_status === "IN_TRANSIT_TO")
    .map((item) => {
      let { position, vehicle } = item;
      let { latitude: lat, longitude: long} = position;
      let {vehicle_id: id} = vehicle
      return { lat, long, id };
    });
  createLAMap(LACoords, vehicles);
}

vehiclesCoords()

setInterval(() => {
  markersLayer.remove()
  vehiclesCoords()
}, 3000);

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
