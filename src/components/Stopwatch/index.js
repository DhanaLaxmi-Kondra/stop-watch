// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {timeElapsedInSeconds: 0}

  onResetTimer = () => {
    clearInterval(this.timeIterval)
    this.setState({timeElapsedInSeconds: 0})
  }

  onStopTimer = () => {
    clearInterval(this.timeIterval)
  }

  updatedTime = () => {
    this.setState(prevSate => ({
      timeElapsedInSeconds: prevSate.timeElapsedInSeconds + 1,
    }))
  }

  onStartTimer = () => {
    this.timeIterval = setInterval(this.updatedTime, 1000)
  }

  renderSecond = () => {
    const {timeElapsedInSeconds} = this.state
    const second = timeElapsedInSeconds % 60
    if (second < 10) {
      return `0${second}`
    }
    return second
  }

  renderMinute = () => {
    const {timeElapsedInSeconds} = this.state
    const minute = Math.floor(timeElapsedInSeconds / 60)
    if (minute < 10) {
      return `0${minute}`
    }
    return minute
  }

  render() {
    const time = `${this.renderMinute()}:${this.renderSecond()}`
    return (
      <div className="container">
        <h1 className="heading">Stopwatch</h1>
        <div className="card">
          <div className="top">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="img"
            />
            <p className="para">Timer</p>
          </div>
          <h1 className="timer">{time}</h1>
          <div className="bottom">
            <button type="button" className="btn1" onClick={this.onStartTimer}>
              Start
            </button>
            <button type="button" className="btn2" onClick={this.onStopTimer}>
              Stop
            </button>
            <button type="button" className="btn3" onClick={this.onResetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
