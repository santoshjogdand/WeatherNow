const API_KEY = "b9d26520f7b8a11536f284acef2aa108";
let CityName;
let temperature;
let weatherText;
function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const {
        main: { temp },
        weather: [weather]
      } = data;
      const icon = `https://openweathermap.org/img/wn/${weather.icon}.png`;
       weatherText = weather.description;
       temperature  = parseInt(temp - 273.123);
       CityName = (
          (city[0]).toUpperCase()+(city.slice(1)).toLowerCase()
        );
          
        
          
      document.getElementById("weather").innerHTML = `
      <img src="${icon}" id="png" alt="Weather icon"> <br>
        <p id="wprg">In <b>${CityName}</b> there is a <b>${weatherText}</b> and temprature is <b>${temperature}°C</b>.</p>
        
      `;
    });
}

function wa(){
  if(CityName == undefined){
    alert("Enter Valid City")
  }
  else{
  let phno = prompt("Enter Phone no");
  let msg = "In *"+ CityName+ "* there is a *" + weatherText +"* and temprature is *"+ temperature +"*°C";
  console.log(msg);
  document.getElementById("an").href =`https://wa.me/91${phno}?text=${msg}`
  }
}

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const city = document.querySelector("input[name=city]").value;
  getWeather(city);
});
