import React from "react";
import "./listweather.css";
import { useState } from "react";
const ListWeather = ({ date, temp, weather, dayOfWeek }) => {
  
  
  return (
    <div className="list">
      <div className="weather-item">
        <div className="date">{date}</div>

        <div className="temp">
          {temp.temp_min} - {temp.temp_max}°C
        </div>
        <div className="weather">{weather}</div>
      </div>
    </div>
  );
};

export default ListWeather;
