function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.668274375441186, lng: 135.4290281930651},
    zoom: 18,
    mapId: 'dca967606eeb7b76',
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  const markers = [
    [
      "Yoshi\'s House",
      34.66718016864912,
      135.43061604396166,
      "yoshi_house.svg",
      38,
      31
    ]
  ]

  for (let i = 0; i < markers.length; i++) {
    const currMarker = markers[i];

    const marker = new google.maps.Marker({
    position: { lat: currMarker[1], lng: currMarker[2]},
    map,
    title: currMarker[0],
    icon: {
      url: `images/${currMarker[3]}`,
      scaledSize: new google.maps.Size(currMarker[4], currMarker[5]),
    },
    animation: google.maps.Animation.DROP,
  });

    const infowindow = new google.maps.InfoWindow({
    content: currMarker[0],
  });

    marker.addListener("click", () => {
    infowindow.open(map, marker);
  });

  }

}

// 34.66718016864912, 135.43061604396166
// 34.668274375441186, 135.4290281930651
