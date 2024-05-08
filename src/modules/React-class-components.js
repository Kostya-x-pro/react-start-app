import { Component } from "react";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      years: 30,
      text: "+++",
      position: "",
    };
    // способ жестко привязать контекст к функции
    this.commitInputChanges = this.commitInputChanges.bind(this);
  }

  // способ изменения состояния (state)
  nextYear = () => {
    this.setState((state) => ({
      years: state.years + 1,
    }));
  };

  // способ жестко привязать контекст к functionDeclaration
  commitInputChanges(e) {
    this.setState({
      position: e.target.value,
    });
  }

  render() {
    console.log(this);
    const { name, surename, link } = this.props;
    const { position, text, years } = this.state;

    return (
      <>
        <div
          style={{
            margin: "20px",
            padding: "20px",
            border: "1px solid black",
          }}
        >
          <button onClick={this.nextYear}>{text}</button>
          <h1>My name is {name}</h1>
          <h2>
            My surename is {surename} age: {years}
          </h2>
          <p>Position: {position}</p>
          <a href={link}>My profile</a>
          <form>
            <span>Введите должность</span>
            <input type="text" onChange={this.commitInputChanges} />
          </form>
        </div>
      </>
    );
  }
}

export default AboutMe;
