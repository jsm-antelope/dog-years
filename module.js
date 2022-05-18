import prompts from 'prompts'
import chalk from 'chalk'
import { humanToDogYears } from './utils/index.js'

console.log('=================================')
console.log(chalk.green('This is a human-to-dog years calc'))
console.log('=================================')

const response = await prompts([
  {
    type: 'text',
    name: 'name',
    message: "What's your name?",
  },
  {
    type: 'number',
    name: 'age',
    message: "What's your human age?",
  },
])
const dogAge = humanToDogYears(response.age)
const sentence = `
  My name is ${response.name}. I am ${response.age} years old in human years which is ${dogAge} years old in dog years.
  `

console.log('---------------------------------')
console.log(chalk.blue(sentence))
console.log('---------------------------------')
