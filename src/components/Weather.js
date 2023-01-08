import React, { useState, useEffect } from "react";

const Weather = () => {
  const api =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/warsaw?unitGroup=metric&key=PKEKTDB4B4TMDVWFU85J7SXSW&contentType=json";
  const [weatherInfo, setWeatherInfo] = useState([]);

  const fetchData = async () => {
    const response = await fetch(api);
    const data = await response.json();
    setWeatherInfo(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {weatherInfo.address}
      <h1>Now is {weatherInfo.days[0].temp}&#8451;</h1>
    </div>
  );
};

export default Weather;
