import './App.css'
import Card from './component/Card';

function App() {

  const users = [
    {
      id: 1,
      name: "Rafael",
      gender: "male"
    },
    {
      id: 2,
      name: "Icha",
      gender: "femal"
    },
    {
      id: 3,
      name: "Quentin Taranthino",
      gender: "male"
    }
  ];

  return(
    <>
      {
        users.map((user) => {
          return (
            <Card
              key={user.id}
              name={user.name}
              gender={user.gender}
            />
          );
        })
      }
    </>
  )
}

export default App
