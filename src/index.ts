import weather from './api/weather';

(async () => {
  await new Promise((r) => setTimeout(r, 1000));
  const response = weather.getWeather();
  console.log(`Transformed API data: ${JSON.stringify(response)}`);
})();
