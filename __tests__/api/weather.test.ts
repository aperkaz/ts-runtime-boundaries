import { OpenWeatherResponse } from '../../src/api/types';
import { API } from '../../src/api/weather';

const VALID_API_RESPONSE: OpenWeatherResponse = {
  coord: { lon: -74.006, lat: 40.7143 },
  weather: [{ id: 800, main: 'Clear', description: 'clear sky', icon: '01n' }],
  base: 'stations',
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
    country: 'Thailand',
    sunrise: 1618395491,
    sunset: 1618443229,
  },
  timezone: -14400,
  id: 5128581,
  name: 'Bangkok',
  cod: 200,
};

const VALID_API_RESPONSE_EXTRA_PROPS: any = {
  ...VALID_API_RESPONSE,
  extraProp: 12345, // new prop, not expected
};

const INVALID_API_RESPONSE: any = {
  ...VALID_API_RESPONSE,
  base: 12345, // this should be a string
};

describe('WeatherAPI', () => {
  it('should return Weather object when Codec contract is respected', () => {
    const WeatherAPI = API(VALID_API_RESPONSE);

    expect(WeatherAPI.getWeather()).toEqual({
      city: 'Bangkok',
      country: 'Thailand',
      temperature: 8.82,
    });
  });

  it('should throw Error when API returns more props than expected in Codec', () => {
    const WeatherAPI = API(VALID_API_RESPONSE_EXTRA_PROPS);

    expect(WeatherAPI.getWeather()).toEqual({
      city: 'Bangkok',
      country: 'Thailand',
      temperature: 8.82,
    });
  });

  it('should throw Error when API breaches the contract', () => {
    const WeatherAPI = API(INVALID_API_RESPONSE);

    try {
      WeatherAPI.getWeather();
      // Error is expected
      expect(true).toBe(false);
    } catch (e) {
      expect(e.message).toBe(
        `API breached the contract:\nInvalid value 12345 supplied to : { coord: { lon: number, lat: number }, weather: Array<{ id: number, main: string, description: string, icon: string }>, base: string, main: { temp: number, feels_like: number, temp_min: number, temp_max: number, pressure: number, humidity: number }, visibility: number, wind: { speed: number, deg: number, gust: number }, clouds: { all: number }, dt: number, sys: { type: number, id: number, country: string, sunrise: number, sunset: number }, timezone: number, id: number, name: string, cod: number }/base: string`,
      );
    }
  });
});
