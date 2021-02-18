import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

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
    </div>
  );
}

export default App;
