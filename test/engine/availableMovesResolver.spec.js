import expect from 'expect'
import availableMovesResolver from '../../src/engine/availableMovesResolver'

describe('availableMovesResolver', () => {
  it('should exist and be a function', () => {
    expect(availableMovesResolver).toBeTruthy()
    expect(typeof availableMovesResolver).toBe('function')
  })

  it('should work correctly for a 0 sized board', ()=>{
  	let testArray = [
  						{
  							x:1,
  							y:2
  						},
  						{
  							x:2,
  							y:1
  						}
  					]
  	expect(availableMovesResolver(testArray,0)).toEqual([])
  })

  it('should work correctly with an empty moves array', ()=>{
  	const expected = [{
  		x:0,
  		y:0
  	},
  	{
  		x:1,
  		y:0
  	},
  	{
  		x:0,
  		y:1
  	},
  	{
  		x:1,
  		y:1
  	}
  	]

  	expect(availableMovesResolver([],2)).toEqual(expected)
  })

  it('should return subset of available moves', ()=>{
  	const moves = [{
  		x:0,
  		y:1
  	},{
  		x:1,
  		y:0
  	}]

  	const expected = [{
  		x:0,
  		y:0
  	},
  	{
  		x:1,
  		y:1
  	}
  	]

  	expect(availableMovesResolver(moves,2)).toEqual(expected)
  })

})
