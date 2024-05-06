import AppInfo from '../app-info/app-info';
import AppFilter from '../app-filter/app-filter';
import SearchPanel from '../search-panel/search-panel';
import EmployessList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';


import './app.css';

const data = [
  { name: "Ivan C.", salary:500, increase: false, id:1 },
  { name:"Alina M.", salary:1000, increase: false, id:2 },
  { name:"Anna V.", salary:2000, increase: true, id:3 },
  { name:"Alexey J.", salary:5000, increase: false, id:4 },
]



function App(){
  return (
    <div className="app">
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployessList data={data} />
      <EmployeesAddForm/>
    </div>
  )
}

export default App;