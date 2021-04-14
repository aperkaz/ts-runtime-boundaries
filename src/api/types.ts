import * as t from "io-ts";

export type OpenWeatherResponse = t.TypeOf<typeof OpenWeatherResponseCodec>;
export const OpenWeatherResponseCodec = t.type({
  coord: t.type({
    lon: t.number,
    lat: t.number,
  }),
  weather: t.array(
    t.type({
      id: t.number,
      main: t.string,
      description: t.string,
      icon: t.string,
    })
  ),
  base: t.string,
  main: t.type({
    temp: t.number,
    feels_like: t.number,
    temp_min: t.number,
    temp_max: t.number,
    pressure: t.number,
    humidity: t.number,
  }),
  visibility: t.number,
  wind: t.type({ speed: t.number, deg: t.number, gust: t.number }),
  clouds: t.type({ all: t.number }),
  dt: t.number,
  sys: t.type({
    type: t.number,
    id: t.number,
    country: t.string,
    sunrise: t.number,
    sunset: t.number,
  }),
  timezone: t.number,
  id: t.number,
  name: t.string,
  cod: t.number,
});

export type Weather = t.TypeOf<typeof WeatherCodec>;
export const WeatherCodec = t.type({
  city: t.string,
  country: t.string,
  temperature: t.number,
});
