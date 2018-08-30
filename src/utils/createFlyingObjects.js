import React from 'react'
import { connect } from 'react-redux'
import {
  createInterval, 
  flyingObjectsStarterYAxis, 
  maxFlyingObjects,
  flyingObjectsStarterPositions
} from '../utils/constants'

class createFlyingObjects extends React.Component {
  
  checkGame = (props) => {
    if (!props.gameState.started) return props
  
    const now = (new Date()).getTime()
    const { lastObjectCreatedAt, flyingObjects } = props.state
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
    return newFlyingObject
  }

  render() {
    this.checkGame(this.props)
    console.log('help')
    return {
      flyingObjects: [
        ...this.props.gameState.flyingObjects,
        this.newFlyingObject
      ],
      lastObjectCreatedAt: new Date(),
      gameState: {
        ...this.props.gameState,
      }
    }
  }
}

const mapStateToProps = state => ({
  gameState: state.start.gameState,
})

export default connect(mapStateToProps)(createFlyingObjects)
