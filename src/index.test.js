import {expect} from 'chai'
import GBPackers-names from '.'

describe('GBPackers-names', () => {
  it('should have a list of all available names', () => {
    expect(GBPackers-names.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(GBPackers-names.random()).to.satisfy(isIncludedIn(GBPackers-names.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
