var userInputEl = document.querySelector("#user-form");
var weatherInput = document.getElementById("#weather");

function userInputHandler(event){
    event.preventDefault();
   
    console.log(event.text);
}

userInputEl.addEventListener("submit", userInputHandler);

var getWeatherData = function(){
    var weatherApi = fetch("https://api.openweathermap.org/data/2.5/weather?q=Orlando,us&APPID=0c37646b1c308ae2462fc8547af5cdd4").then(function(response) {
        response.json().then(function(data){
            console.log(data.wind);
            
        });
      });
   
};

getWeatherData();

var displayWeatherBox = function(){


}
