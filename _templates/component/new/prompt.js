module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Please enter a component name',
    validate: input => input !== '',
  },
]
