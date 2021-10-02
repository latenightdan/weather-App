var userInputEl = document.querySelector("#user-form");
var weatherInput = document.getElementById("#city");
var city = document.querySelector("#city");
var weatherBlockEl = document.querySelector("#weather-block-title");
var humidityEl = document.querySelector("#humid");
var tempEl = document.querySelector("#temperature");
var windEl = document.querySelector("#windd");
var buttons = document.querySelector("#city-buttonn");
btns = document.getElementsByClassName("city-button");
var daily = document.querySelector(".daily");
var tempTwo = document.querySelector(".tempOne");


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
    var weatherApi = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&type=hourstart=0&cnt=5&units=imperial&APPID=0c37646b1c308ae2462fc8547af5cdd4"
    fetch(weatherApi).then(function (response) {
        response.json().then(function (data) {
            // console.log(data);
            // console.log(city);
            createFourDay(data);
            displayWeather(data, city);

        });
    });

};

var createFourDay = function (weatherr) {
    console.log(weatherr.list);
    for (i = 0; i < weatherr.list.length; i++) {

        var tempData = weatherr.list[i].main.temp;

        var tempppEl = document.createElement("div");
        tempppEl.classList = "col align-self-end dailyTwo"
        var tempText = document.createElement("span");
        tempText.textContent = "temp: " + tempData + " F ";



        var windData = weatherr.list[i].wind.speed;
        console.log(windData)
        var windEll = document.createElement("div");
        windEll.classList = "col align-self-end dailyTwo"
        var windText = document.createElement("span");
        windText.textContent = "wind Speed: " + windData + "MPH "



        daily.innerHTML = "";
        daily.appendChild(tempppEl);
        daily.appendChild(windEll);
        // windEll.appendChild(windText);
        tempppEl.appendChild(tempText);
        tempppEl.appendChild(windText)


        windEll.appendChild(tempText);
        windEll.appendChild(windText);




        //    weatherBlockEl.appendChild(butt);
        // var humidBlock = beep.list[i].main.humidity;
        // var humidBlockEl = document.createElement("span");
        // humidBlockEl.textContent = humidBlock + "%";
        // daily.appendChild(humidBlock);
    }
}


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

    windEl.textContent = "";
    var windd = weather.list[0].wind.speed;
    var windyEl = document.createElement("span");
    windyEl.textContent = windd + "mph";
    windEl.appendChild(windyEl);


}




getWeatherData("red bank");

// function setText() {
//     var text = this.textContent;

//     console.log(text);
//     getWeatherData(text);
// }
// buttons.addEventListener("click", setText);
