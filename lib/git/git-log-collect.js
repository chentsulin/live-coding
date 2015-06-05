'use strict'

var exec = require('child_process').exec
var Promise = require('bluebird')


function toCommitArray(log) {
  return log.split('\n')
  .filter(function(line) {
    return line
  })
  .map(function(line) {
    var parts = line.split(' ')
    return {
      sha: parts[0],
      message: parts.splice(1).join(' ')
    }
  })
}


module.exports = function(repoName, opts) {
  return new Promise(function(resolve, reject) {
    exec('git log --all', opts,
    function(err, stdout, stderr) {
      console.log(stdout)
      console.log(stderr)
      if (err) {
        reject(err)
      } else {
        resolve(toCommitArray(stdout))
      }
    })
  })
}

