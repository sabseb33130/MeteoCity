
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
    .then((data) => console.log((data)))  
};

geoVille();
function weathVille(){
  const r =  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.6044622&lon=1.5032717763608257&appid=${openID}`)
  .then((resp)=> resp.json())  
  .then((data1) => meteoGeneral(data1))
}

weathVille();
function meteoGeneral(data1) {
    console.log(data1.main.temp,data1.main.temp_max,data1.main.temp_min,data1.main.pressure,data1.main.humidity,data1.wind.deg,data1.wind.speed);
  }


