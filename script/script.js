const API_KEY = "b9d26520f7b8a11536f284acef2aa108";
let CityName;
let temperature;
let weatherText;
async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  let value  = await fetch(url)
  let data = await value.json();
  console.log("name: " + data.name)
  console.log("Tempreture: " + data.main.temp)
  console.log("Humidity: " + data.main.humidity)
  console.log("Weather Description: " + data.weather[0].description)
  console.log("Wind Speed: " + data.wind.speed)
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    icimg = document.querySelector(".info")
    icimg.innerHTML = `<img class = "icon" src = "${icon}">`;
    document.querySelector(".icon").style.width = '100px';
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

  searchbtn = document.querySelector(".getWeather");
  searchbtn.addEventListener("click",()=>{
    city = document.querySelector("#city").value;
    getWeather(city);
    console.log("clicked on button!!");
    console.log(city);

  });

