import React from "react";

function Weather() {
  const api =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/warsaw?unitGroup=metric&key=PKEKTDB4B4TMDVWFU85J7SXSW&contentType=json";

  fetch(api, {
    method: "GET",
    headers: {},
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
}

export default Weather;
