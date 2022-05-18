import prompts from 'prompts'
import chalk from 'chalk'

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
const dogAge = response.age * 10.5
const sentence = `
  My name is ${response.name}. I am ${response.age} years old in human years which is ${dogAge} years old in dog years.
  `

console.log('---------------------------------')
console.log(chalk.blue(sentence))
console.log('---------------------------------')
