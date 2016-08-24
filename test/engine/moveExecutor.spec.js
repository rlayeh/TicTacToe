import expect from 'expect'
import moveExecutor from '../../src/engine/moveExecutor'
import figureType from '../../src/engine/figureType'

describe('moveExecutor', () => {
  it('should exist and be a function', () => {
    expect(moveExecutor).toBeTruthy()
    expect(typeof moveExecutor).toBe('function')
  })

  it('should return new array', ()=>{
  	const moves = []

    const result = moveExecutor(moves,0, 0)
  	expect(result).toNotBe(moves)
  })

  it('should return an array with a new move', ()=>{
    const moves = [{
      x: 1,
      y: 1,
      type: figureType.circle
    },{
      x: 0,
      y: 1,
      type: figureType.cross
    }]

    const result = moveExecutor(moves,0, 0)
    expect(result.length).toBe(moves.length + 1)
  })

  it('should append move at the end', ()=>{
    const moves = [{
      x: 1,
      y: 1,
      type: figureType.circle
    },{
      x: 0,
      y: 1,
      type: figureType.cross
    }]

    const expected = {
      x: 2,
      y: 2,
      type: figureType.circle
    }

    const result = moveExecutor(moves,2,2)
    expect(result[result.length - 1]).toEqual(expected)
  })
})
