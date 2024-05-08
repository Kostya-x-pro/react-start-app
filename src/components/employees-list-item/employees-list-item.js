import "./employees-list-item.css";

const EmployeesListItem = (props) => {
    const { name, salary, onDelete, onToggleIncrease, onToggleRise, increase, rise, onToggleProp } = props;

    let clasNames = "list-group-item d-flex justify-content-between";
    if (increase) {
      clasNames += " increase";
    }

    if (rise) {
      clasNames += " like"
    }

    return (
      <li className={clasNames}>
        <span 
          data-toggle="rise"
          onClick={onToggleRise}
          // onClick={onToggleProp}
          className="list-group-item-label">{name}</span>
        <input
          type="text"
          className="list-group-item-input"
          defaultValue={salary + "$"}
        />
        <div className="d-flex justify-content-center align-items-center">
          <button
            data-toggle="increase" 
            onClick={onToggleIncrease}
            // onClick={onToggleProp}
            type="button" 
            className="btn-cookie btn-sm ">
            <i className="fas fa-cookie"></i>
          </button>

          <button 
            type="button" 
            className="btn-trash btn-sm "
            onClick={onDelete}>
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }

export default EmployeesListItem;
