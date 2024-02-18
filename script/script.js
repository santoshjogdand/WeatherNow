const API_KEY = "b9d26520f7b8a11536f284acef2aa108";
let CityName;
let temperature;
let weatherText;
let iconid;
let humidity;
let windspeed;
let country;
let feel;
async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  let value = await fetch(url);
  let data = await value.json();
  console.log(data)
  console.log("name: " + data.name);
  let notf = document.querySelector(".notf");
  let info = document.querySelector(".info");
  info.style.display = "none";
  if (data.name == undefined) {
    notf.style.display = "flex";
    info.style.display = "none";
    console.log("not found");
  } else {
    CityName = data.name;
    country = data.sys.country;
    let load = document.querySelector(".load");
    weatherText = data.weather[0].description;
    temperature = data.main.temp;
    iconid = data.weather[0].icon;
    humidity = data.main.humidity
    feel = data.main.feels_like;
    windspeed = data.wind.speed
    notf.style.display = "none";
    load.style.display = "flex";
    setTimeout(function() {
      info.style.display = "flex";
      load.style.display = "none";

    }, 3000);
    const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    let wimg = document.querySelector(".wimg");
    let wdescription = document.querySelector(".wdescription")
    let temper = document.querySelector(".temper");
    let name = document.querySelector(".name");
    let humid = document.querySelector(".humid");
    let wind = document.querySelector(".wind");
    if(iconid == "01d"){
      wimg.src = "./images/01d.png"
    }
    else if(iconid == "01n"){
      wimg.src = "./images/01n.png"
    }
    else if(iconid == "02d"){
      wimg.src = "./images/02d.png"
    }
    else if(iconid == "03d" || iconid == "03n"){
      wimg.src = "./images/03.png"
    }
    else if(iconid == "04d" || iconid == "04n"){
      wimg.src = "./images/04.png"
    }
    else if(iconid == "09d" || iconid == "09n"){
      wimg.src = "./images/09.png"
    }
    else if(iconid == "10d"){
      wimg.src = "./images/10d.png"
    }
    else if(iconid == "10n"){
      wimg.src = "./images/10n.png"
    }
    else if(iconid == "50d" || iconid == "50n"){
      wimg.src = "./images/50.png"
    }
    weatherText = weatherText.charAt(0).toUpperCase()+(weatherText.slice(1));
    wdescription.innerHTML = `Feels like ${feel}°C.<br>${weatherText}.`;
    temper.innerHTML = Math.round(temperature) + "°C";
    name.innerHTML = CityName + ", " + country;
    humid.innerHTML = "Humidity <br>" + humidity +"%";
    wind.innerHTML = "Wind Speed <br>" + windspeed + "m/s";
  }
}

function wa() {
  if (CityName == undefined) {
    alert("Enter Valid City");
  } else {
    let phno = prompt("Enter Phone no");
    let msg =
      "In *" +
      CityName +
      "* there is a *" +
      weatherText +
      "* and temprature is *" +
      temperature +
      "*°C";

    document.getElementById("an").href = `https://wa.me/91${phno}?text=${msg}`;
    console.log(msg);
  }
}

searchbtn = document.querySelector(".search");
searchbtn.addEventListener("click", () => {
  city = document.querySelector("#city").value;
  getWeather(city);
  
  console.log("clicked on button!!");
  console.log(city);
});
