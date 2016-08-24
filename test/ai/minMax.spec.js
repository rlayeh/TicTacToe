import expect from 'expect'
import minMax from '../../src/ai/minMax'

describe('minMax', () => {
  it('should exist and be a function', () => {
    expect(minMax).toBeTruthy()
    expect(typeof minMax).toBe('function')
  })

})
