//inicio dos codigos do mapa//
var mapa;
var marker1, market2, market3;
console.log(mapa);


function success(pos){
    console.log(pos.coords.latitude,pos.coords.longitude);

    if (mapa === undefined) {
        mapa = L.map('mapa').setView([pos.coords.latitude, pos.coords.longitude], 15);
    } else {
        mapa.remove();
        mapa = L.map('mapa').setView([pos.coords.latitude, pos.coords.longitude], 15);
    }
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(mapa);

    L.marker([51.5, -0.09]).addTo(mapa).bindPopup("I am a green leaf.");
    L.marker([51.495, -0.083]).addTo(mapa).bindPopup("I am a red leaf.");
    L.marker([-30.03544, -51.2375]).addTo(mapa).bindPopup('Auditório Araújo Viana, <a href="araujoviana.html" target="_blank">Clique aqui para ver os shows!</a>');
    
    var marker1 = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(mapa)
        .bindPopup('Você está aqui!')
        .openPopup();

    var marker2 = L.marker([-30.03580, -51.21445]).addTo(mapa)
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
//fim do codigo do mapa//