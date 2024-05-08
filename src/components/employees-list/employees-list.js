import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployessList = ({data, onDelete, onToggleIncrease, onToggleRise, onToggleProp }) => {

  const elements = data.map(item => {
    // Деструкторизация по остаточному принципу
    const {id, ...itemProps} = item; 

    return (
      // обычный перебор
      // <EmployeesListItem name={item.name} salary={item.salary}/>
      
      //c помощью спрет оператора
      <EmployeesListItem 
        key={id} 
        {...itemProps}
         onDelete={() => onDelete(id)}
         onToggleIncrease={() => onToggleIncrease(id)}
         onToggleRise={() => onToggleRise(id)}
        //  onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} 
        />
    )
  })

  return (
    <ul className="app-list list-group">
      {/* можно передать денамически массив который просто развернётся*/}
      {elements}
      {/* <EmployeesListItem name="Ivan C." salary={500}/>
      <EmployeesListItem name="Alina M." salary={1000}/>
      <EmployeesListItem name="Anna V." salary={2000}/>
      <EmployeesListItem name="Alexey J." salary={5000}/> */}
    </ul>
  )
}

export default EmployessList;