import React from 'react'
import { calculateAngle } from './formulas'
import createFlyingObjects from './createFlyingObjects'

const moveObject = (state, action) => {
  const mousePosition = action.mousePosition || {
    x: 0,
    y: 0,
  }
  
  const newState = { createFlyingObjects, }
  
  const { x, y } = mousePosition
  const angle = calculateAngle(0, 0, x, y)
  return {
    ...newState,
    angle
  }
}

export default moveObject
