import "./App.css";
import Countries from "../componants/countries";
import { Suspense } from "react";

const allCountries = fetch("https://openapi.programming-hero.com/api/all").then(
  (res) => res.json()
);

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Countries allCountries={allCountries}></Countries>
      </Suspense>
    </>
  );
}

export default App;
