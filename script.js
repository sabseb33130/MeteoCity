
const openID = "f3b93101c2e5243ad953a1d5d8af1da4";
const temp = document.getElementById("temp");
const temp_max = document.getElementById("temp_max");
const temp_min = document.getElementById("temp_min");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const dirWind = document.getElementById("dirWind");
const Kelvin = 273;
const form = document.getElementById("form");
const input = document.getElementById("ville");
const button = document.getElementById("valid");
const nomVille = document.getElementById("nomVille");

form.addEventListener("submit", event =>{
  event.preventDefault();
  let textInput =input.value;
  console.log(textInput);
  return geoVille(textInput);
})
button.addEventListener("click", event =>{
  event.preventDefault();
  let textInput =input.value;
  console.log(textInput);
  return geoVille(textInput);
})
function geoVille(ville){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${ville},FR&limit=1&appid=${openID}`)
    .then((resp)=> resp.json())
    .then((data) =>weathVille(data[0].lat,data[0].lon)) 
    //console.log(data[0].lon))
  //   
    
};

function weathVille(lat,lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f3b93101c2e5243ad953a1d5d8af1da4`)
  .then((resp)=> resp.json())  
  .then((data1) => meteoGeneral(data1))
}


function meteoGeneral(data1) {
      console.log(data1.main.temp,data1.main.temp_max,data1.main.temp_min,data1.main.pressure,data1.main.humidity,data1.wind.deg,data1.wind.speed);
      temp_min.textContent = `la température minimal est de ${(data1.main.temp_min - Kelvin).toFixed(0)}°C`;
      temp.textContent = `la température est de ${(data1.main.temp - Kelvin).toFixed(0)}°C`;
      temp_max.textContent = `la température maximale est de ${(data1.main.temp_max - Kelvin).toFixed(0)}°C`;
      pressure.textContent = `la pression atmosphérique est de ${(data1.main.pressure)}Hpa`;
      humidity.textContent = `le taux d'humidité est de ${(data1.main.humidity)}%`;
  }




