const nodeModulesCheck = require('./lib')
const path = require('path')

nodeModulesCheck(path.join(__dirname, 'node_modules'))
  .then(() => console.log('done'))
  .catch(err => console.error(err))
