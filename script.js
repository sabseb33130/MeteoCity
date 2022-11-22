
    

const openID = "f3b93101c2e5243ad953a1d5d8af1da4";
/*const villeChoix = document.getElementById("ville");
let choix = villeChoix.ariaValueText;
console.log(choix);*/ 
function geoVille(){
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=Toulouse,FR&limit=5&appid=${openID}`)
    .then((resp)=> resp.json())
    .then((data) => console.log(JSON.stringify(data)))
     
};

geoVille();
function weathVille(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=43.6044622&lon=1.5032717763608257&appid=${openID}`)
    .then((resp1)=> resp1.json())
    .then((data1) => console.log((data1))) 
    .then((data1) => console.log((data1.main.temp)))
    .then((data1) => console.log((data1.main.humidity)))
    .then((data1) => console.log((data1.main.pressure)))
    .catch((data1) =>console.log("erreur"))
let test = data1.main.humidity;
console.log(test);
};
weathVille();


