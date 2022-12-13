// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// PSEUDOCODE:

// input: three objects containing different numbers
// output: a new string designating whether if the provided numbers is divisible by three or not divisible by three.

// process:
// declare a function named "divByThree"
// after declaring function, in the paramter add "object"
// using dot notation, to access the correct object
// create a return statement using string interpolation for if the provided number is divisble by three
// create another return statement using string interpolation if the provided number is NOT divisible by three



// a) Create a test with expect statements for each of the variables provided.

// RED:
describe("divByThree", () => {
    it("calculates if the given number is divisble by three", () => {
        expect(divByThree(object1)).toEqual("15 is divisible by three.")
        expect(divByThree(object2)).toEqual("0 is divisible by three.")
        expect(divByThree(object3)).toEqual("-7 is NOT divisible by three.")
    })
})

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.

// GREEN:
const divByThree = (object) => {
    if (object.number % 3 === 0){
        return `${object.number} is divisible by three.`
    } else if (object.number % 3 !== 0){
        return `${object.number} is NOT divisible by three.`
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// PSEUDOCODE:

// input: an array with all lower case values
// output: a new array with the first letter of each value capitilized

// process:
// declare a function called "capitlizedArray"
// after declaring function, in the paramter add "array"
// use the functions of .map() in the return statement to bring forth a new array with the same values, but mofidied
// within the return statement, create another return statement using the functions of charAt(0) to specify to return a specific character position within the string, followed by .toUpperCase to convert all the letters in the string to uppercase, and ending with + slice(1) to designate what position we want it to start and end at.

// a) Create a test with expect statements for each of the variables provided.

// RED:
describe("capitalizedArray", () => {
    it("capitlizes the first letter of the values in the array", () =>{
        expect(capitilizedArray(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitilizedArray(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"]) 
    })
})

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

// GREEN:
const capitilizedArray = (array) => {
    return array.map(value => {
        return value.charAt(0).toUpperCase() + value.slice(1)
    })
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// PSEUDOCODE:

// input: three strings containing vowels and its placements
// output: the vowel placement and its index value of the provided strings

// process:
// declare a function called "indexOfFirstVowl"
// after declaring function, in the paramter add "string"
// using search() automatically returns the index position of the first match
// hardcode the vowels within search() so that it'll only return a, e, i, o, u, and sometimes y


// a) Create a test with expect statements for each of the variables provided.

// RED:
describe("indexOfFirstVowel", () => {
    it("returns the index of the first vowel", () =>{
        expect(indexOfFirstVowel(vowelTester1)).toEqual(1)
        expect(indexOfFirstVowel(vowelTester2)).toEqual(0)
        expect(indexOfFirstVowel(vowelTester3)).toEqual(2)
    })
})

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

// GREEN:
const indexOfFirstVowel = (string) => {
    return string.search(/[a,e,i,o,u,y]/)
}
