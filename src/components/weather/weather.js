import { useEffect, useMemo, useState } from "react";
import OpenWeatherMapService from "../../services/open-weather-map-service";
import "./weather.css";

const cities = [
  { Лондон: 2643743 },
  { Минск: 625144 },
  { Москва: 524894 },
  { "Санкт-Петербург": 498817 },
  { Одесса: 698740 },
];

const Weather = () => {
  const [weather, setWeather] = useState("");
  const [optionVal, setOptionVal] = useState(2643743);

  const newOpenWeatherMapService = useMemo(() => {
    return new OpenWeatherMapService();
  }, []);

  useEffect(() => {
    newOpenWeatherMapService
      .getResourse(optionVal)
      .then((res) => getWeather(res));
  }, [optionVal, newOpenWeatherMapService]);

  const getWeather = (weather) => {
    const KELVIN_TEMP = 273.15;
    const currKelvinWeather = weather.main.temp;
    const currWeather = (currKelvinWeather - KELVIN_TEMP).toFixed(1);
    const pressure = weather.main.pressure;
    const wind = weather.wind.speed;
    setWeather({ currWeather, pressure, wind });
  };

  const options = cities.map((item, index) => (
    <option key={index} value={Object.values(item)}>
      {Object.keys(item)}
    </option>
  ));

  return (
    <div className="weather">
      <select
        onChange={(e) => setOptionVal(e.target.value)}
        defaultValue={524894}
      >
        {options}
      </select>
      <p>Температура: {weather.currWeather}</p>
      <p>Давление: {weather.pressure}</p>
      <p>Скорость ветра: {weather.wind}</p>
    </div>
  );
};

export default Weather;
