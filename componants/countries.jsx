import React, { use, useState } from "react";
import Country from "./countries/Country/Country";
import "./countries.css";

const Countries = ({ allCountries }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [flaggedCountries, setFlaggedCountries] = useState([]);
  const handleFlaggedCountry = (flagss) => {
    const newFlaggedCountries = [...flaggedCountries, flagss];
    setFlaggedCountries(newFlaggedCountries);
  };

  const handleVisitedCountry = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const countriesData = use(allCountries);
  const countries = countriesData.countries;

  return (
    <div>
      <h1>Total countries: {countries.length}</h1>
      <h2>Total visited countries :{visitedCountries.length}</h2>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3}>{country.name.common}</li>
        ))}
      </ol>
      <div className="flagged-countries">
        {flaggedCountries.map((flag) => (
          <img className="flag" key={flag} src={flag} alt="" />
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleFlaggedCountry={handleFlaggedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
