import uniqueRandomArray from 'unique-random-array'
const GBPackersNames = require('./GBPackers-names.json')

const mainExport = {
  all: GBPackersNames,
  random: uniqueRandomArray(GBPackersNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
