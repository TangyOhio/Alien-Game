export default (state) => {
  return {
    gameState: {
      ...state,
      started: true,
    }
  }
}
