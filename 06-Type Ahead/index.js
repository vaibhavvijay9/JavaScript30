// a github user's json file----> cities.json
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var prom = fetch(endpoint); // fetch() is a predefined javascript method,returns "promise" i.e. something will be returned by api, & endpoint is also pre-defined
console.log(prom); // promise

const cities = [];
fetch(endpoint).then(blob => blob.json())
    .then(data => cities.push(...data)) // ... --> to spread an array
console.log(cities);