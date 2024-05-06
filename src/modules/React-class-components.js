import { Component } from "react";

class AboutMe extends Component {
    constructor(props) {
      super(props)
      this.state = {
        years: 30,
        text: '+++'
      }
    }

  nextYear = () => {
    this.setState(state => ({
      years: state.years + 1
    }))
  }

  render() {
    const {name, surename, link} = this.props;

    return (
      <div style={{
        margin: '20px',
        padding: '20px',
        border: '1px solid black',
      }}>
        <button onClick={this.nextYear}>{this.state.text}</button>
        <h1>My name is {name}</h1>
        <h2>My surename is {surename} age: {this.state.years}</h2>
        <a href={link}>My profile</a>
      </div>
    )
  }
}

export default AboutMe;