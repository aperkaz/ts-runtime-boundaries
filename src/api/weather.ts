/**
 * External dependency to our system. Example: an API call to a 3rd party system.
 */

import { OpenWeatherResponse } from "./types";

const API = {
  // Mocks of: https://openweathermap.org/current#name
  getWeather: (): OpenWeatherResponse => ({
    coord: { lon: -74.006, lat: 40.7143 },
    weather: [
      { id: 800, main: "Clear", description: "clear sky", icon: "01n" },
    ],
    base: "stations",
    main: {
      temp: 8.82,
      feels_like: 7.74,
      temp_min: 8,
      temp_max: 9.44,
      pressure: 1019,
      humidity: 87,
    },
    visibility: 10000,
    wind: { speed: 2.09, deg: 222, gust: 2.67 },
    clouds: { all: 1 },
    dt: 1618388053,
    sys: {
      type: 1,
      id: 4610,
      country: "US",
      sunrise: 1618395491,
      sunset: 1618443229,
    },
    timezone: -14400,
    id: 5128581,
    name: "New York",
    cod: 200,
  }),
};

export default API;
