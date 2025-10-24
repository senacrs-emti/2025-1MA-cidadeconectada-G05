var map;
console.log(map);

function success(pos){
    console.log(pos.coords.latitude,pos.coords.longitude);

    if (map === undefined) {
        mapa = L.map('mapa').setView([pos.coords.latitude, pos.coords.longitude], 15);
    } else {
        map.remove();
        mapa = L.map('mapa').setView([pos.coords.latitude, pos.coords.longitude], 15);
    }


    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapa);

    L.marker([pos.coords.latitude, pos.coords.longitude]) .addTo(mapa)
        .bindPopup('Você está aqui!')
        .openPopup();


    L.marker([-30.0358182, -51.2143508]) .addTo(mapa)
            .bindPopup('Auditório Araújo Viana, <a href="araujoviana.html" target="_blank">Clique aqui para ver os shows!</a>')
            .openPopup('Auditório Araújo Viana, <a href="araujoviana.html" target="_blank">Clique aqui para ver os shows!</a>');
}


function error(err){
    console.log(err);
}

var watchID = navigator.geolocation.watchPosition(success, error, {
    enableHighAccuracy: true,
    timeout: 5000
});
//navigator.geolocation.clearWatch(watchID);


