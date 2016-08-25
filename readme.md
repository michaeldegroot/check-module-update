[![](https://nodei.co/npm/check-module-update.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/check-module-update)   
[![](https://david-dm.org/michaeldegroot/check-module-update.svg "deps") ](https://david-dm.org/michaeldegroot/check-module-update "david-dm")
[![](https://travis-ci.org/michaeldegroot/check-module-update.svg?branch=master "testing") ](https://travis-ci.org/michaeldegroot/check-module-update "travis-ci")
[![](https://coveralls.io/repos/michaeldegroot/check-module-update/badge.svg?branch=master&service=github)](https://coveralls.io/github/michaeldegroot/check-module-update?branch=master)
![](https://img.shields.io/badge/Node-%3E%3D0.10-green.svg)
![](https://img.shields.io/npm/dt/check-module-update.svg)
![](https://img.shields.io/npm/l/check-module-update.svg)


___
# More to come
...

___
#  Getting Started

##### 1. Start by installing the package:
    npm install check-module-update

##### 2. Load the code
```js
  const updateCheck = require('check-module-update')

  updateCheck.init({
    timeout: 1000,
  })
```

##### 3. Do awesome stuff!
```js
updateCheck.check(() => {
  console.log('check done, if there is a update it will be displayed to the user')
})
```

___
# Contact
You can contact me at specamps@gmail.com
