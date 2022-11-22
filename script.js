
const openID = "f3b93101c2e5243ad953a1d5d8af1da4";
/*const villeChoix = document.getElementById("ville");
let choix = villeChoix.ariaValueText;
console.log(choix);*/ 
function geoVille(){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Toulouse,FR&limit=5&appid=${openID}`)
    .then((resp)=> resp.json())
    .then((data) => console.log(data))
     
};
//const lat = resp.json().lat ;
geoVille();
function weathVille(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=1.5032717763608257&appid=${openID}`)
    .then((resp1)=> resp1.json())
    .then((data1) => console.log(data1))   
};
weathVille();

