import React from "react";
import "./Weather.css";

export default function Weather (){
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              autoFocus="on"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="sumbit" value="Search" className="btn btn-primary w-100" />
          </div>
        </div>
      </form>
      <h1>Los Angeles</h1>
      <ul>
        <li>Wednesday 08:44pm </li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="clear"
          />{" "}
          <span className= "temperature">
          22 </span> <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li> Precipitation:1%</li>
            <li> Humidity:65%</li>
            <li> Wind:6 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}