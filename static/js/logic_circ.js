// Create a map object
var myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 3
  });
  
  
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);
  // Adding tile layer
  
  
  // Country data
  var countries = [
    {
      name: "Brazil",
      location: [-14.2350, -51.9253],
      points: 227
    },
    {
      name: "Germany",
      location: [51.1657, 10.4515],
      points: 218
    },
    {
      name: "Italy",
      location: [41.8719, 12.5675],
      points: 156
    },
    {
      name: "Argentina",
      location: [-38.4161, -63.6167],
      points: 140
    },
    {
      name: "Spain",
      location: [40.4637, -3.7492],
      points: 99
    },
    {
      name: "England",
      location: [52.355, 1.1743],
      points: 98
    },
    {
      name: "France",
      location: [46.2276, 2.2137],
      points: 96
    },
    {
      name: "Netherlands",
      location: [52.1326, 5.2913],
      points: 93
    },
    {
      name: "Uruguay",
      location: [-32.4228, -55.7658],
      points: 72
    },
    {
      name: "Sweden",
      location: [60.1282, 18.6435],
      points: 61
    }
  ];
  
  var countryCopy = countries.slice(0);
  for(var j = 0; j < countries.length; j++){
      var object1 = countries[j];
      if(object1.points > 200){
          object1["color"] = "yellow";
      }
      else if (object1.points > 100){
        object1["color"] = "blue";
    }
    else if (object1.points > 90){
      object1["color"] = "green";
    }
    else{
      object1["color"] = "red";
    }
  
    object1["radius"] = markerSize(object1.points);
    countryCopy[j] = object1;
  
  
  }
  
  //radius for points scored
  function markerSize(points) {
    return points*40;
  }
  
  // Loop through the countries array
  
    // Conditionals for countries points
    for (var i = 0; i < countryCopy.length; i++) {
      L.circle(countryCopy[i].location, {
        fillOpacity: 0.75,
        color: "white",
        fillColor: countryCopy[i].color,
        radius: markerSize(countryCopy[i].radius)
      }).bindPopup("<h1>" + countryCopy[i].name + "</h1> <hr> <h3>Score: " + countryCopy[i].points + "</h3>").addTo(myMap);
    }
    // Add circles to map
  