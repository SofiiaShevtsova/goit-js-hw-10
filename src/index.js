import "./css/styles.css";
import { fetchCountries, listForCountries } from "./fetchCountries";
const debounce = require("lodash.debounce");

const DEBOUNCE_DELAY = 300;
const inputForCountriesName = document.querySelector("#search-box");

inputForCountriesName.addEventListener(
  "input",
  debounce(onCountriesNameInput, DEBOUNCE_DELAY)
);

function onCountriesNameInput(event) {
  if (event.target.value.trim() === "") {
    listForCountries.innerHTML = "";

    return;
  }
  fetchCountries(event.target.value.trim());
}
