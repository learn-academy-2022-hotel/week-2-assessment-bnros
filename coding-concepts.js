// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Hotel 2022"
console.log(cohort.split(""))

// a) Your answer: I believe that this will log ["H", 
// "o", "t", "e", l" "", "2", "0", "2", "2"].
// b) Verify and explain: After running it through terminal, it logged as I expected to. The results came back with [
//   'H', 'o', 't', 'e',
//   'l', ' ', '2', '0',
//   '2', '2'
// ]
// This is because .split() is a mutator that takes in a string, and returns a new array with each letter in the string as a new value within the new array.




// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: I believe that this function should log "Hello, LEARN Student!".
// b) Verify and explain: After running it through terminal, it returned a message saying "undefined". I did not observe closely enough to realize that in our function, there was no return given, therefore it did not work. In order for it to return a message, we would have to add "return" before the string interpolation.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: This should return a new array in terminal with the values [8, 10, 12, 14, 16].
// b) Verify and explain: After verifying the console.log within temrinal, it returned:
// [ 8, 10, 12, 14, 16 ]
// My answer turned out to be correct because with using the method of .map(), we are telling it to return a new array while iterating and passing the function to each value of the previous array.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: Because of the .filter() method, this should log [11, 13, 15] when we run it through terminal.
// b) Verify and explain: When we log the array above in terminal, it returns a new array as expected with the following:
// [ 11, 13, 15 ]
// This is because with the .filter(), it returns a new array based on the condition we give it. In this cas, it was told to pass on "number % 2 !== 0" thus, returning only odd numbers from the original array.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: I'm confident that this will log "JavaScript".
// b) Verify and explain: After verifying it within terminal, I was correct with my answer because within the object, we have a key called "languages", and within that key there are two values, called JavaScript and Ruby. To call upon it, as we did in console.log, we have to use dot notation to extract the value, and because we followed with bracket notation, it extracted and return the first value in the zero index, corresponding to JavaScript.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:
// b) Verify and explain:
