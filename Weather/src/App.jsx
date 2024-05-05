import React, { useState } from "react";
import axios from "axios";
import WeatherImage from "./components/WeatherImage";

function App() {
  const [data, setData] = useState({});
  const [loc, setLoc] = useState("");
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=acfa44ffcaf193675e6357cad17c13ac`;

  const searchLoc = (event) => {
    if (event.key === "Enter") {
      axios.get(apiUrl).then((res) => {
        setData(res.data);
      });
      setLoc("");
    }
  };

  return (
    <div className="whole">
      <div className="search">
        <input
          type="text"
          value={loc}
          onChange={(event) => setLoc(event.target.value)}
          placeholder="Enter place"
          onKeyDown={searchLoc}
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="container">
        <div className="head">
          <div className="place font-bold text-aliceblue px-5 pt-5 text-3xl">
            <h3>{data.name}</h3>
          </div>
          <div className="temperature">
            {data.main ? (
              <h1>{(data.main.temp - 272.15).toFixed()}°C</h1>
            ) : null}
          </div>
          {data.name != undefined && (
            <div className="webimg">
              <WeatherImage
                weatherType={
                  data.weather ? data.weather[0].main.toLowerCase() : ""
                }
              />
            </div>
          )}
          <div className="description ">
            {data.weather ? data.weather[0].main : null}
           
          </div>
           {data.name != undefined && (
              <div className="minmax">
                <p>MinTemp: {(data.main.temp_min - 272.15).toFixed()}°C</p>
                <p>MaxTemp :{(data.main.temp_max - 272.15).toFixed()}°C</p>
              </div>
            )}
          
        </div>
        {data.name != undefined && (
          <div className="foot">
            <div className="body">
              <div className="feels">
                {data.main ? (
                  <p style={{ fontWeight: "bold" }}>
                    {(data.main.feels_like - 272.15).toFixed()}°C
                  </p>
                ) : null}
                <p>Feels Like</p>
              </div>
            </div>
            <div className="body">
              <div className="humidity">
                <p style={{ fontWeight: "bold" }}>
                  {data.main && `${data.main.humidity}%`}
                </p>{" "}
                Humidity
              </div>
            </div>
            <div className="body">
              <div className="wind">
                <p style={{ fontWeight: "bold" }}>
                  {data.wind ? data.wind.speed.toFixed() : null} km/h
                </p>
                <p>Wind Speed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
