const WhoAmI = ({name, surename, link}) => {
  return (
    <div style={{
        margin: '30px',
        padding: '20px',
        textAlign: 'center',
        border: '2px solid black'
      }}>
      {/* пропсы переданные в качестве строки */}
      <h1>My name is: {name}</h1>

      {/* Пропcы переданный в качестве объекта */}
      <h2>surename: {surename.secondName}</h2>

      {/* Пропcы переданный в качестве функции */}
      <a href={link()}>My profile</a>

    </div>
  )
}

export default WhoAmI;