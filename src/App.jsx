import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "john_doe",
    email: "Ajayadav672@gmail.com",
    age: 25,
    country: "USA"
  }

  return (
    <>
    <Card username = "chaiaurcode" someObj ={myObj}/>
    <Card username = "Ajad" someObj ={myObj}/>
      <h1 className='bg-green-400 text-black rounded-xl'>Tailwind Css</h1>

      <Card />

    </>
  )
}

export default App
