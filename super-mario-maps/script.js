function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.668274375441186, lng: 135.4290281930651},
    zoom: 18,
    mapId: 'dca967606eeb7b76',
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

    const marker = new google.maps.Marker({
    position: { lat: 34.66718016864912, lng: 135.43061604396166 },
    map,
    title: "Yoshi\'s House",
    icon: {
      url: "images/yoshi_house.svg",
      scaledSize: new google.maps.Size(38, 31),
    },
    animation: google.maps.Animation.DROP,
  });

    const infowindow = new google.maps.InfoWindow({
    content: "Yoshi\'s House",
  });

    marker.addListener("click", () => {
    infowindow.open(map, marker);
  });
}

// 34.66718016864912, 135.43061604396166
// 34.668274375441186, 135.4290281930651
