
function initMap() {
    const cnt = {lat: 46.478766, lng: 30.723594}
    const map  =    new google.maps.Map(document.getElementById('map'), {
        center: cnt,
        zoom: 16
    });


// Create marker
const marker = new google.maps.Marker({
    position: cnt,
    map: map,
   title: 'Beetroot academy',
   icon: 'i/favicon.png'
});

// create info window
const infoWindow = new google.maps.InfoWindow({
   content: 'Beetroot Academy'
})


// create listener on click

marker.addListener('click', function(){
   infoWindow.open(map,marker)
})
}