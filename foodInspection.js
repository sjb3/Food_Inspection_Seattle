// Food Inspection

var forkIcon = L.icon({
iconUrl: 'images/fork.png',
iconSize: [20, 20]

});

var map = L.map('map').setView([47.65, -122.31],13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
maxZoom: 18,
id: 'lucienspiff.p3a06028',
accessToken: 'pk.eyJ1IjoibHVjaWVuc3BpZmYiLCJhIjoiY2lrYW02cTkwMGx5c3V4a3Uya2MxNzhycCJ9.qRZLpeV6S5pMKjpEFz7IAA'
}).addTo(map);

// Hard-coded for current location

var marker = L.marker([47.60972, -122.33623], {icon: forkIcon}).addTo(map);
marker.bindPopup("<b>Hello, Seattle</b><br>I am Here! :)").openPopup();

var popup = L.popup();
function onMapClick(e){
popup
  .setLatLng(e.latlng)
  .setContent('You\'ve clicked at ' + e.latlng.toString())
  .openOn(map);
}
map.on('click', onMapClick);

//////////////////////////////////////////////////////////////////////

var myArray = [];

var endPoint = "https://data.kingcounty.gov/resource/gkhn-e8mn.json";

$.getJSON(endPoint, function(data){
// $.filter(data, function(key, value){
  // myArray.push(data)
//     myArray.push(value.initial_type_group= "NARCOTICS");
// })
// console.log();

$.each(data, function(i, value){

 // if (value.violation_type.includes('red')){

 if(value.inspection_closed_business == true){
  //  myArray.push(value.name + ", " + value.latitude +','+value.longitude);
   myArray.push(value.latitude +','+value.longitude);

}
});

console.log(myArray);
console.log(myArray[0]);


var marker = L.marker(myArray[0].split(','), {icon: forkIcon}).addTo(map);
// marker.bindPopup("<b><em>ALERT!</em></b><br>" + 'Restaurant: ' + value.name+'<br>' + "Description: " + value.violation_description)

marker.bindPopup("<b><em>ALERT!</em></b><br>")
console.log('test at Inspection_business_name: ' + myArray[0]);


// var mapArr = $.map(myArray, function(i, n){
//   return ([i]);
// })
// console.log(mapArr);

});
