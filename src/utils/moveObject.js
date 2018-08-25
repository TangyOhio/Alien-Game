import { calculateAngle } from './formulas'

const moveObject = (state, action) => {
  if (!action.mousePosition) return state

  const { x, y } = action.mousePosition
  const angle = calculateAngle(0, 0, x, y)
  return {
    angle
  }
}

export default moveObject
