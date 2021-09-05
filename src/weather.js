
const APIKEY = "bc70281b41f99891131deb4a1c24bdcf";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
  fetch(url)
  .then(response => response.json())
  .then(data =>{
      const weather = document.querySelector("#weather div:first-child");
      const city = document.querySelector("#weather div:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });
}
function onGeoError(){
  alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);