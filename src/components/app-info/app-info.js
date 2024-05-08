import './app-info.css';

const AppInfo = ({employees, employeesRise}) => {
  return (
    <div className="app-info">
      <h1>Учёт сотрудников в компанни Aston</h1>
      <h2>Общее число сотрудников: {employees}</h2>
      <h2>Премию получат: {employeesRise}</h2>
    </div>
  )
}

export default AppInfo;