import { Notify } from "notiflix/build/notiflix-notify-aio";
import { foundedCountries, getCountry } from "./templates";

export const listForCountries = document.querySelector(".country-info");

export const fetchCountries = (name) => {
  fetch(`https://restcountries.com/v2/name/${name}?
    fields=name.official,capital,population,flags.svg,languages`)
    .then((responce) => {
      if (responce.status === 404) {
        throw new Error(response.status)
      }

      return responce.json();
    })
    .then((array) => {
      if (array.length > 10) {
        listForCountries.innerHTML = "";
        Notify.info(
          "Too many matches found. Please enter a more specific name.",
          { position: "center-top", distance: "50px" }
        );
        return;
      }

      if (array.length < 10 && array.length > 1) {
        listForCountries.innerHTML = foundedCountries(array);
      }
      if (array.length === 1) {
        listForCountries.innerHTML = getCountry(array);
      }
    })
    .catch((error) => {
        Notify.failure("Oops, there is no country with that name",
          { position: "center-top", distance: "50px" });
    });
};
