
const openID = "f3b93101c2e5243ad953a1d5d8af1da4";
const temp = document.getElementById("temp");
const temp_max = document.getElementById("temp_max");
const temp_min = document.getElementById("temp_min");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const dirWind = document.getElementById("dirWind");





/*const villeChoix = document.getElementById("ville");
let choix = villeChoix.ariaValueText;
console.log(choix);*/ 
function geoVille(){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Toulouse,FR&limit=1&appid=${openID}`)
    .then((resp)=> resp.json())
    .then((data) => latlon((data)))  
};
geoVille();
function weathVille(){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=£${lon}&appid=${openID}`)
  .then((resp)=> resp.json())  
  .then((data1) => meteoGeneral(data1))
}

weathVille();
function meteoGeneral(data1) {
    console.log(data1.main.temp,data1.main.temp_max,data1.main.temp_min,data1.main.pressure,data1.main.humidity,data1.wind.deg,data1.wind.speed);
  }
function latlon(data){
  const lat = data[0].lat;
  console.log(lat);
  const lon = data[0].lon;
  console.log(lon);
}

