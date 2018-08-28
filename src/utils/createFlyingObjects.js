import {
  createInterval, 
  flyingObjectsStarterYAxis, 
  maxFlyingObjects,
  flyingObjectsStarterPositions
} from '../utils/constants'

export default (props) => {
  if (!props.gameState.started) return props

  const now = (new Date()).getTime()
  const { lastObjectCreatedAt, flyingObjects } = props.gameState
  const createNewObject = (
    now - (lastObjectCreatedAt).getTime() > createInterval &&
    flyingObjects.length < maxFlyingObjects
  )

  if (!createNewObject) return props

  const id = (new Date()).getTime()
  const predefinedPosition = Math.floor(Math.random() * maxFlyingObjects)
  const flyingObjectPosition = flyingObjectsStarterPositions[predefinedPosition]
  const newFlyingObject = {
    position: {
      x: flyingObjectPosition,
      y: flyingObjectsStarterYAxis,
    },
    createdAt: (new Date()).getTime(),
    id,
  }

  return {
    ...props,
    flyingObjects: [
      ...props.gameState.flyingObjects,
      newFlyingObject
    ],
    lastObjectCreatedAt: new Date(),
    gameState: {
      ...props.gameState,
    }
  }
}
