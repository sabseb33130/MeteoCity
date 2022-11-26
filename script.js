
const openID = "f3b93101c2e5243ad953a1d5d8af1da4";
const temp = document.getElementById("temp");
const temp_max = document.getElementById("temp_max");
const temp_min = document.getElementById("temp_min");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const dirWind = document.getElementById("dirWind");
const form = document.getElementById("form");
const input = document.getElementById("ville");
const button = document.getElementById("valid");
const nomVille = document.getElementById("nomVille");
let itemp = document.getElementById("itemp");
const affichage = document.getElementById("affichage");

    
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
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ville},FR&limit=1&type=municipality&appid=${openID}`)
    .then((resp)=> resp.json())
    .then((data) =>weathVille(data[0].lat,data[0].lon)) 
   // console.log(data))
    .catch((error)=>console.log(error))
    
};

function weathVille(lat,lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${openID}`)
  .then((resp)=> resp.json())  
  .then((data1) => meteoGeneral(data1))
 //console.log(data1))
  .catch((error) =>console.log(error));

}


function meteoGeneral(data1) {
      console.log(data1.weather[0].icon,data1.main.temp,data1.main.temp_max,data1.main.temp_min,data1.main.pressure,data1.main.humidity,data1.wind.deg,data1.wind.speed);
      temp_min.textContent = `la température minimal est de ${(data1.main.temp_min).toFixed(1)}°C`;
      temp.textContent = `la température est de ${(data1.main.temp .toFixed(1))}°C`;
      temp_max.textContent = `la température maximale est de ${(data1.main.temp_max).toFixed(1)}°C`;
      pressure.textContent = `la pression atmosphérique est de ${(data1.main.pressure)}Hpa`;
      humidity.textContent = `le taux d'humidité est de ${(data1.main.humidity)}%`;
      wind.textContent = `La vitesse du vent est de ${data1.wind.speed}Km/h`;
      dirWind.textContent = `Le sens du vent est de sens ${sensVent()} `;
      nomVille.textContent = `${data1.name}`;
      icone = data1.weather[0].icon;
      console.log(icone);
      itemp.setAttribute("src",` https://openweathermap.org/img/wn/${data1.weather[0].icon}@2x.png`);
      affichage.removeAttribute("class");
    function sensVent(){
    switch (true) {
      case (data1.wind.deg ==0):
      //console.log("Nord");
      return "Nord";
      
      case (data1.wind.deg <= 22.5):
     // console.log("Nord-Nord-est");
      return;
      case (data1.wind.deg <=45):
     // console.log("Nord-Est");
      return " Nord-Nord-est";
      case (data1.wind.deg <= 67.5):
      //console.log("Est-Nord-Est");
      return "Est-Nord-Est";
      case (data1.wind.deg = 90):
     // console.log("Est");
      return "Est";
      case (data1.wind.deg <= 112.5):
     // console.log("Est-Sud-Est");
      return "Est-Sud-Est";
      case (data1.wind.deg <= 135):
    //  console.log("Sud-Est");
      return "Sud-Est";
      case (dirWind <= 157.5):
      //console.log("Sud-Sud-Est");
      return "Sud-Sud-Est";
      case (dirWind  == 180):
     // console.log("Sud");
      return;
      case (data1.wind.deg  <= 202.5):
    //  console.log("Sud-Sud-ouest");
      return "Sud-Sud-ouest";
      case (data1.wind.deg <= 225):
     // console.log("Sud-Ouest");
      return "Sud-Ouest";
      case (data1.wind.deg <= 247.5):
      //console.log("Ouest-Sud-Ouest");
      return "Ouest-Sud-Ouest";
      case (data1.wind.deg == 270):
      //console.log("Ouest");
      return "Ouest"; 
      case (data1.wind.deg <= 292.5):
     // console.log("Ouest-Nord-Ouest");
      return "Ouest-Nord-Ouest";
      case (data1.wind.deg <= 315):
     // console.log("Nord-Ouest");
      return "Nord-Ouest";
      case (data1.wind.deg <= 337.5):
      //console.log("Nord-Nord-Ouest"); 
      return "Nord-Nord-Ouest";
      default:
      console.log(`Le sens du vent est nul` );
  }
}

}


