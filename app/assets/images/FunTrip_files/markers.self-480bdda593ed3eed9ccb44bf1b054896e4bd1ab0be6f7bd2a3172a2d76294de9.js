function showMarkers (results) {
    var place, marker;

    for (var i = 0; i < results.length; i++) {
        place = results[i];


        var icon = icons[place.types[0]]
        if (icon && alreadyShown[place.id] === undefined) {
            alreadyShown[place.id] = true;
            var image = {
                url: icon.icon
            };

            marker = new google.maps.Marker({
                icon: image,
                position: place.geometry.location,
                animation: google.maps.Animation.DROP,
                map: map

            });

            marker.setMap(map)
            //marker.addListener('click', toggleBounce.bind(null, marker));
            var callback = markerCallbackBuilder(place, marker);

            marker.addListener('click', callback)


        }
    }
}


function markerCallbackBuilder (place, marker) {
    var open = false;

    return function () {
        if (open) {
            infowindow.close();
            open = false;
        }

        else {
            showInfoWindow(place, marker);
            open = true;
        }
    };


}

var infowindow = new google.maps.InfoWindow();

function showInfoWindow (place, marker) {
    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + place.vicinity + '</div>');
    infowindow.open(map, marker);
}



function drop() {
    for (var i = 0; i < marker.length; i++) {
        setTimeout(function () {
            drop();
        }, i * 200);
    }
}


//        function toggleBounce(marker) {
//          console.log(marker)
//          if (marker.getAnimation() !== null) {
//            marker.setAnimation(null);
//          } else {
//            marker.setAnimation(google.maps.Animation.BOUNCE);
//          }
//        }
