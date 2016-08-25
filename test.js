var updateCheck = require('./index')

updateCheck.check({
  timeout: 1000,
  output: true,
  count: 0,
  factor: 0,
  minTimeout: 150,
  maxTimeout: 500,
}, err => {
  if (err)
    throw new Error(err)

  console.log('update notification has been displayed to the user!')
})
