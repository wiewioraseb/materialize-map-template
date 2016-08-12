var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: {lat: 53.5673236, lng: 9.9750304},
    zoom: 12
  });
}
