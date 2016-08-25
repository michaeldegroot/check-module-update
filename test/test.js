'use strict'

const path = require('path')
var assert = require('assert')
var assert = require('assert-plus')
var updateCheck  = require('../index')

describe('A test', function() {
  it('should work', function(done) {
    assert.doesNotThrow(function() {
      updateCheck.check({
        timeout:    1000,
        output:     true,
        count:      0,
        factor:     0,
        minTimeout: 150,
        maxTimeout: 500,
        path:       path.join(__dirname, '../'),
      }, (err, newUpdate) => {
        if (err)
          throw new Error(err)

        if (newUpdate)
          console.log('update notification has been displayed to the user!')

        if (!newUpdate)
          console.log('No new update availible...')

        done()
      })
    }, Error)
  })
})
