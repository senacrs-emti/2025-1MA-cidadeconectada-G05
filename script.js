/*let h2 = document.querySelector('h2');

function success(pos){
    console.log(pos.coords.latitude,pos.coords.longitude);
    h2.textContent = `Latitude:${pos.coords.latitude}, Longitude:${pos.coords.longitude}`
}

function error(err){
    console.log(err);
}
navigator.geolocation.getCurrentPosition(success);*/

var mapa = L.map('mapa').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapa);

L.marker([51.5, -0.09]) .addTo(mapa)
    .bindPopup('fsafsff')
    .openPopup();