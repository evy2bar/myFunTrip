function repeatingRequest(request) {
    function callback (results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            showMarkers(results);


        }
        else if (status == google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
            setTimeout(makeMapsRequest, 500);
        }
    }

    function makeMapsRequest () {
        service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
    }

    makeMapsRequest();
}



