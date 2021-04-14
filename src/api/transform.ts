/**
 * Transform function between Codecs.
 */
import { mapOutput } from 'io-ts-types/lib/mapOutput';

import { OpenWeatherResponse, OpenWeatherResponseCodec } from './types';
import { Weather } from '../types';

const mapper = (x: OpenWeatherResponse): Weather => ({
  city: x.name,
  country: x.sys.country,
  temperature: x.main.temp,
});

/**
 * Transalte API response to internal representation.
 */
export const transformOpenWeatherToWeather = (
  openWeatherResponse: OpenWeatherResponse,
): Weather => {
  const ToWeatherCodec = mapOutput(OpenWeatherResponseCodec, mapper);

  return ToWeatherCodec.encode(openWeatherResponse);
};
