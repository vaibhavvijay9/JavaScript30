// a github user's json file----> cities.json
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var prom = fetch(endpoint); // fetch() is a predefined javascript method,returns "promise" i.e. something will be returned by api, & endpoint is also pre-defined
console.log(prom); // promise

const cities = [];
fetch(endpoint).then(blob => blob.json())
    .then(data => cities.push(...data)) // ... --> to spread an array

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // here we have to check whether a city or state matches what was searched 
        const regex = new RegExp(wordToMatch, "gi") // gi --> global,insensitive(uppercase/lowercase)
        return place.city.match(regex) || place.state.match(regex)
    });
}