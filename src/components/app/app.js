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
        { name: "Ivan C.", salary:500, like: false, increase: false, id:1 },
        { name:"Alina M.", salary:1000, like: false, increase: false, id:2 },
        { name:"Anna V.", salary:2000, like: false, increase: true, id:3 },
        { name:"Alexey J.", salary:5000, like: false, increase: false, id:4 },
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
      like: false, 
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
  
  render() {
    return (
      <div className="app">
        <AppInfo/>
        <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
        </div>
        <EmployessList 
          data={this.state.data}
          onDelete={this.deleteItem} />
        <EmployeesAddForm
          onAdd={this.addItem}
        />
      </div>
    )
  }
}

export default App;