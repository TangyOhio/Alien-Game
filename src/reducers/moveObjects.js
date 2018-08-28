import moveObject from '../utils/moveObject'

const MOVE_OBJECTS = 'MOVE_OBJECTS'

export const moveObjects = (mousePosition) => ({
  type: MOVE_OBJECTS,
  mousePosition
})

const initialState = {
  angle: 45,
  flyingObjects: [],
  lastObjectCreatedAt: new Date(),
}

const move = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_OBJECTS:
      return moveObject(state, action)
    default:
      return state
  }
}

export default move
