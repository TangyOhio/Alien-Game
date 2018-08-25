import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCanvasPosition } from './utils/formulas'
import Canvas from './components/Canvas'
import { moveObjects } from './reducers/moveObjects'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    setInterval(() => {
      dispatch(moveObjects(this.canvasMousePosition))
    }, 10)
    console.log(this.props)
  }
  
  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event)
  }

  render() {
    return (
      <Canvas
        angle={this.props.angle}
        trackMouse={event => (this.trackMouse(event))}
      />
    )
  }
}

App.propTypes = {
  angle: PropTypes.number.isRequired,
  moveObjects: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  angle: state.move.angle,
})

export default connect(mapStateToProps)(App)
