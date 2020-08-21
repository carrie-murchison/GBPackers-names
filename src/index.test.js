import {expect} from 'chai'
import GBPackersNames from '.'

describe('GBPackers-names', () => {
  it('should have a list of all available names', () => {
    expect(GBPackersNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(GBPackersNames.random()).to.satisfy(isIncludedIn(GBPackersNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
