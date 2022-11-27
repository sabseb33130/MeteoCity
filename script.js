// les constantes et variables
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
const affichage = document.getElementById("affichage");
let itemp = document.getElementById("itemp");
    
//Ecoute de la validation du formulaire par le bouton entrée du clavier
form.addEventListener("submit", event =>{
  event.preventDefault();
  let textInput =input.value;
  return geoVille(textInput);
})
//Ecoute de la validation du formulaire par le bouton GO--> affiché
button.addEventListener("click", event =>{
  event.preventDefault();
  let textInput =input.value;
  return geoVille(textInput);
})

// Fonction permettant de récupérer la lattitude et la longitude en fonction de la ville
function geoVille(ville){
    fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${ville},FR&limit=1&type=municipality&appid=${openID}`)
    .then((resp)=> resp.json())
    .then((data) =>weathVille(data[0].lat,data[0].lon)) 
   // console.log(data))
    .catch((error)=>error);
    
};
//Fonction permettant de récupérer les données météo sur l'API
function weathVille(lat,lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${openID}`)
  .then((resp)=> resp.json())  
  .then((data1) => meteoGeneral(data1))
 //console.log(data1))
  .catch((error) =>error);

}

// Fonction d'affichage des données récupérées sur l'API
function meteoGeneral(data1) {
      temp_min.textContent = `la température minimal est de ${(data1.main.temp_min).toFixed(1)}°C`;
      temp.textContent = `la température est de ${(data1.main.temp .toFixed(1))}°C`;
      temp_max.textContent = `la température maximale est de ${(data1.main.temp_max).toFixed(1)}°C`;
      pressure.textContent = `la pression atmosphérique est de ${(data1.main.pressure)}Hpa`;
      humidity.textContent = `le taux d'humidité est de ${(data1.main.humidity)}%`;
      wind.textContent = `La vitesse du vent est de ${data1.wind.speed}m/min`;
      dirWind.textContent = `Le sens du vent est de sens ${sensVent()} `;
      nomVille.textContent = `${data1.name}`;
      icone = data1.weather[0].icon;
      itemp.setAttribute("src",` https://openweathermap.org/img/wn/${data1.weather[0].icon}@2x.png`);
      affichage.removeAttribute("class");

    // Fonction permettant de donner le sens du vent 
      function sensVent(){
    switch (true) {
      case (data1.wind.deg ==0):
        return "Nord";
      
      case (data1.wind.deg <= 22.5):
        return " Nord-Nord-est";

      case (data1.wind.deg <=45):
        return "Nord-Est";
      
      case (data1.wind.deg <= 67.5):
        return "Est-Nord-Est";

      case (data1.wind.deg = 90):
        return "Est";

      case (data1.wind.deg <= 112.5):
        return "Est-Sud-Est";

      case (data1.wind.deg <= 135):
        return "Sud-Est";
      case (dirWind <= 157.5):
        return "Sud-Sud-Est";

      case (dirWind  == 180):
        return;

      case (data1.wind.deg  <= 202.5):
        return "Sud-Sud-ouest";

      case (data1.wind.deg <= 225):
        return "Sud-Ouest";

      case (data1.wind.deg <= 247.5):
        return "Ouest-Sud-Ouest";

      case (data1.wind.deg == 270):
        return "Ouest"; 
      case (data1.wind.deg <= 292.5):
        return "Ouest-Nord-Ouest";

      case (data1.wind.deg <= 315):
        return "Nord-Ouest";

      case (data1.wind.deg <= 337.5):
        return "Nord-Nord-Ouest";

      default:
        `Ìl ne doit pas y avoir de vent.`;
  }
}
}