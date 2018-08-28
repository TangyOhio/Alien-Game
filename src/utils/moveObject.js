import React from 'react'
import { calculateAngle } from './formulas'
import FlyingObjectContainer from './FlyingObjectContainer'

const moveObject = (state, action) => {
  const mousePosition = action.mousePosition || {
    x: 0,
    y: 0,
  }
  
  const newState = <FlyingObjectContainer reduxState={state} />

  const { x, y } = mousePosition
  const angle = calculateAngle(0, 0, x, y)
  return {
    ...newState,
    angle
  }
}

export default moveObject
