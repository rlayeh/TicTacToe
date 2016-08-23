import expect from 'expect'
import 'babel-polyfill'
import victoryResolver from '../../src/engine/victoryResolver'

describe('victoryResolver', () => {
  it('should exist and be a function', () => {
    expect(victoryResolver).toBeTruthy()
    expect(typeof victoryResolver).toBe('function')
  })

  it('should return null for boardSize equal 0',()=>{
    expect(victoryResolver([{},{}],0)).toBe(null)
  })

  it('should return null for empty moves array',()=>{
    expect(victoryResolver([],2)).toBe(null)
  })

  it('should return winner for first row', ()=>{
    const moves = [{
      x: 0,
      y: 0,
      type: 'circle'
    },
    {
      x: 0,
      y: 1,
      type: 'cross'
    },
    {
      x: 1,
      y: 0,
      type: 'circle'
    },
    {
      x: 0,
      y: 2,
      type: 'cross'
    },
    {
      x: 2,
      y: 0,
      type: 'circle'
    }]

    expect(victoryResolver(moves,3)).toBe('circle')
  })

  it('should return winner for second row', ()=>{
    const moves = [{
      x: 0,
      y: 1,
      type: 'cross'
    },
    {
      x: 1,
      y: 0,
      type: 'circle'
    },
    {
      x: 1,
      y: 1,
      type: 'cross'
    },
    {
      x: 0,
      y: 2,
      type: 'circle'
    },
    {
      x: 2,
      y: 1,
      type: 'cross'
    }]

    expect(victoryResolver(moves,3)).toBe('cross')
  })

  it('should return winner for third row', ()=>{
    const moves = [{
      x: 0,
      y: 2,
      type: 'circle'
    },
    {
      x: 1,
      y: 0,
      type: 'cross'
    },
    {
      x: 1,
      y: 2,
      type: 'circle'
    },
    {
      x: 0,
      y: 1,
      type: 'cross'
    },
    {
      x: 2,
      y: 2,
      type: 'circle'
    }]

    expect(victoryResolver(moves,3)).toBe('circle')
  })

  it('should return winner for first column', ()=>{
    const moves = [{
      x: 0,
      y: 0,
      type: 'cross'
    },
    {
      x: 1,
      y: 0,
      type: 'circle'
    },
    {
      x: 0,
      y: 1,
      type: 'cross'
    },
    {
      x: 2,
      y: 1,
      type: 'circle'
    },
    {
      x: 0,
      y: 2,
      type: 'cross'
    }]

    expect(victoryResolver(moves,3)).toBe('cross')
  })

  it('should return winner for second column', ()=>{
    const moves = [{
      x: 1,
      y: 0,
      type: 'circle'
    },
    {
      x: 2,
      y: 0,
      type: 'cross'
    },
    {
      x: 1,
      y: 1,
      type: 'circle'
    },
    {
      x: 0,
      y: 1,
      type: 'cross'
    },
    {
      x: 1,
      y: 2,
      type: 'circle'
    }]

    expect(victoryResolver(moves,3)).toBe('circle')
  })

  it('should return winner for third column', ()=>{
    const moves = [{
      x: 2,
      y: 0,
      type: 'cross'
    },
    {
      x: 1,
      y: 0,
      type: 'circle'
    },
    {
      x: 2,
      y: 1,
      type: 'cross'
    },
    {
      x: 0,
      y: 1,
      type: 'circle'
    },
    {
      x: 2,
      y: 2,
      type: 'cross'
    }]

    expect(victoryResolver(moves,3)).toBe('cross')
  })


  it('should return winner for diagonal top left to bottom right', ()=>{
    const moves = [{
      x: 0,
      y: 0,
      type: 'circle'
    },
    {
      x: 1,
      y: 0,
      type: 'cross'
    },
    {
      x: 1,
      y: 1,
      type: 'circle'
    },
    {
      x: 0,
      y: 1,
      type: 'cross'
    },
    {
      x: 2,
      y: 2,
      type: 'circle'
    }]

    expect(victoryResolver(moves,3)).toBe('circle')
  })


  it('should return winner for diagonal bottom left to top right', ()=>{
    const moves = [{
      x: 0,
      y: 2,
      type: 'cross'
    },
    {
      x: 1,
      y: 0,
      type: 'circle'
    },
    {
      x: 1,
      y: 1,
      type: 'cross'
    },
    {
      x: 0,
      y: 1,
      type: 'circle'
    },
    {
      x: 2,
      y: 0,
      type: 'cross'
    }]

    expect(victoryResolver(moves,3)).toBe('cross')
  })

  it('should not return a winner if there are less than minimal amount of moves', ()=>{
    const moves = [{
      x: 0,
      y: 0,
      type: 'cross'
    },
    {
      x: 1,
      y: 0,
      type: 'circle'
    },
    {
      x: 1,
      y: 1,
      type: 'cross'
    },
    {
      x: 2,
      y: 2,
      type: 'cross'
    }]

    expect(victoryResolver(moves,3)).toBe(null)
  })

  it('should return null for not winning scenario', ()=>{
    const moves = [{
      x: 0,
      y: 0,
      type: 'circle'
    },
    {
      x: 1,
      y: 0,
      type: 'cross'
    },
    {
      x: 2,
      y: 0,
      type: 'circle'
    },
    {
      x: 0,
      y: 1,
      type: 'cross'
    },
    {
      x: 1,
      y: 1,
      type: 'circle'
    },
    {
      x: 2,
      y: 1,
      type: 'cross'
    }]

    expect(victoryResolver(moves,3)).toBe(null)
  })

  it('should work with a different board size', ()=>{
    const moves = [{
      x: 0,
      y: 3,
      type: 'cross'
    },
    {
      x: 1,
      y: 0,
      type: 'circle'
    },
    {
      x: 1,
      y: 2,
      type: 'cross'
    },
    {
      x: 0,
      y: 1,
      type: 'circle'
    },
    {
      x: 2,
      y: 1,
      type: 'cross'
    },
    {
      x: 0,
      y: 2,
      type: 'circle'
    },
    {
      x: 3,
      y: 0,
      type: 'cross'
    }]

    expect(victoryResolver(moves,4)).toBe('cross')
  })
})
