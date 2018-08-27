import React from 'react'
import PropTypes from 'prop-types'
import Sky from './Sky'
import Ground from './Ground'
import CurrentScore from './CurrentScore'
import StartGame from './StartGame'
import Title from './Title'
import CannonBase from './cannon/CannonBase'
import CannonPipe from './cannon/CannonPipe'
import FlyingObject from './flyingObjects/FlyingObject'
import { gameHeight } from '../utils/constants'

const Canvas = (props) => {
  const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight]
  return (
    <svg
      id="aliens-go-home-canvas"
      onMouseMove={props.trackMouse}
      viewBox={viewBox}
    >
      <defs>
        <filter id="shadow">
          <feDropShadow dx="1" dy="1" stdDeviation="2" />
        </filter>
      </defs>
      <Sky />
      <Ground />
      <CannonPipe rotation={props.angle} />
      <CannonBase />
      <CurrentScore score={15} />

      { !props.gameState.started &&
        <g>
          <StartGame onClick={() => props.startGame()} />
          <Title />
        </g>
      }

      { props.gameState.started &&
        <g>
          <FlyingObject position={{ x: -150, y: -300 }} />
          <FlyingObject position={{ x: 150, y: -300 }} />
        </g>
      }
    </svg>
  )
}

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  gameState: PropTypes.shape({
    started: PropTypes.bool.isRequired,
    kills: PropTypes.number.isRequired,
    lives: PropTypes.number.isRequired,
  }).isRequired,
  trackMouse: PropTypes.func.isRequired,
  startGame: PropTypes.func.isRequired,
}

export default Canvas
