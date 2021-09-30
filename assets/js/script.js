var userInputEl = document.querySelector("#user-form");
var weatherInput = document.getElementById("#city");
var city = document.querySelector("#city");
var weatherBlockEl = document.querySelector("#weather-block-title");
var humidityEl = document.querySelector("#humid");
var tempEl = document.querySelector("#temperature");
var windEl = document.querySelector("#windd");
function userInputHandler(event) {
    event.preventDefault();
    var cityData = city.value.trim();
    if (cityData) {
        city.value = "";
        getWeatherData(cityData);


        // console.log(cityData)
        // console.log(city.value);

    }
    else {

    }

}

userInputEl.addEventListener("submit", userInputHandler);




var getWeatherData = function (city) {
    var weatherApi = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=0c37646b1c308ae2462fc8547af5cdd4"
    fetch(weatherApi).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            console.log(city);
            displayWeather(data, city);
        });
    });

};

var displayWeather = function (weather, city) {
    console.log(weather.wind.speed);
    console.log(city);
  weatherBlockEl.textContent = city;
  humidityEl.textContent = "";
  var humidityy = weather.main.humidity;
  var humidEl = document.createElement("span");
  humidEl.textContent = humidityy + "%";
humidityEl.appendChild(humidEl);

tempEl.textContent = "";
  var temperaturee = weather.main.humidity;
  var tempyyEl = document.createElement("span");
  tempyyEl.textContent = temperaturee + "%";
tempEl.appendChild(tempyyEl);

windEl.textContent = "";
var windd = weather.wind.speed;
var windyEl = document.createElement("span");
windyEl.textContent = windd + "mph";
windEl.appendChild(windyEl);


}

getWeatherData("london");


