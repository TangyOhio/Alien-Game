import startNew from '../utils/startNew'

const START_GAME = 'START_GAME'

export const startGame = () => ({
  type: START_GAME,
})

const initialGameState = {
  gameState: {
    started: false,
    kills: 0,
    lives: 3,
  }
}

const start = (state = initialGameState, action) => {
  switch (action.type) {
    case START_GAME:
      return startNew(state, initialGameState)
    default:
      return state
  }
}

export default start
