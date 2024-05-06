import { Component } from "react"

// Функциональный компонент
const Header = () => {
  return <h2>Hello I am header component</h2>
}

// Классовый компонент
class Field extends Component {
  
  render() {
    const styledField = {
      width: '300px',
      'background-color': 'yellow'
    }
    // функция внутри компонента 
    const res = () => {
      return 'Type heare'
    }

    return (
      <input 
        style={styledField} 
        placeholder={res()} 
        type="text" />
    )
  }

}

// Функциональный компонент
function Btn() {
  const text = 'Log in';
  const logged = true;

  return <button>{logged ? 'Enter' : text}</button>
}

// Функциональный компонент
function MyComponent() {
  return (
    <div className="component">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  )
}

export default MyComponent;