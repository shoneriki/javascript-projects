function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 34.668274375441186, lng: 135.4290281930651},
    zoom: 16.5,
    mapId: 'dca967606eeb7b76',
    mapTypeControl: false,
    fullscreenControl: false,
    streetViewControl: false,
  });

  const markers = [
    		[
			"Amity Village",
			34.6659523754284,
			135.43205371252157,
			'yoshi_house.svg',
			38,
			31,
		],
		[
			'Super Nintendo World',
      34.66782432898129,
      135.4305516880609,
			'pointer.svg',
			30,
			47.8,
		],
		[
			'Snoopy\'s Backlot Cafe',
      34.666681637217266,
      135.43271968800667,
			'ghosthouse.svg',
			40,
			48,
		],
		[
		  'Hogwarts',
      34.668778116169996,
      135.43156059113562,
		  'castle.svg',
		  40,
		  53],
		[
		  'Warp Pipe',
      34.669042001641834,
      135.43392059671956,
		  'pipe.svg',
		  38,
		  42.5],
		[
		  'Mario Kart: Koopa\'s Challenge',
		  34.66820462257686,
		  135.4299751224998,
		  'star.svg',
		  38,
		  38],
		[
			'Discovery Restaurant',
			34.6651187529137,
			135.43086243016162,
			'hill_with_eyes.svg',
			50,
			60.7,
		],
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
