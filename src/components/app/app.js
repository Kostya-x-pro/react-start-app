import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import EmployessList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';




class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: [
        { name: "Ivan C.", salary:500, rise: true, increase: false, id:1 },
        { name:"Alina M.", salary:1000, rise: false, increase: false, id:2 },
        { name:"Anna V.", salary:2000, rise: false, increase: true, id:3 },
        { name:"Alexey J.", salary:5000, rise: false, increase: false, id:4 },
      ]
    }
    this.maxId = 5;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
      // 2. способ удаления элемента 
        return {
          data: data.filter(elem => elem.id !== id)
        }

      // 1. способ удаления элемента 
      // const index = data.findIndex(elem => elem.id === id);
      // const before = data.slice(0, index);
      // const after = data.slice(index + 1);
      // return {
      //   data: [...before, ...after]
      // }
    })
  }

  // Функционеал по добовлению сотрудника
  addItem = (name, salary) => {
    const newItem = {
      name: name, 
      salary: salary, 
      rise: false, 
      increase: false, 
      id: this.maxId++
    }

    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    })
  }

  // Метод для повышения сотрудника
  onToggleIncrease = (id) => {
    // 1. Вариант
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, increase: !item.increase}
        }
        return item;
      })
    }))
  }
   // Метод для выделения сотруднику премии
  onToggleRise = (id) => {
    // 2. Вариант
    this.setState(({data}) => {
      const index = data.findIndex(item => item.id === id)
      const old = data[index]
      const newItem = {...old, rise: !old.rise};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return {
        data: newArr
      }
    })
  }
  // Оптимизация двух методов onToggleIncrease и onToggleRise
  // onToggleProp = (id, prop) => {
  //   // 1. Вариант
  //   this.setState(({data}) => ({
  //     data: data.map(item => {
  //       if (item.id === id) {
  //         return {...item, [prop]: !item[prop]}
  //       }
  //       return item;
  //     })
  //   }))
  // }
  
  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase === true).length;

    return (
      <div className="app">
        <AppInfo 
          employees={employees}
          employeesRise={increased}  
          />
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <EmployessList 
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
          // onToggleProp={this.onToggleProp}
           />
        <EmployeesAddForm
          onAdd={this.addItem}
        />
      </div>
    )
  }
}

export default App;