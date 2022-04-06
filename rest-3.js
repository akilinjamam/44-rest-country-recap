const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = showCountries => {
    console.log(showCountries[0]);
    const countriesHtml = showCountries.map(country => getCountryHtml(country));
    // console.log(countriesHtml[0]);f

    const showCountryNameInUi = document.getElementById('countries');

    console.log(countriesHtml)
    showCountryNameInUi.innerHTML = countriesHtml.join(' ');
    console.log(showCountryNameInUi)

}

// option-3
const getCountryHtml = ({ name, flags }) => {
    return `
    <div class="effect">
    <h2>${name.common}</h2>
    <img src="${flags.png}">
   </div>
    
    `


}


/* 
original

const getCountryHtml = country => {
    return `
    <div class="effect">
    <h2>${country.name.common}</h2>
    <img src="${country.flags.png}">
   </div>
    
    `


}

*/


/* 

option-1
const getCountryHtml = country => {
    // distructuring option -1

    const { name, flags } = country;
    return `
    <div class="effect">
    <h2>${name.common}</h2>
    <img src="${flags.png}">
   </div>
    
    `


}

*/
loadCountries();


