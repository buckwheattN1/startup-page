import React, { useEffect } from "react";

function Weather() {
  const api =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/warsaw?unitGroup=metric&key=PKEKTDB4B4TMDVWFU85J7SXSW&contentType=json";

  //   useEffect(() => {
  //     fetchWeather();
  //   }, []);

  //   // Fetch Weather
  //   const fetchWeather = async () => {
  //     const res = await fetch(api);
  //     const data = await res.json();

  //     console.log(data.address);
  //   };
  //   return <div>{data.address}</div>;
}

export default Weather;
