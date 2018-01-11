// a github user's json file----> cities.json
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

// var prom = fetch(endpoint); // fetch() is a predefined javascript method,returns "promise" i.e. something will be returned by api, & endpoint is also pre-defined
// console.log(prom); // promise

const cities = [];
fetch(endpoint).then(blob => blob.json()) // from blob i.e. raw data to json: blob.json()
    .then(data => cities.push(...data)) // ... --> to spread an array

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // here we have to check whether a city or state matches what was searched 
        const regex = new RegExp(wordToMatch, "gi") // gi --> global,case insensitive
        return place.city.match(regex) || place.state.match(regex)
            // on colsole type: findMatches("york",cities) and see output
    });
}

function displayMatches() {
    //console.log(this.value); ---->  gives us value of the search input field
    const matchArray = findMatches(this.value, cities);
    //console.log(matchArray);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, "gi");
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);

        return `
        <li>
        <span class="name">${cityName},${stateName}</span>
        <span class="population">${place.population}</span>        
        </li>
        `;
    }).join(""); // map returns an array, but we want one string so --->  .join(""); 
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("keyup", displayMatches);