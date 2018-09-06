import React from 'react'
import { calculateAngle } from './formulas'
import CreateFlyingObjects from './createFlyingObjects'

const moveObject = (state, action) => {
  const mousePosition = action.mousePosition || {
    x: 0,
    y: 0,
  }
  
  let newState = <CreateFlyingObjects />
  console.log(newState)

  const { x, y } = mousePosition
  const angle = calculateAngle(0, 0, x, y)
  return {
    ...newState,
    angle
  }
}

export default moveObject
