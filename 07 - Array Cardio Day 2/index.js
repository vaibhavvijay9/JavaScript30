// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 101 },
    { text: 'Super good', id: 102 },
    { text: 'You are the best', id: 103 },
    { text: 'Ramen is my fav food ever', id: 104 },
    { text: 'Nice Nice Nice!', id: 105 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(person => {
    const currentYear = (new Date()).getFullYear();
    return currentYear - person.year >= 19;
});
console.log("Is at least one person 19 or older?: ", isAdult);


// Array.prototype.every() // is everyone 19 or older?
const allAdult = people.every(person => {
    (new Date()).getFullYear() - person.year >= 19; // used date directly & implicit return
});
console.log("Is everyone 19 or older?: ", allAdult);


// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 102

// const comment = comments.find(function(comment) {                // without =>(arrow)
//     if (comment.id == 102)
//         return true;
// });

const comm = comments.find(comment => comment.id == 102);
console.log(comm);


// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 102