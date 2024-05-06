import { Component } from "react";
import "./employees-list-item.css";

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      like: false,
    };
  }
  // Метод на повышения сотрудника 
  onIncrease = () => {
    this.setState(({increase}) => ({
      increase: !increase
    }))
  }
  
  // Метод добовления like повышения сотруднику 
  onLike = () => {
    this.setState(({like}) => ({
      like: !like
    }))
  }


  render() {
    const { name, salary} = this.props;
    const  {increase, like} = this.state;
    let clasNames = "list-group-item d-flex justify-content-between";

    if (increase) {
      clasNames += " increase";
    }

    if (like) {
      clasNames += " like"
    }

    return (
      <li className={clasNames}>
        <span 
          onClick={this.onLike}
          className="list-group-item-label">{name}</span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button 
            onClick={this.onIncrease} 
            type="button" 
            className="btn-cookie btn-sm ">
            <i className="fas fa-cookie"></i>
          </button>

          <button 
            type="button" 
            className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
