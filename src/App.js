import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({ rates: {} });
  useEffect(() => {
    fetch("https://api.exchangeratesapi.io/latest")
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  });
  return (
    <div>
      <div>base: {data.base}</div>
      <div>date: {data.date}</div>
      <div>rates:</div>
      {Object.keys(data.rates).map((rate) => (
        <div key={rate}>
          {rate} : {data.rates[rate]}
        </div>
      ))}
    </div>
  );
}

export default App;
