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
}

const mapStateToProps = state => ({
  angle: state.move.angle,
})

export default connect(mapStateToProps)(App)
