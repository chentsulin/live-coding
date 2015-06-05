'use strict'

var exec = require('child_process').exec
var Promise = require('bluebird')

module.exports = function(commit1, commit2, opts) {
  return new Promise(function(resolve, reject) {
    exec('git diff ' + commit1 + ' ' + commit2, opts,
    function(err, stdout, stderr) {
      console.log(stdout)
      console.log(stderr)
      if (err) {
        reject(err)
      } else {
        resolve(stdout)
      }
    })
  })
}


