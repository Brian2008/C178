let latitude=22.7868542, longitude=88.3643296;
mapboxgl.accessToken = "pk.eyJ1IjoiYnJpYW5ob2FuZzA3MzAwOCIsImEiOiJjbGFvOG1xcWcwMDFnM3dyMGZ4NWh4Yno3In0.rK4TS6pytWEXYhenvGT2Ng"

var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v11',
    center:[longitude,latitude],
    zoom:16
})

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true,
        },
        trackUserLocation:true,

    })
)
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    "top-left"
)

