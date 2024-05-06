import { Component } from "react";
import "./counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.counter
    }
  }

  // изменение state с деструкторизацией объекта 
  increment = () => {
    if (this.state.counter < 50) {
      this.setState(({counter}) => ({
        counter: counter + 1
      }))
    }
  }
  // изменение state без деструкторизации объекта 
  decrement = () => {
    if (this.state.counter > -50) {
      this.setState(state => ({
        counter: state.counter - 1
      }))
    }
  }

  // просто колбэк в стэйте т.к нам не нужно предыдущее состояние
  clearCounter = () => {
    this.setState(() => ({
      counter: this.props.counter
    }))
  }

  getRandomCounter = () => {
    this.setState(() => ({
      counter: Math.floor(Math.random() * (50 - -50) + -50)
    }))
  }

  render() {
    const {counter} = this.state 

    return (
      <div className="app">
        <div className="counter">{counter}</div>
        <div className="controls">
          <button onClick={this.increment}>INC</button>
          <button onClick={this.decrement}>DEC</button>
          <button onClick={this.getRandomCounter}>RND</button>
          <button onClick={this.clearCounter}>RESET</button>
        </div>
      </div>
    );
  }
}

export default Counter;
