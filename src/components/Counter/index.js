import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    console.log('Increase clicked')
    this.setState(prevSt => {
      let newCount = prevSt.count + 1
      return {count: newCount}
    })
  }

  onDecrement = () => {
    console.log('Decrease clicked')
    this.setState(prevSt => {
      let newCount = prevSt.count - 1
      return {count: newCount}
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick={this.onDecrement}>
            Decrease
          </button>
        </div>
      </div>
    )
  }
}

export default Counter
