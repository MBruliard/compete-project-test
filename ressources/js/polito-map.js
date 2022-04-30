function initMap() {
  // The location of Uluru
  const polito = {lat: 45.062421980989036, lng: 7.662264660583096};
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("polito-map"), {
    zoom: 4,
    center: polito,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: polito,
    map: map,
  });
}

window.initMap = initMap;