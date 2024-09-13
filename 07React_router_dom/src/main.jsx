import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Home, About, Contact, User, Github } from './Components/index.js'
import { githubInfoLoader } from './Components/Github/Github.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/> }/>
      <Route path='about' element={<About/> }/>
      <Route path='contact' element={<Contact/> }/>
      <Route path='user/:userId' element={<User/> }/>
      <Route 
      loader={githubInfoLoader}
      path='github' element={<Github/> }/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
