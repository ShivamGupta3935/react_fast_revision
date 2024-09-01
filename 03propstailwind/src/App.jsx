import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className="text-3xl font-bold underline">
    Hello world!
    </h1>
    <Card username="shivam" btnText="visit me " src="https://media.istockphoto.com/id/1372481295/photo/photo-of-school-boy-wear-yellow-t-shirt-backpack-in-background-stock-photo.jpg?s=1024x1024&w=is&k=20&c=tYIeshdaLJRFIlpE_FRonTchQi_Ps71xiPhGNLgCMb8="/>
    <Card username="manish" btnText='go_to' src="https://media.istockphoto.com/id/1160527868/photo/young-indian-cute-child-with-book.jpg?s=1024x1024&w=is&k=20&c=ONnmgpnUj0wm8mihWcrPOtqxHCLw2oX9I9aZBtvdgGQ="/>

    </>
  )
}

export default App
