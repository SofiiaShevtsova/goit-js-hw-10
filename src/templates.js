export const foundedCountries = (array) =>
  array
    .map(
      (elem) => `<div class="country">
      <img class="flag" src="${elem.flags.svg}" alt+"flag" width="100px"/>
      <h2 class="name">${elem.name}</h2>
    </div>`
    )
    .join("");

export const getCountry = (array) => {
  const {
    name,
    capital,
    population,
    flags: { svg },
    languages,
  } = array[0];
  return `<div class="country">
      <img class="flag" src="${svg}" alt+"flag" width="100px"/>
      <h2 class="name">${name}</h2>
      <div class="info">
      <p>Capital:  ${capital}</p>
      <p>Population: ${population}</p>
      <p>Languages: ${languages.map((lan) => lan.name).join(",")}</p>
      </div>
      
      </div>`;
};
