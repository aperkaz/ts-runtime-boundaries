/**
 * Internal usage types
 */
import * as t from 'io-ts';

export type Weather = t.TypeOf<typeof WeatherCodec>;
export const WeatherCodec = t.type({
  city: t.string,
  country: t.string,
  temperature: t.number,
});
