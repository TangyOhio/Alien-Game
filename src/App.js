import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCanvasPosition } from './utils/formulas'
import Canvas from './components/Canvas'
import { moveObjects } from './reducers/moveObjects'
import { startGame } from './reducers/startGame'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    setInterval(() => {
      dispatch(moveObjects(this.canvasMousePosition))
    }, 10)
    
    window.onresize = () => {
      const cnv = document.getElementById('aliens-go-home-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize()
  }
  
  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event)
  }

  render() {
    const { dispatch, angle, flyingObjects, gameState } = this.props
    return (
      <Canvas
        angle={angle}
        flyingObjects={flyingObjects}
        trackMouse={event => (this.trackMouse(event))}
        gameState={gameState}
        startGame={() => dispatch(startGame())}
      />
    )
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  flyingObjects: PropTypes.arrayOf(PropTypes.shape({
    position: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired
    }).isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
  }).isRequired,
}

const mapStateToProps = state => ({
  angle: state.move.angle,
  flyingObjects: state.move.flyingObjects,
  gameState: state.start.gameState,
})

export default connect(mapStateToProps)(App)
