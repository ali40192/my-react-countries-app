import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountry, handleFlaggedCountry }) => {
  const [visited, setVisited] = useState(false);
  const clickhandle = () => {
    setVisited(!visited);
    handleVisitedCountry(country);
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img
        className="country-flag"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <h2>Name: {country.name.common}</h2>
      <h3>Capital: {country.capital.capital}</h3>
      <button className="btn-cls" onClick={clickhandle}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button
        className="btn-cls"
        onClick={() => {
          handleFlaggedCountry(country.flags.flags.png);
        }}
      >
        Flag
      </button>
    </div>
  );
};

export default Country;
