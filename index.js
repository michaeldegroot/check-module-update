'use strict'

const RegClient      = require('npm-registry-client')
const path           = require('path')
const clc            = require('cli-color')

const modulePath     = path.dirname(require.main.filename)
const moduleRequire  = require(path.join(modulePath, 'package.json'))
const programVersion = moduleRequire.version
const programName    = moduleRequire.name

let options = {
  timeout:    500,
  output:     true,
  count:      0,
  factor:     0,
  minTimeout: 150,
  maxTimeout: 500,
}

exports.check = (opts, cb) => {
  const allowedOpts = []
  for (let i in options)
    allowedOpts.push(i)

  for (let i in opts) {
    let allowedOptsFound = false
    for (let a in allowedOpts) {
      if (i == allowedOpts[a])
        allowedOptsFound = i
    }

    let errorMsg = 'check-module-update: The option "' + i + '" is not a valid option!\n'
    errorMsg    += 'Valid options are: ' + allowedOpts.toString().replace(/,/g, ', ') + '\n\n'
    if (allowedOptsFound === false)
      throw new Error(errorMsg)
  }

  options = Object.assign(options, opts)
  const client = new RegClient(options)

  client.get('https://registry.npmjs.org/' + programName, {
    timeout: options.timeout,
  }, (error, data, raw, res) => {
    if (error) {
      cb(error, null)
      return
    }

    let latestVersion = programVersion
    for (let version in data.versions) {
      latestVersion = version
    }

    const programVersionInt = parseInt(programVersion.replace(/\./g, ''))
    const latestVersionInt  = parseInt(latestVersion.replace(/\./g, ''))

    if (programVersionInt < latestVersionInt) {
      console.log('')
      console.log('There is a new update for symfony-helper, update with: ')
      console.log(clc.bold('npm install symfony-helper -g'))
      console.log('')
      console.log('Your version: ' + clc.bold(programVersion))
      console.log('New version: ' + clc.bold(clc.greenBright(latestVersion)))
      cb(null, true)
      return
    }

    cb(null, false)
  })
}
