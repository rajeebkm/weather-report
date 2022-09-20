import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

// Weather Application
// we want to grab data from a public weather database
// API (Application Programming Interface) call to get JSON weather data
// STATE! Plain JavaScript object that holds the current state of information
// dynamic data (like city information etc.)
// 2 ways to handle state in react 1. constructor and class based components 2. Functional and Hooks
// In our app, we will be using Hooks to handle our state


// useEffect hook tells our component App to do something after rendering
// useState hook initialize the state and sets the state 
function App() {
  const [search, setSearch] = useState('')
  const [allData, setAllData] = useState({
    city: '',
    country: '',
    temperature: '',
    humidity: '',
    pressure: '',
    windSpeed: '',
    weatherIcons: ''
  })


  useEffect(() => {
    // we add what we want to happen after rendering
    // fetch the database information the API call of weather (grab JSON data)
    fetchData('Chennai')

  },[])

  const fetchData = async(city) => {
    // try catch error handling
    try {
      const APIKEY = '38a48e17d58179816499f2b98ac0a1af';
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`);

      await setAllData({
        city: result.data.name,
        country: result.data.sys.country,
        temperature: result.data.main.temp,
        humidity: result.data.main.humidity,
        pressure: result.data.main.pressure,
        windSpeed: result.data.wind.speed,
        weatherIcons: result.data.weather[0].icon
      })
  } catch(error) {
    console.log("API is not loaded correctly or loaded for the very first time");
  }
}

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData(search);
  }

  const handleChange = (event) => {
    setSearch(event.target.value)
  }


  return(
    // the section tag in react is for sections and the main tag is for main build
    // under main, we will have sections for the form and for displaying results
    <main>
      <h1> Weather Report</h1>
      <div className="App">
        
        <form on onSubmit={handleSubmit}>
          <input
            value={search}
            type='text'
            name='city'
            placeholder='Location'
            onChange={handleChange}
          />
          <button for='city'>Search</button>
        </form>

        <section>
          <div className='header-div'>
            <div>
              <div className='data'>
                <img src={'https://openweathermap.org/img/wn/' + allData.weatherIcons + '@2x.png'}  alt='weather icon'
                />
                <h1 className='title'>{allData.city}</h1>
                <h2 className='location'>{allData.country}</h2>
                <div className='weather-description'>
                  <div>
                    <h3>HUMIDITY</h3>
                    <p>{allData.humidity} %</p>
                  </div>
                  <div>
                    <h3>Temperature</h3>
                    <p>{allData.temperature} °C</p>
                  </div>
                  <div>
                    <h3>Pressure</h3>
                    <p>{allData.pressure} </p>
                  </div>
                  <div>
                    <h3>Wind Speed</h3>
                    <p>{allData.windSpeed} </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;

