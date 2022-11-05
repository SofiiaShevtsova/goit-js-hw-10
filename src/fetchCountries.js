import { Notify } from "notiflix/build/notiflix-notify-aio";
const listForCountries = document.querySelector(".country-info");

export const fetchCountries = (name) => {
  fetch(`https://restcountries.com/v2/name/${name}?
    fields=name.official,capital,population,flags.svg,languages`)
    .then((responce) => {
      return responce.json();
    })
    .then((array) => {
      if (array.length > 10) {
        Notify.info(
          "Too many matches found. Please enter a more specific name."
        );
        return;
      }
      if (array.length < 10 && array.length > 1) {
        const countriesHtmlCode = array
          .map(
            (elem) => `<div class="country">
      <img class="flag" src="${elem.flags.svg}" alt+"flag"/>
      <h2 class="name">${elem.name}</h2>
    </div>`
          )
          .join("");

        listForCountries.insertAdjacentHTML("afterbegin", countriesHtmlCode);
        }
        const { name, capital, population, flags: {svg}, languages } = array[0];

        const myCountry = `<div class="country">
      <img class="flag" src="${svg}" alt+"flag"/>
      <h2 class="name">${name}</h2>
      <p>Capital:  ${capital}</p>
      <p>Population: ${population}</p>
      <p>Languages: ${(languages.map(lan => lan.name)).join(",")}</p>
      </div>`;
        
               listForCountries.insertAdjacentHTML("afterbegin", myCountry);
 
    })
    .catch((error) => {
      console.log(error);
    });
};
