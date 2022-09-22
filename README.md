Weather-Report
Link to website: https://weathersbycity.netlify.app/

Getting Started with Create React App
This project was bootstrapped with Create React App.
=======
Link to website: https://weathersbycity.netlify.app/

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

API call (grab the JSON data of weather):
https://openweathermap.org/


Weather App
-----------

Fronted
-------

React:
------

Website: ```https://reactjs.org/```

Article: ```https://www.sitepoint.com/create-react-app/```
Create React App
----------------
npx create-react-app my-app
cd my-app
npm start

React Hooks
-----------
```useState
useEffect
```


API call (grab the JSON data of weather): ``` https://openweathermap.org/```


API key & Axios promise Library
--------------------------------
```axios``` is promise based HTTP client for browser and node.js
axios is a library which will allow us to make requests the backend with promises.

Download and Install axios: ```npm i axios```

Use ```import axios from 'axios';``` in App.js file

App.js file (weather-application)
---------------------------------

```
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

  const [allData, setAllData] = useState({
    city: '',
    country: '',
    temperature: ''
  })

  useEffect(() => {
    // we add what we want to happen after rendering
    // fetch the database information the API call of weather (grab JSON data)
    fetchData()
  }, [])

  const fetchData = async(city) => {
    const APIKEY = '38a48e17d58179816499f2b98ac0a1af';
    const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${'atlanta'}&appid=${APIKEY}`);
    
    await setAllData({
      city: result,
      country: result.data.sys.country,
      temperature: result
    })
  }

  return(
    <div className="App">
      {console.log('testing 123', allData.country)}
     
      
    </div>)
}

export default App;
```

Try & Catch Error Handling
--------------------------
```
const fetchData = async(city) => {
    try {
      const APIKEY = '38a48e17d58179816499f2b98ac0a1af';
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}`);

      await setAllData({
        city: result,
        country: result.data.sys.country,
        temperature: result
      })
  } catch(error) {
    console.log("API is not loaded correctly or loaded for the very first time");
  }
}
```


Styling weather-application
---------------------------
CSS Gradient: ``` https://cssgradient.io/ ```



