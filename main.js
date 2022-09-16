/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

/* DIV ID's you'll need access to 👇
"city-name"
"weather-type"
"temp"
"min-temp"
"max-temp"
*/

let cityName = document.getElementById("city-name");
let weatherType = document.getElementById("weather-type");
let temp = document.getElementById("temp");
let minTemp = document.getElementById("min-temp");
let maxTemp = document.getElementById("max-temp");

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this:
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial
 */
const getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  //HINT: Use template literals to create a url with input and an API key

  const FETCH_Url = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`;
  //CODE GOES HERE
  const weatherpromise = fetch(`${FETCH_Url}`);
  return weatherpromise.then((response) => {
    return response.json();
  });
};

/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
const searchCity = () => {
  const city = document.getElementById("city-input").value;
  // CODE GOES HERE
  getWeatherData(city)
    .then((data) => {
      showWeatherData(data);
    })
    .catch((error) => console.log("something wrong"));
};

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
const showWeatherData = (weatherData) => {
  //CODE GOES HERE
  cityName.innerText = weatherData.name;
  weatherType.innerText = weatherData.weather[0].main;
  temp.innerText = weatherData.main.temp;
  minTemp.innerText = weatherData.main.temp.temp_min;
  maxTemp.innerText = weatherData.main.temp.temp_max;
};
