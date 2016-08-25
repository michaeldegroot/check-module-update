[![](https://nodei.co/npm/check-module-update.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/check-module-update)   
[![](https://david-dm.org/michaeldegroot/check-module-update.svg "deps") ](https://david-dm.org/michaeldegroot/check-module-update "david-dm")
[![](https://travis-ci.org/michaeldegroot/check-module-update.svg?branch=master "testing") ](https://travis-ci.org/michaeldegroot/check-module-update "travis-ci")
[![](https://coveralls.io/repos/michaeldegroot/check-module-update/badge.svg?branch=master&service=github)](https://coveralls.io/github/michaeldegroot/check-module-update?branch=master)
![](https://img.shields.io/badge/Node-%3E%3Dv4.0.0-green.svg)
![](https://img.shields.io/npm/dt/check-module-update.svg)
![](https://img.shields.io/npm/l/check-module-update.svg)


___
# Keep users on track
Programmatically inform users of new updates of your module. This package query's the npm registry on a update check with a defined set of options.

___
#  Getting Started

##### 1. Start by installing the package:
    npm install check-module-update

##### 2. Do awesome stuff!
```js
updateCheck.check({
  timeout: 1000,      // Normal timeout in milliseconds of a npm registry request
  output: true,       // Display output when a new version is availible
  count: 0,           // Number of retries of a npm registry request
  factor: 0,          // This does... well.. uhm.. factoring
  minTimeout: 150,    // Min timeout in milliseconds for a npm registry request
  maxTimeout: 500,    // Max timeout in milliseconds for a npm registry request
}, (err, newUpdate) => {
  if (err)
    throw new Error(err)

  if (newUpdate)
    console.log('update notification has been displayed to the user!')

  if (!newUpdate)
    console.log('No new update available...')
})
```

___
# Contact
You can contact me at specamps@gmail.com
