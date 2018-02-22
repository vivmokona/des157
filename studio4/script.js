mapboxgl.accessToken = 'pk.eyJ1Ijoidml2bW9rb25hIiwiYSI6ImNqZG92NGYyeDA4MGQycm80cDljaXEzbDAifQ.s9ln4rd7DomkLRJ4g7FOCA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v9',
    center: [-121.740517, 38.544907], // starting position
    zoom: 13 // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

map.on('load', function () {

    // Add a symbol layer.
    map.addLayer({
        "id": "symbols",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                        "type": "Feature",
                        "properties": {
                            "icon": "park-15"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-121.747682, 38.537955] //Arboretum
                        }
                            },
                    {
                        "type": "Feature",
                        "properties": {
                            "icon": "cafe-15"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-121.738579, 38.540513] //Dutch Bros
                        }
                            },
                    {
                        "type": "Feature",
                        "properties": {
                            "icon": "fast-food-15"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [-121.743472, 38.544406] //Burgers&Brew 
                        }
                            }
                        ]
            }
        },
        "layout": {
            "icon-image": "park-15"
        }
    });

    // Center the map on the coordinates of any clicked symbol from the 'symbols' layer.
    map.on('click', 'symbols', function (e) {
        map.flyTo({
            center: e.features[0].geometry.coordinates
        });
    });

    // Change the cursor to a pointer when the it enters a feature in the 'symbols' layer.
    map.on('mouseenter', 'symbols', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'symbols', function () {
        map.getCanvas().style.cursor = '';
    });
});
