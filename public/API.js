var weather;

function api() {
    loadJSON('http://api.openweathermap.org/data/2.5/weather?q=Cupertino&appid=237d7b4180311e3724c4087d35d261d4', gotData);
}

function gotData(data) {
    println(data);
    weather = data;
}