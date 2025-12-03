//inicio dos codigos do mapa//
var mapa;
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

    var margs = L.marker([-30.02907,-51.23169]).addTo(mapa).bindPopup('Museu de Arte do Rio Grande do Sul, <a href="margs.html" target="_blank">Clique aqui para ver as exposições!</a>');
    var marioquintana = L.marker([-30.03544, -51.2375]).addTo(mapa).bindPopup('Casa de Cultura Mário Quintana, <a href="marioquintana.html" target="_blank">Clique aqui para ver os shows!</a>');
    var bourboncountry = L.marker([-30.02185, -51.16274]).addTo(mapa).bindPopup('Teatro Bourbon Country, <a href="bourboncountry.html" target="_blank">Clique aqui para ver os shows!</a>');
    var opiniao = L.marker([-30.04177,-51.22099]).addTo(mapa).bindPopup('Bar Opinião, <a href="opiniao.html" target="_blank">Clique aqui para ver os shows!</a>');
    var urb = L.marker([-29.99699, -51.20062]).addTo(mapa).bindPopup('URB Stage, <a href="urbstage.html" target="_blank">Clique aqui para ver os shows!</a>');
    var kto = L.marker([-29.98789,-51.17768]).addTo(mapa).bindPopup('KTO Arena, <a href="ktoarena.html" target="_blank">Clique aqui para ver os shows!</a>');

    var localizaçao = L.marker([pos.coords.latitude, pos.coords.longitude]).addTo(mapa)
        .bindPopup('Você está aqui!')
        .openPopup();

    var araujoviana = L.marker([-30.03580, -51.21445]).addTo(mapa)
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
//------------------------------------------fim do codigo do mapa------------------------------------------------//
//---------------------------------------------inicio da pesquisa------------------------------------------------//
function search(){
    let input = document.getElementById('barradepesquisa')
    input = input.value.toLowerCase()
    let x = document.getElementsByClassName('eventos')

    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none"
        }else{
            x[i].style.display = "list-item"
        }
    }
}
//-----------------------------------------------fim da pesquisa--------------------------------------------------//
//-----------------------------------------------inicio do botao--------------------------------------------------//
function scrollToTop(){
    window.scrollTo(0,0)
}
//-----------------------------------------------fim do botao--------------------------------------------------//