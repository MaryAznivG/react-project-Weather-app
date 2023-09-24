import React,{useState} from "react";
import axios from "axios";
export default function SearchEngine(){
    let [city, setCity]=useState ("");
    let [message, setMessage]= useState(false);
    let [weather, setWeather]= useState({});
    function displayWeather(response){
        setMessage(true);
        setWeather({
            temperature:response.data.main.temp,
            wind: response.data.wind.speed,
            humidity:response.data.main.humidity,
            icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            decription: response.data.weather[0].description,
        });
    }
     function handleSubmit(event) {
       event.preventDefault();
       let apiKey = "094780c710fa4efd669f0df8c3991927";
       let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
       axios.get(apiUrl).then(displayWeather);
     }
     function updateCity(event) {
       setCity(event.target.value);
     }
     let form = (
       <form onSubmit={handleSubmit}>
         <input
           type="search"
           placeholder="Enter a city.."
           onChange={updateCity}
         />
         <button type="Submit">Search</button>
       </form>
     );

     if (message) {
       return (
         <div>
           {form}
           <ul>
             <li>Temperature: {Math.round(weather.temperature)}°C</li>
             <li>Description: {weather.description}</li>
             <li>Humidity: {weather.humidity}%</li>
             <li>Wind: {weather.wind}km/h</li>
             <li>
               <img src={weather.icon} alt={weather.description} />
             </li>
           </ul>
         </div>
       );
     } else {
       return form;
     }
}