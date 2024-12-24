import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "#YOUR_API_KEY";

  const getWeatherInfo = async () => {
    try {
      setError(false);
      console.log(`Fetching weather data for ${city}...`);
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log('API response:', response);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      let jsonResponse = await response.json();
      console.log('API jsonResponse:', jsonResponse);

      let result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };

      console.log('Result:', result);
      return result;
    } catch (err) {
      console.error('Error fetching weather data:', err);
      setError(true);
      return null;
    }
  };

  const handleChange = (evt) => {
    setCity(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const newInfo = await getWeatherInfo();
      if (newInfo) {
        updateInfo(newInfo);
        setCity("");
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <div className="buttoncss">
          <TextField
            id="city"
            label="City Name"
            variant="outlined"
            value={city}
            onChange={handleChange}
            required
          />
          <Button variant="contained" color="success" className="searchx" type="submit">
            <SearchIcon />
          </Button>
        </div>
      </form>
      {error ? (
        <p style={{ color: "red" }}>No such place exists!</p>
      ) : (
        <p style={{ color: "white", fontWeight: "bold" }}>Weather Updated!</p>
      )}
    </div>
  );
}
