import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Title from './components/Title.js';
import Picture from './components/Picture.js';
import Description from './components/Description.js';

function App() {

  const [newData, setNewData] = useState('');
  const url = 'https://api.nasa.gov/planetary/apod?api_key=jHHaYDqZNaIIVFOBjzn6cq9bzRsNQ8JhlXlgDknX';

  const getData = () => {
    axios
    .get(`${url}`)
    .then((response) => {
      setNewData(response.data);
    })
    .catch((error) => {
      console.error(`Error: ${error}`)
    });
  }
    
    useEffect(() => {
      getData();
    }, []);
    


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>

      <Title newData={newData}/>
      <Picture />
      <Description />

    </div>
  );
}

export default App;
