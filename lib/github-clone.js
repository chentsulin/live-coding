'use strict'

var exec = require('child_process').exec
var Promise = require('bluebird')

module.exports = function(repo, opts) {
  return new Promise(function(resolve, reject) {
    exec('git clone https://github.com/' + repo + '.git', opts,
    function(err, stdout, stderr) {
      console.log(stdout)
      console.log(stderr)
      if (err) {
        reject(err)
      } else {
        resolve({
          repo: repo,
          stdout: stdout,
          stderr: stderr
        })
      }
    })
  })
}


