import React from 'react'
import { connect } from 'react-redux'
import createFlyingObjects from './createFlyingObjects'

class FlyingObjectContainer extends React.Component {
  render() {
    const { reduxState, gameState } = this.props
    return(
      createFlyingObjects(reduxState, gameState)
    )
  }
}


const mapStateToProps = state => ({
  gameState: state.start.gameState,
})

export default connect(mapStateToProps)(FlyingObjectContainer)
