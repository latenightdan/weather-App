var userInputEl = document.querySelector("#user-form");
var weatherInput = document.getElementById("#city");
var city = document.querySelector("#city");
var weatherBlockEl = document.querySelector("#weather-block-title");
var humidityEl = document.querySelector("#humid");
var tempEl = document.querySelector("#temperature");
var windEl = document.querySelector("#windd");
var buttons = document.querySelector("#city-buttonn");
btns = document.getElementsByClassName("city-button");



//button input
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var text = this.textContent;

        console.log(text);
        getWeatherData(text);
    });
}

//text input
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



//api
var getWeatherData = function (city) {
    var weatherApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&type=hourstart=0&cnt=0&units=imperial&APPID=0c37646b1c308ae2462fc8547af5cdd4"
    fetch(weatherApi).then(function (response) {
        response.json().then(function (data) {
            // console.log(data);
            // console.log(city);
            console.log(data);
            displayWeather(data, city);
        });
    });

};




var displayWeather = function (weather, city) {
    console.log(weather.list[0].main.humidity);
    console.log(city);
    console.log(weather.city.name);
    weatherBlockEl.textContent = weather.city.name + " " + weather.list[0].dt_txt;
    humidityEl.textContent = "";
    var humidityy = weather.list[0].main.humidity;
    var humidEl = document.createElement("span");
    humidEl.textContent = humidityy + "%";
    humidityEl.appendChild(humidEl);

    tempEl.textContent = "";
    var temperaturee = weather.list[0].main.temp;
    var tempyyEl = document.createElement("span");
    tempyyEl.textContent = temperaturee + "%";
    tempEl.appendChild(tempyyEl);

    // windEl.textContent = "";
    // var windd = weather.wind.speed;
    // var windyEl = document.createElement("span");
    // windyEl.textContent = windd + "mph";
    // windEl.appendChild(windyEl);


}

getWeatherData("red bank");

// function setText() {
//     var text = this.textContent;

//     console.log(text);
//     getWeatherData(text);
// }
// buttons.addEventListener("click", setText);
