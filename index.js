//this has been written in javascript, and is a really basic calculator to compare human vs dog years.
//this is my age
let myAge = 35

//define the value of earlyYears, this is expected to change
const earlyYears = 2 * 10.5

//subtracting 2 from myAge and putting the result into a new variable called laterYears, and then multiplying this by 4
const laterYears = (myAge - 2) * 4

//this takes my age and converts it to dog years
const myAgeInDogYears = earlyYears + laterYears

//storing my name in the variable called myName, and converting all letters to lower case
const myName = 'James'

//creating a sentence using temlate literals etc. This states my age and what it would be in dog years
const sentence = `My name is ${myName.toLowerCase()}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`

console.log(sentence)
