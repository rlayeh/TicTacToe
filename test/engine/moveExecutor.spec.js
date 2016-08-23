import expect from 'expect'
import moveExecutor from '../../src/engine/moveExecutor'

describe('moveExecutor', () => {
  it('should exist and be a function', () => {
    expect(moveExecutor).toBeTruthy()
    expect(typeof moveExecutor).toBe('function')
  })

  it('should return new array', ()=>{
  	const moves = []
    const newMove = {}

    const result = moveExecutor(moves,newMove)
  	expect(result).toNotBe(moves)
  })

  it('should return an array with a new move', ()=>{
    const moves = [{},{}]
    const newMove = {}

    const result = moveExecutor(moves,newMove)
    expect(result.length).toBe(moves.length + 1)
  })

  it('should append move at the end', ()=>{
    const moves = [{},{},{}]
    const newMove = {}

    const result = moveExecutor(moves,newMove)
    expect(result[result.length - 1]).toBe(newMove)
  })
})
