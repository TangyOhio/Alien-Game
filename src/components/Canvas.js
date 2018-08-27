import React from 'react'
import PropTypes from 'prop-types'
import Sky from './Sky'
import Ground from './Ground'
import CurrentScore from './CurrentScore'
import Heart from './Heart'
import StartGame from './StartGame'
import Title from './Title'
import CannonBase from './cannon/CannonBase'
import CannonPipe from './cannon/CannonPipe'
import CannonBall from './cannon/CannonBall'
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
      <CannonBall position={{ x: 0, y: -100 }} />
      <CurrentScore score={15} />
      <FlyingObject position={{ x: -150, y: -300 }} />
      <FlyingObject position={{ x: 150, y: -300 }} />
      <Heart position={{ x: -300, y: 35 }} />
      <StartGame onClick={() => console.log('Aliens, Go Home!')} />
      <Title />
    </svg>
  )
}

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired,
}

export default Canvas
